import React from 'react';
import Button from '../Buttons/Button';
import { HiChevronDoubleRight, HiChevronDoubleLeft, HiChevronLeft, HiChevronRight } from "react-icons/hi";

const TablePagination = ({ table }) => {
    return (
        <div className='flex items-center gap-3'>

            <Button className='py-3 px-2' onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()} ariaLabel="Go to first page" > <HiChevronDoubleLeft /> </Button>
            <Button className='py-3 px-2' onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} ariaLabel="Go to previous page"> <HiChevronLeft /> </Button>
            <Button className='py-3 px-2' onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} ariaLabel="Go to next page"> <HiChevronRight /> </Button>
            <Button className='py-3 px-2' onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()} ariaLabel="Go to last page"> <HiChevronDoubleRight /> </Button>
        </div>

    );
};

export default TablePagination;