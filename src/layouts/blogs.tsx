import Container from "@components/container";
import { Title } from "@components/typography";
import MainBlogs from "@pages/blogs/main";
import Panel from "@pages/blogs/panel";

function Blogs() {
  return (
    <Container className="flex flex-col md:gap-5 lg:flex-row justify-between py-[50px] px-5 ">
      <div className="lg:w-[60%] w-[100%]">
        <Title>Fashion Blog</Title>
        <MainBlogs />
      </div>
      <Panel className="w-[300px]" />
    </Container>
  );
}

export default Blogs;
