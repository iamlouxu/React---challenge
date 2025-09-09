function BlogList({ blogs, name }) {
  return (
    <>
      <h1>{name}</h1>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.name}</h2>
          <p>{blog.age}</p>
        </div>
      ))}
    </>
  );
}

export default BlogList;
