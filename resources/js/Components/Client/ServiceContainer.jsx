import React from "react";
import { Link } from '@inertiajs/react';
import { HiOutlinePlus } from "react-icons/hi";

export const ServiceContainer = () => {
    return (
        <Link className="rounded-lg bg-surface-accent p-8 block w-full max-w-[400px]">
            <div className="flex items-center justify-between mb-16">
                <h5 className="text-15">Budget Minecraft Hosting</h5>
                <span className="text-15 font-medium text-accent">$5/month</span>
            </div>

            <ProgressBar progress={33} />

            <div className="flex items-center justify-between">
                <DateDisplay date="August 8th 2024" />
                <DateDisplay date="September 8th 2024" />
            </div>
        </Link>
    );
};

const ProgressBar = ({ progress }) => (
    <div className="relative w-full h-[5px] bg-input-border rounded-full mb-4">
        <div 
            className="absolute top-0 left-0 h-full bg-accent rounded-full"
            style={{ width: `${progress}%` }}
        ></div>
    </div>
);

const DateDisplay = ({ date }) => (
    <span className="text-xs font-medium text-text-medium">{date}</span>
);

export const NewService = () => {
    return (
        <Link className="rounded-lg bg-none border-2 border-dashed border-surface-accent p-8 block w-full max-w-[400px] h-[180px] flex flex-col items-center justify-center transition-colors hover:bg-surface-accent/10">
            <HiOutlinePlus className="mb-2 text-2xl text-text-dark" />
            <span className="text-text-dark font-medium">Add another service</span>
        </Link>
    );
};