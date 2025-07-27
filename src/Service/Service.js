const Expenses_Key = 'Expenses-data';

export const saveExpense = expenses => {
  localStorage.setItem(Expenses_Key, JSON.stringify(expenses));
};

export const loadExpense = () => {
  const data = localStorage.getItem(Expenses_Key);
  return data ? JSON.parse(data) : [];
};
