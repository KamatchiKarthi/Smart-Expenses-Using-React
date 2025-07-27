import React from 'react';
import { Col, Row, Card } from 'antd';
import { FaHandHoldingUsd } from 'react-icons/fa';
import { AiTwotoneSafetyCertificate } from 'react-icons/ai';
import { GrTransaction } from 'react-icons/gr';

export default function SummaryCards({
  totalSpend,
  transactions,
  catageoryLengths,
}) {
  return (
    <div>
      <Row gutter={25}>
        <Col span={8}>
          <Card
            title={
              <span className="Cardtitle">
                Total Spent <FaHandHoldingUsd />
              </span>
            }
            variant="borderless"
          >
            {totalSpend.toFixed(2)}
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title={
              <span className="Cardtitle">
                Transaction <GrTransaction />
              </span>
            }
            variant="borderless"
          >
            {transactions}
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title={
              <span className="Cardtitle">
                Categories
                <AiTwotoneSafetyCertificate />
              </span>
            }
            variant="borderless"
          >
            {catageoryLengths}
          </Card>
        </Col>
      </Row>
    </div>
  );
}
