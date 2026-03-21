"use client";
import TextPressure from "@/components/TextPressure";
export function Footer() {
    const userName = "Contact Me";

    return (
        <footer className=" pb-16 px-6 sm:px-10 lg:px-16">
            <div className="flex flex-col items-center gap-12">
<div className="text-center group w-full">
  <TextPressure
    text={userName}
    className="
      w-full
      text-[18vw]
      sm:text-[14vw]
      lg:text-[12vw]
      text-zinc-100
      tracking-[-0.05em]
      leading-[0.85]
      font-mono
    "
  />
</div>

                <div className="flex justify-between w-full text-zinc-600 text-[10px] font-(--font-mono) uppercase tracking-[0.25em] mt-8 border-t border-zinc-900/50 pt-8">
                    <p>© 2026 {userName}</p>
                    <div className="flex gap-8">
                        <a href="https://www.linkedin.com/in/kishanvishwakarma1406/" className="hover:text-zinc-100 transition-all duration-300">LinkedIn</a>
                        <a href="https://github.com/Coolkishann" className="hover:text-zinc-100 transition-all duration-300">GitHub</a>
                        <a href="https://www.instagram.com/__kishxnnn/" className="hover:text-zinc-100 transition-all duration-300">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
