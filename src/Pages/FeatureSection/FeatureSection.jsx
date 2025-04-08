import Titles from "../../Components/Titles/Titles";
import menuImage from "../../assets/home/featured.jpg"

const FeatureSection = () => {
    return (
        <section
      className="relative bg-cover bg-center bg-fixed py-20"
      style={{ backgroundImage: `url(${menuImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-white text-center mb-12">
        <Titles
          heading={"---Check it out---"}
          subHeading={"FROM OUR MENU"}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="md:flex bg-opacity-90 rounded-lg overflow-hidden">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={menuImage}
              alt="From our menu"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:w-1/2 p-6 text-white">
            <p className="text-sm text-white mb-2">April 20, 2025</p>
            <h3 className="text-2xl font-semibold mb-2">WHERE CAN I GET SOME?</h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Ea, repellat recusandae.
            </p>
            <button className="btn btn-outline border-0 border-b-4 border-white text-white hover:bg-black hover:text-white transition-all duration-300">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </section>
    );
};

export default FeatureSection;