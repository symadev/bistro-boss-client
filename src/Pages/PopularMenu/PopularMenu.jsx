
import MenuItem from "../Shared/MenuItem/MenuItem";
import Hooks from "../../Hooks/Hooks";


const PopularMenu = () => {
    const [menu] = Hooks()
    const popular = menu.filter(item =>item.category ==='popular');
   
    return (
        <section>
        <div className="grid md:grid-cols-2 gap-4 mb-10" >
            {
               popular.map(item=><MenuItem key ={item._id} item={item}></MenuItem>)
            }
            
        </div>
        <div className="flex justify-center mb-4">
  <button className="btn btn-outline items-center border-0 border-b-4 border-white text-white hover:bg-black hover:text-white transition-all duration-300">
    View Full Menu
  </button>
</div>
        </section>
        
    );
};

export default PopularMenu;