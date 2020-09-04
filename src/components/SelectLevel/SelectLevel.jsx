import React from 'react';
import './SelectLevel.scss';

const SelectLevel = ({ currentLevel, newLevel }) => {

    return (
        <select className='select' onChange={(e) => newLevel(e.target.value)}>
            <option className='select__option' value='1' selected={currentLevel === 1 && 'selected'}>Level 1</option>
            <option className='select__option' value='2' selected={currentLevel === 2 && 'selected'}>Level 2</option>
            <option className='select__option' value='3' selected={currentLevel === 3 && 'selected'}>Level 3</option>
            <option className='select__option' value='4' selected={currentLevel === 4 && 'selected'}>Level 4</option>
            <option className='select__option' value='5' selected={currentLevel === 5 && 'selected'}>Level 5</option>
            <option className='select__option' value='6' selected={currentLevel === 6 && 'selected'}>Level 6</option>
        </select>
    );
}

export default SelectLevel;