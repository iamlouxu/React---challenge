function BlogList({ blogs, title }) {
  return (
    <>
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h1>{blog.title}</h1>
          <p>{blog.author}</p>
        </div>
      ))}
    </>
  );
}

export default BlogList;
