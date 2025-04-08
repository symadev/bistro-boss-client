import { Parallax } from 'react-parallax';
import ContactImg from '../../../assets/contact/banner.jpg'

const ContactInfo = () => {
    return (
        <Parallax
                    blur={{ min: -50, max: 50 }}
                    bgImage={ContactImg}
                    bgImageAlt="background"
                    strength={-200}
                  >
                    
                    <div className="h-[400px] flex items-center justify-center ">
                      <div className="bg-black bg-opacity-40 px-40 py-16 text-center  backdrop-blur-sm">
                        <h1 className="text-white   text-5xl font-semibold mb-4">CONTACT US</h1>
                        <p className="text-gray-200 mb-5 text-sm ">Would you like to try a dish?</p>
                      </div>
                    </div>
                
                  </Parallax>
    );
};

export default ContactInfo;