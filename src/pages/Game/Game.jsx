import React, { useState } from 'react';
import './Game.scss';
import Header from '../../components/Header/Header';
import Visual from '../../components/Visual/Visual';
import Instruction from '../../components/Instruction/Instruction';

const Game = () => {

    const [level, setLevel] = useState(1);

    return (
        <>
        <Header />
        <main className='main'>
            <Visual className='main__visual' />
            <Instruction className='main__instruction' />
        </main>
        </>
    );
}

export default Game;