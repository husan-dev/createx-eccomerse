import { Title } from "@components/typography";
import { Divider, Input } from "antd";
import { IoSearch } from "react-icons/io5";

function Panel() {
  return (
    <div>
      <Input size="large" className="rounded-sm" prefix={<IoSearch />} />
      <Divider />
      <Title>Blog Categories</Title>
      <Divider />
      <Title>Featered Posts</Title>
      <Divider />
      <Title>Tags</Title>
    </div>
  );
}

export default Panel;
