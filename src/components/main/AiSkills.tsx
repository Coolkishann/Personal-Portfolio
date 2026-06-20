'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'

import { useLanguage } from '@/components/language-provider'
import { skills } from '@/constants'
const SKILLS_LIST =
  'claude,gemini,stitch,chatgpt,perplexity,bolt,lovable,antigravity,omni,webflow,awwwards,dribbble,gsap,threejs,barbajs'

// Curated core stack on mobile (24 = 3 rows of 8) so each icon renders larger
const SKILLS_LIST_MOBILE =
  'claude,gemini,stitch,chatgpt,perplexity,bolt,lovable,antigravity,omni,webflow,awwwards,dribbble,gsap,threejs,barbajs'

const SKILLICONS_URL_MOBILE = `https://skillicons.dev/icons?i=${SKILLS_LIST_MOBILE}&perline=8`
const SKILLICONS_URL_DESKTOP = `https://skillicons.dev/icons?i=${SKILLS_LIST}&perline=19`

export const AiSkills: FC = () => {
  const { t } = useLanguage()

  return (
    <section id="ai-skills" className="relative w-full bg-background transition-colors">
      <div className="max-w-[880px] mx-auto grid grid-cols-1 min-[880px]:grid-cols-[40px_800px_40px] w-full">
        <div className="hidden min-[880px]:block bg-diagonal-stripes-animated border-x border-border" />

        <div className="relative border-x border-border min-[880px]:border-x-0 px-6 py-10">
          {/* Section Header on Border Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-background px-4 whitespace-nowrap">
            <span className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
              {t.AiSkills.title}
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={SKILLICONS_URL_MOBILE}
              alt="Tech Stack"
              width="100%"
              className="block min-[880px]:hidden w-full h-auto"
              loading="lazy"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={SKILLICONS_URL_DESKTOP}
              alt="Tech Stack"
              width="120%"
              className="hidden min-[880px]:block w-full h-auto"
              loading="lazy"
            />
          </motion.div>
        </div>

        <div className="hidden min-[880px]:block bg-diagonal-stripes-animated border-x border-border" />
      </div>
    </section>
  )
}

export default AiSkills






// 'use client'

// import { motion } from 'framer-motion'
// import { FC } from 'react'

// import { useLanguage } from '@/components/language-provider'
// import { skills } from '@/constants'
// const SKILLS_LIST =
//   'claude,gemini,stitch,chatgpt,perplexity,bolt,lovable,antigravity,omni,webflow,awwwards,dribbble,gsap,threejs,barbajs'

// // Curated core stack on mobile (24 = 3 rows of 8) so each icon renders larger
// const SKILLS_LIST_MOBILE =
//   'claude,gemini,stitch,chatgpt,perplexity,bolt,lovable,antigravity,omni,webflow,awwwards,dribbble,gsap,threejs,barbajs'

// const SKILLICONS_URL_MOBILE = `https://skillicons.dev/icons?i=${SKILLS_LIST_MOBILE}&perline=8`
// const SKILLICONS_URL_DESKTOP = `https://skillicons.dev/icons?i=${SKILLS_LIST}&perline=19`

// export const AiSkills: FC = () => {
//   const { t } = useLanguage()

//   // Grab the specific categories you recently added
//   const aiAndDesignSkills = skills.filter((s) =>
//     ['ai', 'design'].includes(s.category) ||
//     ['gsap', 'threejs', 'barbajs'].includes(s.skill_name)
//   )

//   return (
//     <section id="ai-skills" className="relative w-full bg-background transition-colors">
//       <div className="max-w-[880px] mx-auto grid grid-cols-1 min-[880px]:grid-cols-[40px_800px_40px] w-full">
//         <div className="hidden min-[880px]:block bg-diagonal-stripes-animated border-x border-border" />

//         <div className="relative border-x border-border min-[880px]:border-x-0 px-6 py-10">
//           {/* Section Header on Border Line */}
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-background px-4 whitespace-nowrap">
//             <span className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
//               {t.AiSkills.title}
//             </span>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: '-60px' }}
//             transition={{ duration: 0.4 }}
//             className="flex justify-center w-full"
//           >
//             <div className="flex flex-wrap justify-center gap-x-[10px] gap-y-[10px] max-w-4xl">
//               {aiAndDesignSkills.map((skill) => (
//                 <div
//                   key={skill.skill_name}
//                   title={skill.skill_name}
//                   className="w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] rounded-[13px] bg-[#242938] flex items-center justify-center overflow-hidden shadow-sm transition-transform duration-200 cursor-pointer hover:scale-105"
//                 >
//                   {/* eslint-disable-next-line @next/next/no-img-element */}
//                   <img
//                     src={skill.Image}
//                     alt={skill.skill_name}
//                     className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] object-contain"
//                     loading="lazy"
//                   />
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>

//         <div className="hidden min-[880px]:block bg-diagonal-stripes-animated border-x border-border" />
//       </div>
//     </section>
//   )
// }

// export default AiSkills
