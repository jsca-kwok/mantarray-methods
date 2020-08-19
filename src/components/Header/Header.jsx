import React from 'react';
import './Header.scss';
import SelectLevel from '../SelectLevel/SelectLevel';
import logo from '../../assets/images/purple-ray.png';

const Header = () => {
    return (
        <header className='header'>
            <img className='header__logo' src={logo} alt='Mantarray Methods logo' />
            <h1 className='header__heading'>Mantarray Methods</h1>
            <SelectLevel />
        </header>
    );
}

export default Header;