import React from 'react';
import { Layout, Row, Col, message } from 'antd';
import ExpensesForm from '../Components/ExpensesForm';
import ExpenseList from '../Components/ExpensesList';
import { saveExpense, loadExpense } from '../Service/Service';
import { useState, useEffect } from 'react';

const { Content } = Layout;

export default function Expensespages() {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingexpense] = useState(null);
  const [dateRange, setdateRange] = useState();
  const [selectCategory, setselectCategory] = useState();

  useEffect(() => {
    const stored = loadExpense() || [];
    setExpenses(stored);
  }, []);

  const handleSave = expenseData => {
    if (editingExpense) {
      const updatedExpenses = expenses.map(e =>
        e.id === editingExpense.id
          ? { ...expenseData, id: editingExpense.id }
          : e
      );
      setExpenses(updatedExpenses);
      saveExpense(updatedExpenses);
      setEditingexpense(null); //
    } else {
      // Add new expense
      const newExpense = { ...expenseData, id: Date.now() };
      const updatedExpenses = [...expenses, newExpense];
      setExpenses(updatedExpenses);
      saveExpense(updatedExpenses);
    }
  };

  const handleDelete = id => {
    const updateExpense = expenses.filter(e => e.id !== id);
    setExpenses(updateExpense);
    saveExpense(updateExpense);
    message.success('deleted');
  };

  const filterExpenses = expenses.filter(e => {
    const expenseDate = new Date(e.date).getTime();

    const matchDate = dateRange
      ? expenseDate >= dateRange[0].startOf('day').toDate().getTime() &&
        expenseDate <= dateRange[1].startOf('day').toDate().getTime()
      : true;
      const matchedCategory = selectCategory ? e.categeory === selectCategory : true

      return matchDate && matchedCategory
  });

  return (
    <div>
        <Row>
          <Col span={10}>
            <ExpensesForm
              onSubmit={handleSave}
              initialValues={editingExpense || {}}
            />
          </Col>
          <Col span={14}>
            <ExpenseList
              handleDelete={handleDelete}
              expenses={filterExpenses}
              handleEdit={record => setEditingexpense(record)}
              setDateRange={setdateRange}
              onCategoryChange={setselectCategory}
            />
          </Col>
        </Row>
    </div>
  );
}
