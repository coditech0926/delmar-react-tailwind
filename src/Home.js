import React from "react";

import logo from "./assets/icon/logo.svg"

const Home = () => {
    return (
        <div className='grid grid-cols-1 h-screen w-full p-8'>
            <img src={logo} alt="" width="300" height="150" />
        </div>
    );
};

export default Home;
