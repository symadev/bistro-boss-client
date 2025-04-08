

const FoodCard = ({item}) => {
    const { name, image, recipe, price } = item;
  
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="food"
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn btn-outline items-center border-0 border-b-4 border-white text-white hover:bg-black hover:text-white transition-all duration-300">add to cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;