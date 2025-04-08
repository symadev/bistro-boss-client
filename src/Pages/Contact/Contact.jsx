import Titles from "../../Components/Titles/Titles";

const Contact = () => {
  return (
    <div className="mb-10">
      <div className="bg-neutral text-white py-16 text-center">
        <h2 className="text-3xl font-semibold">
          Call Us: <span className="font-bold">+88 0192345678910</span>
        </h2>
      </div>

      <Titles
        heading={"---Should Try--- "}
        subHeading={"CHEF RECOMMENDS"}
      />
    </div>
  );
};

export default Contact;
