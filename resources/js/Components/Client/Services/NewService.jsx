import React from "react";
import { Link } from '@inertiajs/react';
import { HiOutlinePlus } from "react-icons/hi";

export const NewService = () => {
    return (
        <Link className="rounded-lg bg-none border-2 border-dashed border-surface-accent p-8 w-full max-w-[400px] h-[180px] inline-flex flex-col items-center justify-center transition-colors hover:bg-surface-accent/10">
            <HiOutlinePlus className="mb-2 text-2xl text-text-dark" />
            <span className="text-text-dark font-medium">Add another service</span>
        </Link>
    );
};