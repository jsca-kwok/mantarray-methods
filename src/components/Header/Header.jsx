import React from 'react';
import './Header.scss';
import SelectLevel from '../SelectLevel/SelectLevel';
import logo from '../../assets/images/purple-ray.png';

const Header = ({ currentLevel, newLevel }) => {
    return (
        <header className='header'>
            <div className='header__logo-container'>
                <img className='header__logo' src={logo} alt='Mantarray Methods logo' />
            </div>
            <h1 className='header__heading'>Mantarray Methods</h1>
            <SelectLevel currentLevel={currentLevel} newLevel={newLevel} />
        </header>
    );
}

export default Header;