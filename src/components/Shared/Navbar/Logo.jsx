import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../../../assets/images/logo.png'

const Logo = () => {
    return (
        <Link to='/'><img className='hidden md:block' src={LogoImg} alt="logo" height={100} width={100} /></Link>
    );
};

export default Logo;