import { Button, Divider, Space } from "antd";
import { Title } from "../components/typography";
import { Outlet, useNavigate } from "react-router-dom";
import Container from "../components/container";

function Product() {
  const navigate = useNavigate();
  return (
    <Container className="py-[50px]">
      <Title level={3}>Basic hooded sweatshirt in pink</Title>
      <Space size={"middle"}>
        {sectionButtons.map((item) => (
          <Button
            onClick={() => navigate(item.path)}
            size="large"
            color="danger"
            className="rounded-md "
            key={item.path}
          >
            {item.title}
          </Button>
        ))}
      </Space>
      <Divider className="bg-black opacity-50" />
      <Outlet />
    </Container>
  );
}
const sectionButtons = [
  { title: "General Info", path: "general-info" },
  { title: "Product detalis", path: "detalis" },
  { title: "Rewies", path: "reviews" },
];

export default Product;
