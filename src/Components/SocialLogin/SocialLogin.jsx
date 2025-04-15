import { FaGoogle } from "react-icons/fa";

import UseAuth from "../UseAuth/UseAuth";
import UseAxiosPublic from "../UseAuth/UseAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const navigate = useNavigate()
    const axiosPublic = UseAxiosPublic()
    const {googleSignIn} = UseAuth()
    const handleGoogleSubmit =() =>{
        googleSignIn()
        .then((result) => {
        console.log(result.user);
        //akhon jehetu user ta dhuke jabe tai amara aikahne axios use kore user ar data ta pathay debo
        const userInfo={
            email:result.user?.email,
           
        }
        axiosPublic.post('/users',userInfo)
        .then(res=>{
            console.log(res.data)
            navigate ('/');
        })
        })
        

    }
    return (
        <button  onClick={handleGoogleSubmit }className="btn bg-white text-black">
     <FaGoogle className="text-yellow-400"></FaGoogle>
        Google
      </button>
    );
};

export default SocialLogin;