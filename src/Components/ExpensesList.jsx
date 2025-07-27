import React from 'react';
import {
  Input,
  Space,
  Select,
  DatePicker,
  Button,
  Popconfirm,
  Table,
} from 'antd';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

const { RangePicker } = DatePicker;
export default function ExpensesList({
  handleDelete,
  expenses,
  handleEdit,
  setDateRange,
  onCategoryChange,
}) {
  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      render: data => new Date(data).toLocaleDateString(),
    },
    {
      title: 'Categeory',
      dataIndex: 'categeory',
      key: 'categeory',
      render: category => {
        return category || '-';
      },
    },
    {
      title: 'Amount_$',
      dataIndex: 'amount',
      render: amount => {
        return `${amount}`;
      },
    },

    {
      title: 'Action',
      render: (_, recored) => {
        return (
          <Space>
            <Button
              icon={<FaEdit />}
              onClick={() => handleEdit(recored)}
            ></Button>
            <Popconfirm
              title="Delete"
              description="Are you sure to delete this task?"
              onConfirm={() => handleDelete(recored.id)}
            >
              <Button icon={<MdDelete />} danger></Button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];
  console.log(expenses);
  return (
    <div>
      <Space size={'middle'}>
        <Select
          showSearch
          placeholder="Select"
          className="!w-35"
          allowClear
          optionFilterProp="label"
          onChange={onCategoryChange || null}
          options={[
            { value: 'Food', label: 'Food' },
            { value: 'Transport', label: 'Transport' },
            { value: 'Housing', label: 'Housing' },
            { value: 'Entertainment', label: 'Entertainment' },
            { value: 'Other', label: 'Other' },
          ]}
        />
        <RangePicker
          className="flex items-center"
          // format={dateFormat}
          onChange={setDateRange || null}
        />
      </Space>
      <Table
        className="mt-5 h-3/4 table1 "
        columns={columns}
        dataSource={[...expenses].reverse()}
        rowKey="id"
        pagination={{
          pageSize: 7,
        }}
      />
    </div>
  );
}
