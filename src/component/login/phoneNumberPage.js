import React, { useState, useContext  } from "react";
import { Link } from "react-router-dom";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import { FiArrowLeft } from "react-icons/fi";
import UserContext from "../../context/userContext";

import ModelLogo from "../../assets/Modal-Logo.png"
import Image1 from "../../assets/image-1.png"



export default function PhoneNumberPage() {
    const [value, setValue] = useState('');
    const { phoneNumber, setPhoneNumber } = useContext(UserContext);


    const getEnterCode = async () => {
        console.log(value, 'I am VALUE');
        await setPhoneNumber(value);
        console.log(phoneNumber, 'I am PHONENUMBER');
    }

    
    return (
        <div className="w-full absolute h-full min-h-screen bg-cover flex bg-[url('./assets/Blur-Bg.png')] px-8 py-20 xl:py-40 justify-center items-center" >
            <div className="w-64 bg-white rounded-xl px-2 lg:px-16 xl:px-20 2xl:px-40 md:w-1/2 relative 2xl:w-[950px]">
                <h2 className="w-16 lg:w-24 absolute justify-center flex top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img src={ModelLogo} alt="ModelLogo" />
                </h2>
                <Link to='/login'>
                    <FiArrowLeft className="text-pinkLight text-sm md:text-xl lg:text-xl xl:text-3xl mt-8 xl:mt-10" />
                </Link>
                <img src={Image1} alt="ModelLogo" className="mx-auto w-60 xl:w-64 justify-center" />
                <div className="text-lg xl:text-xl 2xl:text-2xl font-bold text-start my-3"> My number is</div>
                <div className="w-full xl:text-2xl lg:w-2/3 mx-auto px-5">
                    <div className="justify-center">
                        <PhoneInput
                            international
                            defaultCountry=""
                            value={value}
                            onChange={setValue}
                            maxLength={19}
                        />
                    </div>
                    <hr className="w-4/5 2xl:w-2/3 h-px mx-auto my-3 border-0 bg-buleLight" />

                </div>
                <div className="text-sm xl:text-lg justify-center my-5 xl:my-8 leading-relaxed">
                    Please enter your mobile number to receive a verification code. <br />Message and data rates may apply.
                </div>
                <div className="my-5 xl:my-10">
                    <Link to="/login/enter" onClick={getEnterCode} className="bg-pinkLight justify-center xl:text-2xl text-white rounded-xl py-2 px-10 xl:py-4 xl:px-20">CONTINUE</Link>
                </div>
            </div>
        </div >
    )
}