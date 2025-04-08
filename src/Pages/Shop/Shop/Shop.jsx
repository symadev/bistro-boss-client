import { Parallax } from 'react-parallax';
import coverImg from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import Hooks from '../../../Hooks/Hooks';
const Shop = () => {
    const [tabIndex, setTabIndex] = useState(0)

    const [menu] = Hooks()
    const desserts = menu.filter(item =>item.category ==='dessert');
    const pizza = menu.filter(item =>item.category ==='pizza');
    const soup = menu.filter(item =>item.category ==='soup');
    const salad = menu.filter(item =>item.category ==='salad'); 
    const offered= menu.filter(item =>item.category ==='offered'); 
    return (
        <section>
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
  <TabList>
    <Tab>Salad</Tab>
    <Tab>pizza</Tab>
    <Tab>soups</Tab>
    <Tab>desserts</Tab>
    <Tab>drinks</Tab>
    
   
  </TabList>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
</Tabs>

        </section>
    );
};

export default Shop;