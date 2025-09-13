import BlogList from "./components/BlogList";
import useFetch from "./components/useFetch";
function Home() {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <>
      {error && <div>{error}</div>}
      {isPending && <div>...Loadind</div>}
      {blogs && <BlogList blogs={blogs} name="老徐是軟體工程師" />}
    </>
  );
}

export default Home;
