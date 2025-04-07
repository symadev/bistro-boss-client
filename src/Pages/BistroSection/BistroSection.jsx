import img from "../../assets/home/chef-service.jpg";
import Titles from "../../Components/Titles/Titles";

const BistroSection = () => {
  return (
    <>
      <section
        className="bg-cover bg-center py-20 mb-10"
        style={{
          backgroundImage: `url(${img})`, // Correct way to use the image path
        }}
      >
        <div className="max-w-3xl mx-auto bg-white bg-opacity-90 text-center p-10 shadow-lg rounded-lg">
          <h2 className="text-4xl text-black font-serif mb-4">Bistro Boss</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </section>

      <Titles
        heading={"---Check it out---"}
        subHeading={"FROM OUR MENU"}
      />
    </>
  );
};

export default BistroSection;
