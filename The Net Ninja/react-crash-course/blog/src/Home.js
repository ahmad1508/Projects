import BlogList from "./BlogList";
import logo from "./logo.svg";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">



      {/* First part : error */}
      {
        error && (<div style={{ display: "flex", alignItems: "center", justifyContent: "center", }}
        >{error}</div>
        )
      }



      {/* Second Part  :  fetching data*/}
      {
        isPending && (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

            <img src={logo} className="App-logo" alt="Loading...." style={{ height: "50px" }} />
          </div>
        )
      }




      {/* Third Part : Blogs are fetched */}
      {
        //conditional templating: if blogs is false it doesn't test the right and outout the bloglist to the sreen and since blogs is null and null evaluates to false

        blogs && <BlogList blogs={blogs} title="All Blogs" />
      }
    </div>
  );
};

export default Home;
