

const MenuItem = ({ item }) => {
    const { name, image, recipe, price } = item;
  
    return (
      <div className="flex space-x-4 border-b pb-4">
        <img style={{borderRadius:'0 200px 200px 200px'}}
          src={image}
          alt={name}
          className="w-24 h-24 object-cover rounded-md shadow-md"
        />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold">{name} --------</h3>
            <p className="text-yellow-600 font-medium">${price}</p>
          </div>
          <p className="text-gray-600">{recipe}</p>
        </div>
      </div>
    );
  };
  
  export default MenuItem;
  