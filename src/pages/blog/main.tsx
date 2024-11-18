import { useParams } from "react-router-dom";

function MainBlog() {
  const params = useParams();
  console.log(params.blog, "[aramsss");
  return <div></div>;
}

export default MainBlog;
