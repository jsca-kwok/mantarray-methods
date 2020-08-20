import React from 'react';
import './Game.scss';
import Header from '../../components/Header/Header';
import Visual from '../../components/Visual/Visual';
import Instruction from '../../components/Instruction/Instruction';

class Game extends React.Component {

    // function to route to new page, passed down to SelectLevel.jsx for onChange
    newLevel = (e) => {
        this.props.history.push(`/level/${e.target.value}`);
    }

    render() {

        return (
            <>
            <Header newLevel={this.newLevel} />
            <main className='main'>
                <Visual className='main__visual' />
                <Instruction className='main__instruction' />
            </main>
            </>
        );
    }
}

export default Game;