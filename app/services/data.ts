export interface User {
    id: number;
    email: string;
    password: string;
    resetToken?: {
        token: string;
        expiresAt: number; 
    };
}

export type StatusPedido = 'Em entrega' | 'Entregue' | 'Em preparação';
export interface Pedido {
    numPedido: string;
    valor: string;
    data: string;
    formaPagamento: string;
    status: StatusPedido;
}

const initialUsers: User[] = [
    { id: 1, email: "admin@gmail.com", password: "Admin123$" },
    { id: 2, email: "test@gmail.com", password: "Test123$" },
    { id: 3, email: "isaiasrocha@gmail.com", password: "Test123$" },
];


export const fetchUser = (email: string): User | undefined => {
    return initialUsers.find(user => user.email === email);
};


export const validatePassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{":;'?\/.,<>]).{8,32}$/;
    return passwordRegex.test(password);
};

export const generateResetToken = (email: string): string | undefined => {
    const user = fetchUser(email);
    if (user) {

        const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        const expiresAt = Date.now() + 24 * 60 * 60 * 1000;
        user.resetToken = { token, expiresAt };
        return token;
    }
    return undefined;
};

export const getUserByResetToken = (token: string): User | undefined => {
    return initialUsers.find(user => user.resetToken?.token === token && user.resetToken.expiresAt > Date.now());
};


export const resetPassword = (token: string, newPassword: string): boolean => {
    const user = getUserByResetToken(token);
    if (user && validatePassword(newPassword)) {
        user.password = newPassword;
        user.resetToken = undefined;
        return true;
    }
    return false;
};
