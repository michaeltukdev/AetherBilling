import React from "react";

export default function OverviewWidget({ count, label, dateRange, numberColor }) {
    return (
        <div className="bg-surface rounded-lg">
            <div className="p-5">
                <p className="text-2xl font-medium" style={{ color: numberColor }}>{count}</p>
                <p className="text-15 font-medium mt-2">{label}</p>
            </div>

            <div className="py-2.5 px-5 bg-border rounded-b-lg">
                <p className="text-xs font-medium text-text-dark">{dateRange}</p>
            </div>
        </div>
    );
}