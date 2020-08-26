import React from 'react';
import './SelectLevel.scss';

const SelectLevel = ({ currentLevel, newLevel }) => {

    return (
        <select className='select' onChange={(e) => newLevel(e.target.value)}>
            <option className='select__option' value='1' selected={currentLevel === 1 ? 'selected' : null}>Level 1</option>
            <option className='select__option' value='2' selected={currentLevel === 2 ? 'selected' : null}>Level 2</option>
        </select>
    );
}

export default SelectLevel;