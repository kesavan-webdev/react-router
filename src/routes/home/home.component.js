// import "./home.styles.scss";

import Card from "../../components/card/card.component";
import Data from "../../components/data/data";
const Home = () => {
  return (
    <>
      <h1 className="homepage">im Home Page</h1>
      <Card data={Data} />
    </>
  );
};

export default Home;
