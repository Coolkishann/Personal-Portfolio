"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";

/* =========================================================
   TYPES
========================================================= */

export type PhysicsBadge = {
  text?: string;
  image?: string;
  status?: boolean;
  type?: "pill" | "avatar";
};

type Props = {
  labels: PhysicsBadge[];
};

/* =========================================================
   SAFE SPAWN (NO OVERLAP)
========================================================= */

function getSafePosition(
  existing: { x: number; y: number; r: number }[],
  width: number,
  height: number,
  radius: number,
) {
  let x = 0;
  let y = 0;
  let safe = false;
  let attempts = 0;

  while (!safe && attempts < 200) {
    x = radius + Math.random() * (width - radius * 2);
    y = radius + Math.random() * (height * 0.6);

    safe = true;

    for (const e of existing) {
      const dx = e.x - x;
      const dy = e.y - y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < e.r + radius + 30) {
        safe = false;
        break;
      }
    }

    attempts++;
  }

  return { x, y };
}

/* =========================================================
   COMPONENT
========================================================= */

export function PhysicsBadges({ labels }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRefs = useRef<HTMLDivElement[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const {
      Engine,
      Runner,
      Bodies,
      Composite,
      Body,
      Mouse,
      MouseConstraint,
      Events,
    } = Matter;

    /* ================= ENGINE ================= */

    const engine = Engine.create();
    engine.gravity.y = 0.02; // ⭐ premium floating

    const runner = Runner.create();
    Runner.run(runner, engine);

    const rect = container.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const world = engine.world;

    /* ================= WALLS ================= */

    const padding = 200;

    Composite.add(world, [
      Bodies.rectangle(width / 2, -padding, width + padding * 2, padding * 2, { isStatic: true }),
      Bodies.rectangle(width / 2, height + padding, width + padding * 2, padding * 2, { isStatic: true }),
      Bodies.rectangle(-padding, height / 2, padding * 2, height + padding * 2, { isStatic: true }),
      Bodies.rectangle(width + padding, height / 2, padding * 2, height + padding * 2, { isStatic: true }),
    ]);

    /* ================= SPAWN ================= */

    const placed: { x: number; y: number; r: number }[] = [];

    const bodies = labels.map((badge) => {
      const radius = badge.type === "avatar" ? 60 : 120;

      const { x, y } = getSafePosition(
        placed,
        width,
        height,
        radius,
      );

      placed.push({ x, y, r: radius });

      let body;

      if (badge.type === "avatar") {
        body = Bodies.circle(x, y, 48, {
          restitution: 0.9,
          frictionAir: 0.03,
        });
      } else {
        body = Bodies.rectangle(x, y, 220, 56, {
          restitution: 0.9,
          frictionAir: 0.03,
        });
      }

      Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 4,
        y: (Math.random() - 0.5) * 4,
      });

      Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05);
      // Body.setAngularDamping(body, 0.4);

      return body;
    });

    Composite.add(world, bodies);

    /* ================= CURSOR TRACK ================= */

    const move = (e: MouseEvent) => {
      const r = container.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - r.left,
        y: e.clientY - r.top,
      };
    };

    window.addEventListener("mousemove", move);

    /* ================= DRAG ================= */

    const mouse = Mouse.create(container);

    Composite.add(
      world,
      MouseConstraint.create(engine, {
        mouse,
        constraint: {
          stiffness: 0.08,
          damping: 0.2,
          render: { visible: false },
        },
      }),
    );

    /* ================= MAIN LOOP ================= */

    Events.on(engine, "afterUpdate", () => {
      const time = engine.timing.timestamp * 0.001;

      bodies.forEach((body, i) => {
        const el = badgeRefs.current[i];
        if (!el) return;

        /* FLOATING MOTION */
        Body.applyForce(body, body.position, {
          x: Math.sin(time + i) * 0.00003,
          y: Math.cos(time * 0.7 + i) * 0.00003,
        });

        /* CURSOR MAGNET */
        const dx = mousePos.current.x - body.position.x;
        const dy = mousePos.current.y - body.position.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 220) {
          Body.applyForce(body, body.position, {
            x: dx * 0.0000008,
            y: dy * 0.0000008,
          });
        }

        /* BADGE REPULSION */
        bodies.forEach((other, j) => {
          if (i === j) return;

          const dx = body.position.x - other.position.x;
          const dy = body.position.y - other.position.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            Body.applyForce(body, body.position, {
              x: dx * 0.00002,
              y: dy * 0.00002,
            });
          }
        });

        /* DEPTH EFFECT */
        const depth = body.position.y / height;

        el.style.zIndex = String(Math.round(body.position.y));
        el.style.opacity = String(0.75 + depth * 0.25);
        el.style.filter = `blur(${depth * 0.6}px)`;

        el.style.transform = `
          translate(-50%, -50%)
          translate(${body.position.x}px, ${body.position.y}px)
          rotate(${body.angle}rad)
        `;
      });
    });

    /* ================= CLEANUP ================= */

    return () => {
      Runner.stop(runner);
      Matter.Engine.clear(engine);
      window.removeEventListener("mousemove", move);
    };
  }, [labels]);

  /* ================= UI ================= */

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[220px] overflow-visible"
    >
      {labels.map((badge, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) badgeRefs.current[i] = el;
          }}
          className="absolute will-change-transform select-none"
        >
          {badge.type === "avatar" ? (
            <div className="h-24 w-24 rounded-full border border-zinc-700 overflow-hidden shadow-xl">
              <img
                src={badge.image}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="flex items-center gap-2 rounded-full border bg-black border-zinc-100 px-6 py-3 text-xs font-mono text-zinc-100">
              <span className="text-[40px]">{badge.text}</span>
              {badge.status && (
                <span className="h-3 w-3 rounded-full bg-green-500" />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}