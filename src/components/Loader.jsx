import loader from "./loader.gif";

const Loader = () => {
  return (
    <div className="loader-gif">
      <img src={loader} alt="Loading" />
      <h1>Fetching Events</h1>
    </div>
  );
};

export default Loader;
