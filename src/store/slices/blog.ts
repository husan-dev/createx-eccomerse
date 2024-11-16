import { makeAutoObservable } from "mobx";
class Blog {
  constructor() {
    makeAutoObservable(this);
  }
}
const BlogStore = new Blog();
export default BlogStore;
