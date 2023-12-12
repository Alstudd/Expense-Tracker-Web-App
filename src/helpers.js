export const waitTime = () => new Promise(resolve => setTimeout(resolve, Math.random() * 1000));

// Local Storage
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

// random color generator
const generateRandomColor = () => {
    const existingBudgetLength = fetchData('budgets')?.length ?? 0;
    return `${existingBudgetLength * 34} 65% 50%`
}

// create budget
export const createBudget = ({name, amount}) => {
    const newItem = {
        id: crypto.randomUUID(),
        name: name,
        createdAt: Date.now(),
        amount: +amount, // convert to number: parseInt(amount) or Number(amount) or +amount
        color: generateRandomColor()
    }
    const existingBudgets = fetchData('budgets') ?? [];
    return localStorage.setItem('budgets', JSON.stringify([...existingBudgets, newItem]));
}

// create expense
export const createExpense = ({name, amount, budgetId}) => {
    const newItem = {
        id: crypto.randomUUID(),
        name: name,
        createdAt: Date.now(),
        amount: +amount, // convert to number: parseInt(amount) or Number(amount) or +amount
        budgetId: budgetId
    }
    const existingExpenses = fetchData('expenses') ?? [];
    return localStorage.setItem('expenses', JSON.stringify([...existingExpenses, newItem]));
}

// delete item
export const deleteData = ({key}) => {
    return localStorage.removeItem(key);
};

// total spent by budget
export const totalSpentByBudget = (budgetId) => {
    const expenses = fetchData('expenses') ?? [];
    const total = expenses.reduce((acc, expense) => {
        if(expense.budgetId !== budgetId) {
            return acc;
        }
        return acc += expense.amount;
    
    }, 0);
    return total;
}

//  Formatting

// Format date
export const formatDateToLocaleString = (timestamp) => {
    return new Date(timestamp).toLocaleDateString();
}

// Format percentage
export const formatPercentage = (amount) => {
    return amount.toLocaleString(undefined, {style: 'percent', minimumFractionDigits: 0});
}

// Format currency
export const formatCurrency = (amount) => {
    return amount.toLocaleString(undefined, {style: 'currency', currency: 'INR'});
}