// pages/index.tsx

import React from 'react';
import TabelaPedidos from '@/app/services/table'; 
import ModalFilter from './modal-filter';

const HomePage: React.FC = () => {
    
        const pedidos = [
        { numPedido: '001', valor: 'R$ 150,00', data: '2024/06/14', formaPagamento: 'Cartão de Crédito', status: 'Entregue' },
        { numPedido: '002', valor: 'R$ 200,00', data: '2024/06/15', formaPagamento: 'Boleto Bancário', status: 'Em processamento' },
        { numPedido: '003', valor: 'R$ 100,00', data: '2024/06/16', formaPagamento: 'PIX', status: 'Em transporte' },
    ];

    return (
        <div className="container mx-auto p-4">
            <div>
                <ModalFilter />
            </div>
        <h1 className="text-2xl font-bold mb-4">Últimos pedidos</h1>
        <TabelaPedidos pedidos={pedidos} />
        </div>
    );
};

export default HomePage;
