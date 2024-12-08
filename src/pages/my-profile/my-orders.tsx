import { Title } from "@components/typography";
import { Select, Space } from "antd";

function MyOrders() {
  return (
    <>
      <div className="flex justify-between item-end">
        <Title level={2} className="!m-0">
          My Orders
        </Title>
        <Space>
          <label>Sort By</label>
          <Select size="large" className="rounded-md"></Select>
        </Space>
      </div>
    </>
  );
}

export default MyOrders;
