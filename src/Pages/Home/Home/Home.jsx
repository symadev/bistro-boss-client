import { Helmet } from "react-helmet-async";
import BistroSection from "../../BistroSection/BistroSection";
import Contact from "../../Contact/Contact";
import FeatureSection from "../../FeatureSection/FeatureSection";
import PopularMenu from "../../PopularMenu/PopularMenu";
import TestimonialSection from "../../TestimonialSection/TestimonialSection";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";


const Home = () => {
    return (
        <div>
             <Helmet>
                    <title>Bistro | Home</title>
                   
                  </Helmet>
           <Banner></Banner>
           <Category></Category>
           <BistroSection></BistroSection>
          <PopularMenu></PopularMenu>
          <Contact></Contact>
          <FeatureSection></FeatureSection>
          <TestimonialSection></TestimonialSection>
       
        </div>
    );
};

export default Home;