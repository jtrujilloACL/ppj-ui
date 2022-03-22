import React from 'react';
import ExpensesMUI from './ExpenseMUI/ExpensesMUI';
import Expenses from './Expenses/Expenses';
import NewExpanse from "./NewExpanseMUI/NewExpanse";

const UdemyTutorial = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Papel Aluminio',
      amount: 94.12,
      date: new Date(2021, 7, 14),
    },
    { id: 'e2', title: 'TV Nueva', amount: 799.49, date: new Date(2021, 2, 12) },
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

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  const addExpenseHandler = (enteredExpenseData)=>{
    console.log("Udemy Tutorial");
    console.log(enteredExpenseData);
  }

  return (
    <div>
      <h2>Ingresar gastos</h2>
      <NewExpanse onAddExpanse={addExpenseHandler} />

      <h2>Tutorial React!</h2>
      <Expenses items={expenses} />
      
      <h2>Tutorial React MUI!</h2>
      <ExpensesMUI items={expenses} />
    </div>
  );
}

export default UdemyTutorial;