

const Titles = ({heading,subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
           <p className="text-yellow-500">---{heading}---</p> 
           <h2 className="text-4xl uppercase border-y-4 py-4 ">{subHeading}</h2>
        </div>
    );
};

export default Titles;