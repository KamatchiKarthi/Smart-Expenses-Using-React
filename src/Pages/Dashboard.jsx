import React, { useEffect, useState } from 'react';
import { Content } from 'antd/es/layout/layout';
import { Col, Row, Card } from 'antd';
import CatageoryPieChart from '../Components/CatageoryPieChart';
import { loadExpense } from '../Service/Service';
import SummaryCards from '../Components/SummaryCards';
import RecentTransaction from '../Components/RecentTransaction';

export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const stored = loadExpense() || [];
    setExpenses(stored);
  }, []);

  // console.log(expenses);

  const totalSpends = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );
  const Transaction = expenses.length;
  const catageories = [
    ...new Set(expenses.map(expenses => expenses.categeory)),
  ];
  const catageoryLength = catageories.length;
  // console.log(catageoryLength);
  return (
    <div>
        <SummaryCards
          transactions={Transaction}
          catageoryLengths={catageoryLength}
          totalSpend={totalSpends}
        />
        <Row gutter={24}>
          <Col span={12}>
            <Card 
              title="Spending Category"
              className=" !bg-inherit flex flex-col   items-center !mt-4 !border-none"
            >
              <CatageoryPieChart expenses={expenses} />
            </Card>
          </Col>
          <Col span={12} className='!flex !justify-center  h-85 mt-10'>
            <Card title="Recent Transaction" className='!mt-4 w-100'>
              <RecentTransaction expenses={expenses} />
            </Card>
          </Col>
        </Row>
    </div>
  );
}
