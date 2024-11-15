import Container from "@components/container";
import { Title } from "@components/typography";
import { Button } from "antd";


function FashionBlog() {
  return (
    <Container>
      <div className="flex items-center justify-between">
        <Title className="!mb-0">Fashion Blogs</Title>
        <Button size="large">View More</Button>
      </div>
    </Container>
  );
}

export default FashionBlog;
