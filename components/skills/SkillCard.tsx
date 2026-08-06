"use client";

import { IconType } from "react-icons";

type Props={

title:string;

icon:IconType;

technologies:{

label:string;

icon:IconType;

}[];

};

export default function SkillCard({

title,

icon:CategoryIcon,

technologies,

}:Props){

return(

<div

className="

relative

overflow-hidden

rounded-3xl

border

border-slate-800

bg-slate-900/60

backdrop-blur-md

p-8

transition-all

duration-500

hover:-translate-y-2

hover:border-cyan-400

hover:shadow-xl

hover:shadow-cyan-500/20

"

>

<div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400"/>

<div className="flex items-center justify-between">

<div className="flex items-center gap-4">

<CategoryIcon className="text-4xl text-cyan-400"/>

<div>

<h3 className="text-2xl font-bold text-white">

{title}

</h3>

<p className="text-slate-500">

{technologies.length} Technologies

</p>

</div>

</div>

</div>

<div className="grid grid-cols-2 gap-4 mt-10">

{

technologies.map((tech)=>{

const Icon=tech.icon;

return(

<div

key={tech.label}

className="

group

flex

items-center

gap-3

rounded-xl

border

border-slate-800

bg-slate-950/40

px-4

py-3

transition-all

duration-300

hover:border-cyan-400

hover:bg-slate-800

"

>

<Icon

className="

text-xl

text-cyan-400

transition

group-hover:scale-110

"

/>

<span

className="

text-slate-300

font-medium

group-hover:text-white

"

>

{tech.label}

</span>

</div>

);

})

}

</div>

</div>

);

}