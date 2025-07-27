import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import ExpensesPages from './Pages/ExpensesPages';
import Reportpages from './Pages/Reportpages';

export default function App() {
  return (
    <Routes>
      {/* Home layout wraps all child pages */}
      <Route path="/" element={<Home />}>
        <Route index element={<Dashboard />} />
        <Route path="expenses" element={<ExpensesPages />} />
        {/* <Route path="reports" element={<Reportpages />} /> */}
      </Route>
    </Routes>
  );
}
