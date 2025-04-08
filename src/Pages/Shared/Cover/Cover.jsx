import { Parallax } from 'react-parallax';

const Cover = ({ img, title,  }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="background"
      strength={-200}
    >
      
      <div className="h-[400px] flex items-center justify-center ">
        <div className="bg-black bg-opacity-40 px-40 py-16 text-center  backdrop-blur-sm">
          <h1 className="text-white   text-5xl font-semibold mb-4">{title}</h1>
          <p className="text-gray-200 mb-5 text-sm ">Ready to treat your taste buds? Let us tempt you with a dish crafted to satisfy both heart and soul</p>
        </div>
      </div>
  
    </Parallax>
  );
};

export default Cover;
