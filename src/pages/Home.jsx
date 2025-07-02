import Moviecontainer from "../components/movie/Moviecontainer";

function Home({showSearch}) {
  return (
    <>
      <div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-100"
          style={{maxHeight: "600px", objectFit: "fill"}}>
          <source src="/vid/banner2_2_1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="container mt-4">
        <Moviecontainer showSearch={showSearch} />
      </div>
    </>
  );
}

export default Home;
