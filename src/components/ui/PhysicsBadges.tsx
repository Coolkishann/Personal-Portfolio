//  "use client";

// import { useEffect, useRef } from "react";
// import Matter from "matter-js";

// export type PhysicsBadge = {
//   text?: string;
//   emoji?: string;
//   status?: boolean;
//   image?: string;
//   type?: "pill" | "avatar";
// };

// type Props = {
//   labels: PhysicsBadge[];
// };

// export function PhysicsBadges({ labels }: Props) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const badgeRefs = useRef<HTMLDivElement[]>([]);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const {
//       Engine,
//       Runner,
//       Bodies,
//       Composite,
//       Body,
//       Mouse,
//       MouseConstraint,
//       Events,
//     } = Matter;

//     const engine = Engine.create();
//     engine.gravity.y = 0.4;
//     engine.enableSleeping = false;

//     const runner = Runner.create();
//     Runner.run(runner, engine);

//     const rect = container.getBoundingClientRect();
//     const width = rect.width;
//     const height = rect.height;

//     const world = engine.world;

//     // walls
//     Composite.add(world, [
//       Bodies.rectangle(width / 2, -20, width, 40, { isStatic: true }),
//       Bodies.rectangle(width / 2, height + 20, width, 40, { isStatic: true }),
//       Bodies.rectangle(-20, height / 2, 40, height, { isStatic: true }),
//       Bodies.rectangle(width + 20, height / 2, 40, height, {
//         isStatic: true,
//       }),
//     ]);

//     // create physics bodies
//     // const bodies = labels.map(() =>
//     //   Bodies.rectangle(Math.random() * width, Math.random() * 60, 180, 44, {
//     //     restitution: 0.9,
//     //     frictionAir: 0.02,
//     //   }),
//     // );
// const bodies = labels.map((badge) => {
//   if (badge.type === "avatar") {
//     return Bodies.circle(
//       Math.random() * width,
//       40,
//       28,
//       // radius
//       {
//         restitution: 0.9,
//         frictionAir: 0.02,
//         density: 0.005,
//       },
//     );
//   }

//   return Bodies.rectangle(Math.random() * width, 40, 180, 44, {
//     restitution: 0.9,
//     frictionAir: 0.02,
//   });
// });
//     Composite.add(world, bodies);

//     // mouse drag
//     const mouse = Mouse.create(container);

//     Composite.add(
//       world,
//       MouseConstraint.create(engine, {
//         mouse,
//         constraint: { stiffness: 0.2, render: { visible: false } },
//       }),
//     );

//     // sync DOM with physics
//     Events.on(engine, "afterUpdate", () => {
//       bodies.forEach((body, i) => {
//         const el = badgeRefs.current[i];
//         if (!el) return;

//         el.style.transform = `
//           translate(-50%, -50%)
//           translate(${body.position.x}px, ${body.position.y}px)
//           rotate(${body.angle}rad)
//         `;
//       });
//     });

//     return () => {
//       Runner.stop(runner);
//       Matter.Engine.clear(engine);
//     };
//   }, [labels]);

//   return (
//     <div ref={containerRef} className="relative w-full h-full">
//       {labels.map((badge, i) => (
//         <div
//           key={i}
//           ref={(el) => {
//             if (el) badgeRefs.current[i] = el;
//           }}
//           className="absolute"
//         >
//           {/* ⭐ AVATAR BADGE */}
//           {badge.type === "avatar" ? (
//   <div className="absolute z-50">
//     <div className="h-24 w-24 rounded-full border border-zinc-700 overflow-hidden shadow-xl">
//       <img
//         src={badge.image}
//         alt="profile"
//         className="h-full w-full object-cover"
//       />
//     </div>
//   </div>
// ) : (
//             /* ⭐ NORMAL PILL BADGE */
//             <div className="flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-5 py-2 text-xs font-mono text-zinc-100 shadow-xl">
//               {badge.emoji && <span>{badge.emoji}</span>}
//               <span className="text-[24px]">{badge.text}</span>
//               {badge.status && (
//                 <span className="h-3 w-3 rounded-full bg-green-500" />
//               )}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";

export type PhysicsBadge = {
  text?: string;
  emoji?: string;
  status?: boolean;
  image?: string;
  type?: "pill" | "avatar";
};

type Props = {
  labels: PhysicsBadge[];
};

export function PhysicsBadges({ labels }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRefs = useRef<HTMLDivElement[]>([]);

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
    engine.gravity.y = 0.15; // ⭐ softer gravity
    engine.enableSleeping = false;

    const runner = Runner.create();
    Runner.run(runner, engine);

    const rect = container.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const world = engine.world;

    /* ================= WALLS ================= */

    Composite.add(world, [
      Bodies.rectangle(width / 2, -60, width, 120, { isStatic: true }),
      Bodies.rectangle(width / 2, height + 60, width, 120, { isStatic: true }),
      Bodies.rectangle(-60, height / 2, 120, height, { isStatic: true }),
      Bodies.rectangle(width + 60, height / 2, 120, height, {
        isStatic: true,
      }),
    ]);

    /* ================= BODIES ================= */

    const padding = 140;

    const bodies = labels.map((badge, i) => {
      // ⭐ distribute across screen
      const x =
        padding + (i / (labels.length - 1 || 1)) * (width - padding * 2);

      const y = Math.random() * height * 0.35;

      let body;

      if (badge.type === "avatar") {
        body = Bodies.circle(x, y, 48, {
          restitution: 0.9,
          frictionAir: 0.015,
          density: 0.006, // ⭐ heavier avatar
        });
      } else {
        body = Bodies.rectangle(x, y, 200, 52, {
          restitution: 0.9,
          frictionAir: 0.02,
        });
      }

      // ⭐ initial motion (NO STACKING)
      Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 6,
        y: Math.random() * 2,
      });

      // ⭐ natural rotation
      Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05);

      return body;
    });

    Composite.add(world, bodies);

    /* ================= DRAG ================= */

    const mouse = Mouse.create(container);

    Composite.add(
      world,
      MouseConstraint.create(engine, {
        mouse,
        constraint: { stiffness: 0.2, render: { visible: false } },
      }),
    );

    /* ================= SYNC DOM ================= */

    Events.on(engine, "afterUpdate", () => {
      bodies.forEach((body, i) => {
        const el = badgeRefs.current[i];
        if (!el) return;

        // ⭐ depth illusion
        el.style.zIndex = String(Math.round(body.position.y));

        el.style.transform = `
          translate(-50%, -50%)
          translate(${body.position.x}px, ${body.position.y}px)
          rotate(${body.angle}rad)
        `;

        // ⭐ keep motion alive (KAUSHIK SECRET)
        Body.applyForce(body, body.position, {
          x: (Math.random() - 0.5) * 0.00005,
          y: 0,
        });
      });
    });

    return () => {
      Runner.stop(runner);
      Matter.Engine.clear(engine);
    };
  }, [labels]);

  /* ================= UI ================= */

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {labels.map((badge, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) badgeRefs.current[i] = el;
          }}
          className="absolute will-change-transform"
        >
          {/* ⭐ AVATAR */}
          {badge.type === "avatar" ? (
            <div className="h-24 w-24 rounded-full border border-zinc-700 overflow-hidden shadow-xl">
              <img
                src={badge.image}
                alt="profile"
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            /* ⭐ PILLS */
            <div className="flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-6 py-3 text-xs font-mono text-zinc-100 shadow-xl">
              {/* {badge.emoji && <span>{badge.emoji}</span>} */}
              <span className="text-[22px] select-none">{badge.text}</span>
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