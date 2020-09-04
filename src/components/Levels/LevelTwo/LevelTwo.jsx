import React, { useState, useRef } from 'react';
import './LevelTwo.scss';
import redRay from '../../../assets/images/red-ray.png';
import orangeRay from '../../../assets/images/orange-ray.png';
import yellowRay from '../../../assets/images/yellow-ray.png';
import greenRay from '../../../assets/images/green-ray.png';
import blueRay from '../../../assets/images/blue-ray.png';
import purpleRay from '../../../assets/images/purple-ray.png';

const LevelTwo = ({ currentLevel, newLevel }) => {
    const [mantaImgs, setMantaImgs] = useState([redRay, orangeRay, yellowRay, greenRay, blueRay]);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [inputOne, setInputOne] = useState(null);
    const [inputTwo, setInputTwo] = useState(null);
    const [inputOneCorrect, setInputOneCorrect] = useState(false);
    const [inputTwoCorrect, setInputTwoCorrect] = useState(false);

    // refs to user inputs
    const answerOne = useRef();
    const answerTwo = useRef();

    // clear user inputs when level is complete
    const clearInput = () => {
        answerOne.current.value = '';
        answerTwo.current.value = '';
    }

    const checkAnswer = (input) => {
        // shift
        if (currentQuestion === 1 && input === currentLevel.answerOne) {
            setInputOneCorrect(true);
            setCurrentQuestion(2);
            shiftArray();
            // unshift
        } else if (currentQuestion === 1) {
            answerOne.current.value = '';
            answerOne.current.placeholder = 'try again';
        } else if (currentQuestion === 2 && input === currentLevel.answerTwo) {
            setInputTwoCorrect(true);
            unshiftArray();
        } else {
            answerTwo.current.value = '';
            answerTwo.current.placeholder = 'try again';
        };
    }

    // allows answer to be submitted with return key
    const keyPressHandler = (e, input) => {
        if (e.key !== 'Enter') {
            return;
        }
        checkAnswer(input);
    }

    const shiftArray = () => {
        const mantaImgsCopy = mantaImgs.slice();
        mantaImgsCopy.unshift(purpleRay);
        setMantaImgs(mantaImgsCopy);
    }

    const unshiftArray = () => {
        const mantaImgsCopy = mantaImgs.slice();
        mantaImgsCopy.shift();
        setMantaImgs(mantaImgsCopy);
    }

    return (
        <section className='level'>
            <p className='level__instructions'>{currentLevel.questionOne}</p>
            {/* original array to use methods on */}
            <p className='level__code'> 
                let mantArray = [
                {
                    mantaImgs.map((img, index) => {
                        // conditional ensures no additional comma on the last item
                        return index < mantaImgs.length - 1 ?
                        <><img className='level__manta-ray' src={img} alt='manta ray'/><span>,</span></>
                        : <><img className='level__manta-ray' src={img} alt='manta ray'/></>
                    })
                }
                ];
            </p>
            {/* input for question one */}
            <div className='level__input-container'>
                <span className='level__code'>mantArray.</span>
                <input 
                    className='level__code level__code--input' 
                    ref={answerOne} placeholder={`type method here`} 
                    onChange={(e) => setInputOne(e.target.value)}
                    onKeyPress={(e) => keyPressHandler(e, inputOne)}>
                </input>
                <span className='level__code'>(</span>
                <img className='level__manta-ray' src={purpleRay} alt='manta ray' />
                <span className='level__code'>);</span>
                <button className='level__input-button--tablet' onClick={() => checkAnswer(inputOne)}>Go!</button>
            </div>
            <button className='level__input-button--mobile' onClick={() => checkAnswer(inputOne)}>Go!</button>

            {/* input for question two appears only if question one is correct */}
            {
                inputOneCorrect &&
                <> 
                <p className='level__instructions'>{currentLevel.questionTwo}</p>
                <div className='level__input-container'>
                    <span className='level__code'>mantArray.</span>
                    <input 
                        className='level__code level__code--input' 
                        ref={answerTwo} placeholder={`type method here`} 
                        onChange={(e) => setInputTwo(e.target.value)}
                        onKeyPress={(e) => keyPressHandler(e, inputTwo)}>
                    </input>
                    <span className='level__code'>();</span>
                    <button className='level__input-button--tablet' onClick={() => checkAnswer(inputTwo)}>Go!</button>
                </div>
                <button className='level__input-button--mobile' onClick={() => checkAnswer(inputTwo)}>Go!</button>
                </>
            }
            {/* render next level button when both answers are correct */}
            {
                (inputOneCorrect && inputTwoCorrect) && 
                <button 
                className='level__next-button' 
                onClick={() => {
                    clearInput(); setInputOneCorrect(false); setInputTwoCorrect(false); newLevel((currentLevel.id + 1));
                }}>
                    Next
                </button> 
            }
        </section>
    );
}

export default LevelTwo;