import Card from "@/components/ui/Card";
import { stats } from "@/data/stats";

export default function AboutStats() {

return(

<div className="grid md:grid-cols-3 gap-6 mt-16">

{

stats.map((item)=>(

<Card key={item.title}>

<h2 className="text-4xl font-bold text-cyan-400">

{item.number}

</h2>

<p className="mt-3 text-slate-400">

{item.title}

</p>

</Card>

))

}

</div>

)

}