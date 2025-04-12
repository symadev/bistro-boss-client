import Swal from "sweetalert2";
import UseAuth from "../UseAuth/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";




const FoodCard = ({item}) => {
    const { name, image, recipe, price } = item;
    const navigate = useNavigate()
    const location = useLocation()

    //for hitting the user info 
    const {user} = UseAuth()

    
    const handleCart = food=>{
      // console.log(food,user.email);
      if(user && user.email){
        //to-do:send cart item to the database

        // const foddCart ={
        //   menuId = __dirname,
        //   email=
          
        // }
      }
      else{
        Swal.fire({
          title: " you are not logged in!",
          text: "please log into add to the cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login!"
        }).then((result) => {
          if (result.isConfirmed) {
          //send the user to the log in page
          navigate('/login', { state: { from: location } });
          }
        });
      }
    }
  
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
            <button  onClick={()=>handleCart(item)}className="btn btn-outline items-center border-0 border-b-4 border-white text-white hover:bg-black hover:text-white transition-all duration-300">add to cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;