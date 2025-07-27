import React, { useEffect } from 'react';
import {
  Col,
  Form,
  DatePicker,
  Input,
  Select,
  Card,
  Button,
  InputNumber,
} from 'antd';
import { RiMoneyRupeeCircleFill } from 'react-icons/ri';
import dayjs from 'dayjs';

const { Option } = Select;
const { TextArea } = Input;

export default function ExpensesForm({ initialValues = {}, onSubmit }) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (!initialValues) return;

    const parsedDate =
      initialValues.date &&
      dayjs(initialValues.date, 'YYYY-MM-DD', true).isValid()
        ? dayjs(initialValues.date, 'YYYY-MM-DD')
        : null;

    form.setFieldsValue({
      ...initialValues,
      date: parsedDate,
    });
  }, [initialValues, form]);

  const onFinish = value => {
    const expansedata = {
      ...value,
      date: value.date ? dayjs(value.date).format('YYYY-MM-DD') : null,
      amount: parseFloat(value.amount),
    };

    onSubmit(expansedata);
    form.resetFields();
  };

  return (
    <div>
      <Card className="w-3/4">
        <Form
          form={form}
          className="w-full"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          layout="vertical"
          onFinish={onFinish}
          // onSubmit={handleSave}
        >
          <Form.Item
            label="Enter Amount"
            name="amount"
            rules={[{ required: true, message: 'Please Give a Amount' }]}
          >
            <InputNumber
              placeholder="Example 100"
              prefix={<RiMoneyRupeeCircleFill />}
              className="!w-full"
              type="number"
              min={1}
              precision={2}
            />
          </Form.Item>
          <Form.Item
            label="Categeory"
            name="categeory"
            rules={[{ required: true, message: 'Please input!' }]}
          >
            <Select>
              <Option value="Food"> Food</Option>
              <Option value="Transport">Transport</Option>
              <Option value="Housing">Housing</Option>
              <Option value="Entertainment">Entertainment </Option>
              <Option value="Other"> Other</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: 'Please input!' }]}
          >
            <DatePicker
              className="w-full"
              disabledDate={current =>
                current && current > dayjs().endOf('day')
              }
            />
          </Form.Item>
          <Form.Item
            label="Description"
            name="Description"
            rules={[{ required: false, message: 'Please input!' }]}
          >
            <TextArea rows={2} />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            {initialValues?.id ? 'Update Expense' : 'Add Expense'}
          </Button>
        </Form>
      </Card>
    </div>
  );
}
