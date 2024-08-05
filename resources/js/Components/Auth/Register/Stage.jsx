import React from "react";

function StageElement({ stage, current }) {
    return (
        <div className={`w-20 h-0.5 rounded-full ${
            stage < current ? 'bg-accent' : 
            stage === current ? 'bg-accent' :
            'bg-surface'
        }`}></div>
    );
}

export default function Stage({ stages, stage }) {
    return (
        <div>
            <div className="flex items-center gap-2.5">
                {Array.from({ length: stages }, (_, index) => (
                    <StageElement 
                        key={index + 1} 
                        stage={index + 1} 
                        current={stage} 
                    />
                ))}
            </div>

            <p className="mt-5 text-sm font-medium">
                Stage {stage} of {stages}
            </p>
        </div>
    );
}
