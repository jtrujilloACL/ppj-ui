import React from 'react';
import ExpensesMUI from './ExpenseMUI/ExpensesMUI';
import Expenses from './Expenses/Expenses';
import ExpansesFilter from "./ExpanseFilterMUI/ExpansesFilter";
import NewExpanse from "./NewExpanseMUI/NewExpanse";

const UdemyTutorial = () => {

  /**Dummy data */
  const expenses = [
    {
      id: 'e1',
      title: 'Papel Aluminio',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'TV Nueva',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Aseguradora del Carro',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'Escritorio nuevo (Madera)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  /** Handler Nuevo Gasto */
  const addExpenseHandler = (enteredExpenseData) => {
    console.log("Udemy Tutorial");
    console.log(enteredExpenseData);
  }

  /**Filtrar por año seleccionado */
  const filterYearHandler = (enteredSelectedYear) => {
    let filter = [];
    if (enteredSelectedYear === '') {
      filter = expenses;
    } else {
      filter = expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === String(enteredSelectedYear);
      });
    }
    console.log(filter);
  }

  return (
    <div>
      <h2>Ingresar gastos</h2>
      <NewExpanse onAddExpanse={addExpenseHandler} />

      <h2>Filtrar por año</h2>
      <ExpansesFilter onFilterYear={filterYearHandler} />

      <h2>Tutorial React!</h2>
      <Expenses items={expenses} />

      <h2>Tutorial React MUI!</h2>
      <ExpensesMUI items={expenses} />
    </div>
  );
}

export default UdemyTutorial;
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );