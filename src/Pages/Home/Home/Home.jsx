import BistroSection from "../../BistroSection/BistroSection";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <BistroSection></BistroSection>
        </div>
    );
};

export default Home;