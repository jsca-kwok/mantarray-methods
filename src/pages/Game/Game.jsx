import React from 'react';
import './Game.scss';
import Header from '../../components/Header/Header';
import Visual from '../../components/Visual/Visual';
import Instruction from '../../components/Instruction/Instruction';

class Game extends React.Component {
    state = {
        currentLevel: 1,
        1: {
            id: 1, 
            description: 'description of array methods', 
            questionOne: 'description of instructions', 
            questionTwo: 'description of instructions',
            answerOne: 'answer to questionOne',
            answerTwo: 'answer to questionTwo'
        },
        2: {
            id: 2, 
            description: 'The .unshift() method adds an item to the start of an array and returns the new array length. The .shift() method removes and returns the first item of an array. Both these methods alter the original array.', 
            questionOne: 'Purple Ray is a jerk sometimes and wants to budge. Help him get to the front of the line.',
            questionTwo: `Hey! It's rude to budge. Throw Purple Ray out of the line.`,
            answerOne: 'unshift',
            answerTwo: 'shift'
        }
    };

    // function to route to new page, passed down to SelectLevel.jsx for onChange
    newLevel = (level) => {
        this.props.history.push(`/level/${level}`);
        this.setState({currentLevel: level});
    }

    render() {
        return (
            <>
            <Header newLevel={this.newLevel}/>
            <main className='main'>
                <Visual className='main__visual' currentLevel={this.state[this.state.currentLevel]} newLevel={this.newLevel}/>
                <Instruction className='main__instruction' description={this.state[this.state.currentLevel].description}/>
            </main>
            </>
        );
    }
}

export default Game;