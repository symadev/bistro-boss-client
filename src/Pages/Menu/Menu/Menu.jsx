import { Helmet,  } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'

import Titles from '../../../Components/Titles/Titles';
import Hooks from '../../../Hooks/Hooks';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {
  const [menu] = Hooks()
    const desserts = menu.filter(item =>item.category ==='dessert');
    const pizza = menu.filter(item =>item.category ==='pizza');
    const soup = menu.filter(item =>item.category ==='soup');
    const salad = menu.filter(item =>item.category ==='salad'); 
    const offered= menu.filter(item =>item.category ==='offered'); 
   
    return (
        <div>
        <Helmet>
        <title>Bistro | Menu</title>
       
       
      </Helmet>
      {/* main-cover */}
      <div>
       <Cover img ={menuImg} title= 'Our Menu' ></Cover>
       <Titles
        heading={"---Don't miss---"}
        subHeading={"TODAY'S OFFER"}
      />
       {/* offered-items */}
      <MenuCategory items ={offered}></MenuCategory>
       {/* offered-items */}
       <MenuCategory 
      img = {dessertImg}
       items ={desserts}
       title="Dessert" 
      ></MenuCategory>
       
       {/* pizza-items */}
       <MenuCategory 
      img = {pizzaImg}
       items ={pizza}
       title="Pizza" 
      ></MenuCategory>


       {/* soup-items */}
       <MenuCategory 
      img = {soupImg}
       items ={soup}
       title="Soup" 
      ></MenuCategory>


       {/* salad-items */}
       <MenuCategory 
      img = {saladImg}
       items ={salad}
       title="Salad" 
      ></MenuCategory>
       
       </div>
       </div>
    );
};

export default Menu;