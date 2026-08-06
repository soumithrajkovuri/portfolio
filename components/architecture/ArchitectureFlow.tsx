type Props={

    steps:string[];
    
    }
    
    export default function ArchitectureFlow({
    
    steps,
    
    }:Props){
    
    return(
    
    <div className="flex flex-wrap items-center gap-3">
    
    {
    
    steps.map((step,index)=>(
    
    <div
    key={step}
    className="flex items-center"
    >
    
    <div
    className="px-4 py-3 rounded-xl bg-slate-800 border border-cyan-500/30"
    >
    
    {step}
    
    </div>
    
    {
    
    index!==steps.length-1 &&
    
    <span className="mx-3 text-cyan-400">
    
    ↓
    
    </span>
    
    }
    
    </div>
    
    ))
    
    }
    
    </div>
    
    )
    
    }