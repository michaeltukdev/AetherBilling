import React from "react";

export function TableBase({ children }) {
    return (
        <table className="w-full border-collapse bg-border rounded-lg overflow-hidden">
            {children}
        </table>
    );
}

export function TableHead({ children }) {
    return <thead className="text-left">{children}</thead>;
}

export function TableBody({ children }) {
    return <tbody className="bg-surface divide-y divide-border">{children}</tbody>;
}

export function TableRow({ children, isLast }) {
    return (
        <tr className={`hover:bg-border transition ${isLast ? 'last:rounded-b-lg' : ''}`}>
            {React.Children.map(children, (child, index) => {
                if (isLast) {
                    if (index === 0) {
                        return React.cloneElement(child, { className: `${child.props.className} rounded-bl-lg` });
                    }
                    if (index === React.Children.count(children) - 1) {
                        return React.cloneElement(child, { className: `${child.props.className} rounded-br-lg` });
                    }
                }
                return child;
            })}
        </tr>
    );
}

export function TableCell({ children, className }) {
    return <td className={`px-6 py-4 whitespace-nowrap ${className}`}>{children}</td>;
}

export function TableHeaderCell({ children }) {
    return (
        <th className="px-6 py-3 text-left text-xs font-semibold text-text-dark uppercase tracking-wider">
            {children}
        </th>
    );
}