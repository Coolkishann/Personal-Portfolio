import{j as n,R as t}from"./index-2a17b42c.js";const d=[{name:"React",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},{name:"Redux",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"},{name:"JavaScript",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},{name:"HTML5",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},{name:"CSS3",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"},{name:"Tailwind CSS",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"},{name:"Bootstrap",icon:"https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"}],a=[{name:"Node JS",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},{name:"Express JS",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"},{name:"MongoDB",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"}],r=[{name:"VS Code",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"},{name:" GitHub",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"},{name:"Git Version Control",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},{name:"PostMen",icon:"https://w7.pngwing.com/pngs/28/245/png-transparent-postman-hd-logo.png"}];function i({skills:s}){return n.jsx("div",{className:"my-5 flex flex-wrap gap-5 md:w-[700px]",children:s.map((e,c)=>n.jsx("div",{children:n.jsxs("h1",{className:"p-2 flex justify-center items-center gap-2 bg-white text-black rounded-md bg-opacity-30 backdrop-blur-md",children:[n.jsx("img",{src:e==null?void 0:e.icon,alt:e==null?void 0:e.name,loading:"lazy",className:"w-8"}),e==null?void 0:e.name]})},c))})}function l(){return n.jsx(i,{skills:d})}function v(){return n.jsx(i,{skills:a})}function g(){return n.jsx(i,{skills:r})}const o={Frontend:l,Backend:v,Tools:g},p=()=>{const s=[{label:"Frontend"},{label:"Backend"},{label:"Tools"}];return n.jsxs("div",{className:"md:py-10",children:[n.jsxs("div",{className:"flex flex-col items-center justify-center py-5",children:[n.jsx("p",{className:"text-blue-900 font-bold text-5xl",children:"Skills"}),n.jsx("div",{className:"h-[2px] w-20 bg-blue-500 rounded-full my-1"})]}),n.jsx("div",{className:"flex flex-col justify-center items-center px-3",children:s.map(({label:e})=>n.jsxs("div",{className:"flex flex-col m-1",children:[n.jsxs("div",{className:"flex flex-col",children:[n.jsx("span",{className:"text-xl mt-1",children:e}),n.jsx("div",{className:"w-16 h-[1px] bg-blue-500 rounded-full my-1"})]}),o[e]&&t.createElement(o[e])]},e))})]})};export{p as default};