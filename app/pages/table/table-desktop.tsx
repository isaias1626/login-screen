import React from 'react';
import ModalFilter from './modal-filter';
import TableOrdersDesktop from "@/app/pages/table/table-orders"
import { ModalProvider } from '../context/modal-context';

const TableDesktop: React.FC = () => {
    

    return (
        <ModalProvider>
            <div className="mx-auto w-full my-8">
                <div>
                    <ModalFilter />
                </div>
                <div className='' id='lista-pedidos'>
                    <h2 className='text-lg font-semibold'>Lista de Pedidos</h2>
                    <TableOrdersDesktop />
                </div>
            </div>
        </ModalProvider>
    );
};

export default TableDesktop;
