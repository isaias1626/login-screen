// filterFunctions.ts


// Definição dos tipos de filtro
export type DateRange = {
    from: string;
    to: string;
    };

export type FilterOptions = {
    label: string;
    status?: string;
    dateRange?: DateRange;
    };

    // Função para aplicar filtro por período de datas pré-definidas
export const applyDateFilter = (option: string): DateRange | undefined => {
    const today = new Date();
    let fromDate: Date, toDate: Date;

    switch (option) {
        case "7dias":
        fromDate = new Date(today);
        fromDate.setDate(today.getDate() - 7);
        return { from: formatDate(fromDate), to: formatDate(today) };
        case "15dias":
        fromDate = new Date(today);
        fromDate.setDate(today.getDate() - 15);
        return { from: formatDate(fromDate), to: formatDate(today) };
        case "30dias":
        fromDate = new Date(today);
        fromDate.setDate(today.getDate() - 30);
        return { from: formatDate(fromDate), to: formatDate(today) };
        case "maisde30dias":
        fromDate = new Date(today);
        fromDate.setDate(today.getDate() - 60); // Filtrar até 60 dias atrás
        return { from: formatDate(fromDate), to: formatDate(today) };
        default:
        return undefined;
    }
    };

    // Função para aplicar filtro personalizado por data
    export const applyCustomDateFilter = (from: string, to: string): DateRange => {
    return { from: formatBrazilianDate(from), to: formatBrazilianDate(to) };
    };

    // Função para aplicar filtro por status
    export const applyStatusFilter = (status: string): string => {
    return status;
    };

    // Função utilitária para formatar data no formato "dd/mm/yyyy"
    const formatBrazilianDate = (dateString: string): string => {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
    };

    // Função utilitária para formatar data no formato "yyyy-mm-dd"
    const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    const day = `${date.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
};
