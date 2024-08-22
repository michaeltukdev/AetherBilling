import React, { useState } from 'react';
import { useReactTable, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, flexRender } from '@tanstack/react-table';
import { TableBase, TableHead, TableBody, TableRow, TableCell, TableHeaderCell } from '../ui/table';
import Button from '../ui/buttons';
import MainInput from '../ui/inputs/MainInput';
import SelectInput from '../Inputs/SelectInput';

export default function Table({ columns, data: initialData }) {
    const [globalFilter, setGlobalFilter] = useState('');
    const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 3 });

    const table = useReactTable({
        data: initialData,
        columns,
        state: {
            globalFilter,
            pagination,
        },
        onGlobalFilterChange: setGlobalFilter,
        onPaginationChange: setPagination,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        globalFilterFn: 'includesString',
    });

    return (
        <div className="mt-8">
            <MainInput className='mb-4' type="text" value={globalFilter ?? ''} onChange={(e) => setGlobalFilter(e.target.value)} placeholder="Search all columns..." />

            <TableBase>
                <TableHead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <TableHeaderCell key={header.id}>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </TableHeaderCell>
                            ))}
                        </TableRow>
                    ))}
                </TableHead>

                <TableBody>
                    {table.getRowModel().rows.map((row) => (
                        <TableRow key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <TableCell key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </TableBase>

            <div className="mt-4 flex items-center justify-between">
                <div className='flex items-center gap-3'>
                    <Button onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()} ariaLabel="Go to first page">{'<<'}</Button>
                    <Button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} ariaLabel="Go to previous page">{'<'}</Button>
                    <Button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} ariaLabel="Go to next page">{'>'}</Button>
                    <Button onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()} ariaLabel="Go to last page">{'>>'}</Button>
                </div>

                <SelectInput name="pageSize" value={table.getState().pagination.pageSize}
                    onChange={(value) => {
                        table.setPageSize(Number(value));
                    }}
                    options={[3, 5, 10, 30].map(size => ({ value: size, label: `Show ${size}` }))} />
            </div>
        </div>
    );
}