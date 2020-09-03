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
            description: 'The .push(x) method adds x to the end of an array and returns the new array length. \n\n The .pop() method removes and returns the last item of an array. \n\n Both these methods alter the original array.', 
            questionOne: `Hey look! Where are all of Purple Ray's friends headed? Help him join his buddies at the end of the line.`, 
            questionTwo: 'On second thought, Purple Ray wants to practice his JavaScript array methods. Take him out so he can study instead.',
            answerOne: 'push',
            answerTwo: 'pop'
        },
        2: {
            id: 2, 
            description: 'The .unshift(x) method adds x to the start of an array and returns the new array length. \n\n The .shift() method removes and returns the first item of an array. \n\n Both these methods alter the original array.', 
            questionOne: 'Purple Ray is a jerk sometimes and wants to butt in line. Help him get to the front of the line.',
            questionTwo: `Hey! It's rude to budge. Throw Purple Ray out of the line.`,
            answerOne: 'unshift',
            answerTwo: 'shift'
        },
        3: {
            id: 3, 
            description: 'The .splice(x,y,z) method removes y (optional) number of items starting with index x and replaces it with z (optional). \n\n If y is not specified, all items starting and inclusive of x will be removed. \n\n Returns the removed items in an array. \n\n This method alters the original array.', 
            questionOne: 'Where did Purple Ray go? Take Orange Ray out of the line to look for Purple Ray.',
            questionTwo: `What's taking Orange Ray so long? Send all Rays out the line to help!`,
            answerOne: 'splice(1,1)',
            answerTwo: 'splice(0)'
        },
        4: {
            id: 4,
            description: 'The .slice(x,y) method makes a copy of the array starting with index x (optional) and up to, but not including, index y (optional). \n\n If x is not specified, index 0 is the default. If y is not specified, the method will copy to the last index of the array. \n\n This method returns the copied items and does NOT alter the original array.', 
            questionOne: `The gang's all here! Let's add more rays to this party started by creating a copy mantArray.`,
            questionTwo: 'Turns out Yellow, Green and Blue Rays are the life of the party. Make another copy of them!',
            answerOne: 'slice',
            answerTwo: 'slice(2,5)'
        },
        5: {
            id: 5,
            description: 'The .reverse() method reverses the order of the array items and returns the reversed array. \n\n This method alters the original array.', 
            questionOne: `Purple Ray is sick and tired of being last all the time. Reverse the array so he ends up in front.`,
            questionTwo: null,
            answerOne: 'reverse',
            answerTwo: null
        },
        6: {
            id: 6,
            description: 'The .map(item => callback) method performs a callback function on each item and returns a new array with the results. \n\n The .forEach(item => callback) method performs a callback function on each item in the array but does NOT return anything. \n\n Both these methods do not alter the original array. The difference is the return value of the method.', 
            questionOne: `Yee-haw! It's time for a rodeo party. Give cowboy hats to all the Rays.`,
            questionTwo: `What kind of rodeo has no dancing? Let's start a line dance!`,
            answerOne: 'map',
            answerTwo: 'forEach'
        },
        7: {
            id: 7,
            description: 'The .filter(item => callback) method performs a callback function to test each item in the array and returns a new array with the items that pass the test. \n\n The .find(item => callback) method performs a callback function test each item in the array and returns the value of the first passing item. \n\n Both these methods do not alter the original array.', 
            questionOne: `The Red Rays caused chaos at the rodeo party. Single out the first Red Ray to take him in for questioning.`,
            questionTwo: `Red Ray admits that he and his friends were the troublemakers. Bring in all the Red Rays.`,
            answerOne: 'find',
            answerTwo: 'filter'
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