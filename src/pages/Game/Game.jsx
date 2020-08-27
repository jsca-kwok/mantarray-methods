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
            description: 'The .push(x) method adds x to the end of an array and returns the new array length. The .pop() method removes and returns the last item of an array. Both these methods alter the original array.', 
            questionOne: `Hey look! Where are all of Purple Ray's friends headed? Help him join his buddies at the end of the line.`, 
            questionTwo: 'On second thought, Purple Ray wants to practice his JavaScript array methods. Take him out so he can study instead.',
            answerOne: 'push',
            answerTwo: 'pop'
        },
        2: {
            id: 2, 
            description: 'The .unshift(x) method adds x to the start of an array and returns the new array length. The .shift() method removes and returns the first item of an array. Both these methods alter the original array.', 
            questionOne: 'Purple Ray is a jerk sometimes and wants to butt in line. Help him get to the front of the line.',
            questionTwo: `Hey! It's rude to budge. Throw Purple Ray out of the line.`,
            answerOne: 'unshift',
            answerTwo: 'shift'
        },
        3: {
            id: 3, 
            description: 'The .splice(x,y,z) method removes y (optional) number of items starting with index x and replaces it with z (optional). If y is not specified, all items starting and inclusive of x will be removed. Returns the removed items in an array. This method alters the original array.', 
            questionOne: 'Where did Purple Ray go? Take Orange Ray out of the line to look for Purple Ray.',
            questionTwo: `What's taking Orange Ray so long? Send all Rays out the line to help!`,
            answerOne: 'splice(1,1)',
            answerTwo: 'splice(0)'
        },
        4: {
            id: 4,
            description: 'The .slice(x,y) method makes a copy of the array starting with index x (optional) and up to, but not including, index y (optional). If x is not specified, index 0 is the default. If y is not specified, the method will copy to the last index of the array. This method returns the copied items and does NOT alter the original array.', 
            questionOne: 'Where did Purple Ray go? Take Orange Ray out of the line to look for Purple Ray.',
            questionTwo: `What's taking Orange Ray so long? Send all Rays out the line to help!`,
            answerOne: 'splice(1,1)',
            answerTwo: 'splice(0)'
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