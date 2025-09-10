import { useState, useEffect } from "react";
import BlogList from "./components/BlogList";
function App() {
  const [blogs, setBlogs] = useState([
    { name: "wayne", age: 20, id: 1 },
    { name: "louxu", age: 23, id: 2 },
    { name: "gay", age: 18, id: 3 },
    { name: "pussy", age: 27, id: 4 },
  ]);

  function handleList(id) {
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlog);
  }

  useEffect(() => {
    console.log(blogs);
    console.log("我會當軟體工程師");
  });
  return (
    <>
      <BlogList blogs={blogs} name="老徐是軟體工程師" handleList={handleList} />
    </>
  );
}

export default App;
