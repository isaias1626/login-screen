"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextProps {
    isClose: boolean;
    openModal: () => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isClose, setIsClose] = useState(false);

    const openModal = () => {
        console.log('Abrindo o modal...');
        setIsClose(true);
    };

    const closeModal = () => {
        setIsClose(false);
    };

    return (
        <ModalContext.Provider value={{ isClose, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = (): ModalContextProps => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('error');
    }
    return context;
};
