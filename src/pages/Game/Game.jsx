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
            description: 'The .push() method adds an item to the end of an array and returns the new array length. The .pop() method removes and returns the last item of an array. Both these methods alter the original array.', 
            questionOne: `Hey look! Where are all of Purple Ray's friends headed? Help him join his buddies at the end of the line.`, 
            questionTwo: 'On second thought, Purple Ray wants to practice his JavaScript array methods. Take him out so he can study instead.',
            answerOne: 'push',
            answerTwo: 'pop'
        },
        2: {
            id: 2, 
            description: 'The .unshift() method adds an item to the start of an array and returns the new array length. The .shift() method removes and returns the first item of an array. Both these methods alter the original array.', 
            questionOne: 'Purple Ray is a jerk sometimes and wants to butt in line. Help him get to the front of the line.',
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
            <Header newLevel={this.newLevel} currentLevel={this.state.currentLevel}/>
            <main className='main'>
                <Visual className='main__visual' currentLevel={this.state[this.state.currentLevel]} newLevel={this.newLevel}/>
                <Instruction className='main__instruction' description={this.state[this.state.currentLevel].description}/>
            </main>
            </>
        );
    }
}

export default Game;