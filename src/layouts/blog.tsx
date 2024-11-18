import BreadcrumbContainer from "@components/breadcrumb-container";
import Container from "@components/container";
import { Title } from "@components/typography";
import FashionBlog from "@pages/blog/blog";
import Panel from "@pages/blog/panel";

function Blog() {
  return (
    <>
      <BreadcrumbContainer />
      <Container className="flex flex-col md:gap-5 lg:flex-row justify-between py-[50px] px-5 ">
        <div className="lg:w-[60%] w-[100%]">
          <Title>Fashion Blog</Title>
          <FashionBlog />
        </div>
        <Panel className="w-[300px]" />
      </Container>
    </>
  );
}

export default Blog;
