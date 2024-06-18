"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextProps {
    isClose: boolean;
    isCloseDelete: boolean;
    isCloseButtonModal: boolean;
    openModal: () => void;
    closeModal: () => void;
    openModalDelete: () => void;
    closeModalDelete: () => void;
    openButtonModal: () => void;
    closeButtonModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const useModal = (): ModalContextProps => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('error and modal provider');
    }
    return context;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [isClose, setIsClose] = useState(true);
    const [isCloseDelete, setIsCloseDelete] = useState(true);
    const [isCloseButtonModal, setIsCloseButtonModal] = useState(true);

    const openModal = () => setIsClose(false);
    const openModalDelete = () => setIsCloseDelete(false);
    const openButtonModal = () => setIsCloseButtonModal(false)
    const closeModal = () => setIsClose(true);
    const closeModalDelete = () => setIsCloseDelete(true);
    const closeButtonModal = () => setIsCloseButtonModal(true);

    return (
        <ModalContext.Provider value={{ isClose, isCloseDelete, isCloseButtonModal, openButtonModal, closeButtonModal, openModal, closeModal, closeModalDelete, openModalDelete }}>
            {children}
        </ModalContext.Provider>
    );
};
