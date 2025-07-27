import React from 'react';
import { List, Space} from 'antd';
import Item from 'antd/es/list/Item';
import { RiMoneyRupeeCircleFill } from 'react-icons/ri';


export default function RecentTransaction({ expenses }) {
  console.log('data dash', expenses);
  return (
    <div>
      <List
        dataSource={expenses.slice(-5).reverse()}
        renderItem={item => (
          <List.Item className="">
            <div>{item.date}</div>      
            <div>{item.categeory}</div>     
            <div>< RiMoneyRupeeCircleFill  className='inline mr-1'/>
            {item.amount}</div>   
          </List.Item>
        )}
      />
    </div>
  );
}
