import React from 'react';
import './SelectLevel.scss';

const SelectLevel = ({ newLevel }) => {
    return (
        <select className='select' onChange={(e) => newLevel(e)}>
            <option className='select__option' value='1'>Level 1</option>
            <option className='select__option' value='2'>Level 2</option>
        </select>
    );
}

export default SelectLevel;