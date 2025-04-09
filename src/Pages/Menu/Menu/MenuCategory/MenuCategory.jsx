import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";


const MenuCategory = ({items,title,img}) => {
    return (
       <div className="p-10">
{title && <Cover img ={img} title={title} ></Cover>}

        <div className="grid md:grid-cols-2 gap-4 mb-10 mt-16" >
        {
           items.map(item=><MenuItem key ={item._id} item={item}></MenuItem>)
        }
   
        
    </div>
    <div className="flex justify-center mb-4">
            <Link to= {`/shop/${title}`}>
  <button className="btn btn-outline items-center border-0 border-b-4 border-white text-white hover:bg-black hover:text-white transition-all duration-300">
  Order Your Favorite Food
  </button>
  </Link>
</div>
    </div>
    );
};

export default MenuCategory;