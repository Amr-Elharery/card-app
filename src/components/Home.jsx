import Card from "./Card";
import Card2 from "./Card2";

const Home = () => {
  return (
    <div className="home">
        <div className="container">
            <div className="cards">
                <Card />
            </div>

            <div className="cards2">
              <Card2 />
            </div>
        </div>
    </div>
  )
}

export default Home;