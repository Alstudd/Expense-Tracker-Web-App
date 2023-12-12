// Local Storage
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

// create budget
const generateRandomColor = () => {
    const existingBudgetLength = fetchData('budgets')?.length ?? 0;
    return `${existingBudgetLength * 34} 65% 50%`
}

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

// delete item
export const deleteData = ({key}) => {
    return localStorage.removeItem(key);
};