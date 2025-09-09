function BlogList({ blogs, name, handleList }) {
  return (
    <>
      <h1>{name}</h1>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h1>{blog.name}</h1>
          <p>{blog.age}歲</p>
          <button onClick={() => handleList(blog.id)}>刪除</button>
        </div>
      ))}
    </>
  );
}

export default BlogList;
