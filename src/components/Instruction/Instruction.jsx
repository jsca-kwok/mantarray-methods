import React from 'react';
import './Instruction.scss';

const Instruction = ({ description }) => {
    return (
        <section className='instruction'>
            <p className='instruction__intro'>Welcome to Mantarray Methods! Help Ray and his friends by using JavaScript array methods.</p>
            {
                description ? 
                <p className='instruction__description'>{description}</p>
                : <p className='instruction__description'>More levels coming soon!</p>
            }
            
        </section>
    );
}

export default Instruction;