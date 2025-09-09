import { useState } from "react";
import BlogList from "./components/BlogList";

function App() {
  const [blogs, Setblogs] = useState([
    { name: "wayne", age: 20, id: 1 },
    { name: "louxu", age: 23, id: 2 },
    { name: "gay", age: 18, id: 3 },
    { name: "pussy", age: 27, id: 4 },
  ]);

  return (
    <>
      <BlogList blogs={blogs} name="老徐工程師" />
    </>
  );
}

export default App;
