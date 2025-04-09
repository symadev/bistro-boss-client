import { Parallax } from 'react-parallax';
import coverImg from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import Hooks from '../../../Hooks/Hooks';

import ShopTab from '../ShopTab/ShopTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Shop = () => {
    const categories = ['salad','pizza','soup','desserts','drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const [menu] = Hooks()
    const desserts = menu.filter(item =>item.category ==='dessert');
    const pizza = menu.filter(item =>item.category ==='pizza');
    const soup = menu.filter(item =>item.category ==='soup');
    const salad = menu.filter(item =>item.category ==='salad'); 
    const drinks= menu.filter(item =>item.category ==='drinks'); 
    return (
        <section>
            <Helmet>
                    <title>Bistro | Our Shop</title>
                   
                   
                  </Helmet>
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={coverImg}
            bgImageAlt="background"
            strength={-200}
        >

            <div className="h-[400px] flex items-center justify-center ">
                <div className="bg-black bg-opacity-40 px-40 py-16 text-center  backdrop-blur-sm">
                    <h1 className="text-white   text-5xl font-semibold mb-4">OUR SHOP</h1>
                    <p className="text-gray-200 mb-5 text-sm ">Would you like to try a dish?</p>
                </div>
            </div>
   

        </Parallax>
       
        <Tabs defaultIndex={tabIndex} onSelect={(index) =>setTabIndex(index)}>
        <div className="flex items-center justify-center p-10 ">
  <TabList className="flex gap-4">
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soups</Tab>
    <Tab>Desserts</Tab>
    <Tab>Drinks</Tab>
  </TabList>
</div>
  <TabPanel>
   <ShopTab items={salad}></ShopTab>
  </TabPanel>
  <TabPanel>
  <ShopTab items={pizza}></ShopTab>
  </TabPanel>
  <TabPanel> <ShopTab items={soup}></ShopTab>
  </TabPanel>
  <TabPanel>
  <ShopTab items={desserts}></ShopTab>
  </TabPanel>
  <TabPanel>
  <ShopTab items={drinks}></ShopTab>
  </TabPanel>
</Tabs>

        </section>
    );
};

export default Shop;