import React, { useState, useRef } from 'react';
import './LevelFour.scss';
import redRay from '../../../assets/images/red-ray.png';
import orangeRay from '../../../assets/images/orange-ray.png';
import yellowRay from '../../../assets/images/yellow-ray.png';
import greenRay from '../../../assets/images/green-ray.png';
import blueRay from '../../../assets/images/blue-ray.png';
import purpleRay from '../../../assets/images/purple-ray.png';

const LevelFour = ({ currentLevel, newLevel }) => {
    const [mantaImgs, setMantaImgs] = useState([redRay, orangeRay, yellowRay, greenRay, blueRay, purpleRay]);
    const [newMantaImgs, setNewMantaImgs] = useState([]);
    const [moreMantaImgs, setMoreMantaImgs] = useState([]);
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
        // remove spaces from user input
        const alteredInput = input.split(' ').join('');
        console.log(alteredInput);
        // slice()
        if (alteredInput === currentLevel.answerOne) {
            setInputOneCorrect(true);
            sliceArray(setNewMantaImgs);
        // slice
        } else if (alteredInput === currentLevel.answerTwo) {
            setInputTwoCorrect(true);
            sliceArray(setMoreMantaImgs, 2, 5);
        };
    }

    const sliceArray = (callback, x = 0, y = mantaImgs.length + 1) => {
        const newMantaImgs = mantaImgs.slice(x,y);
        callback(newMantaImgs);
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
                <p className='level__code'>let newMantArray = mantArray.</p>
                <input className='level__code level__code--input' ref={answerOne} placeholder={`type answer here`} onChange={(e) => setInputOne(e.target.value)}></input>
                <span className='level__code'>;</span>
            </div>
                <p className='level__code'>
                    newMantArray = [
                    {
                        newMantaImgs.map((img, index) => {
                            // conditional ensures no additional comma on the last item
                            return index < newMantaImgs.length - 1 ?
                            <><img className='level__manta-ray' src={img} alt='manta ray'/><span>,</span></>
                            : <><img className='level__manta-ray' src={img} alt='manta ray'/></>
                        })
                    }
                    ];
                </p>
                <button className='level__button--tablet' onClick={() => checkAnswer(inputOne)}>Go!</button>
                <button className='level__button--mobile' onClick={() => checkAnswer(inputOne)}>Go!</button>

            {/* input for question two appears only if question one is correct */}
            {
                inputOneCorrect ?
                <> 
                <p className='level__instructions'>{currentLevel.questionTwo}</p>
                <div className='level__input-container'>
                    <p className='level__code'>let moreMantArray = mantArray.</p>
                    <input className='level__code level__code--input' ref={answerTwo} placeholder={`type answer here`} onChange={(e) => setInputTwo(e.target.value)}></input>
                    <span className='level__code'>;</span>
                    <button className='level__button--tablet' onClick={() => checkAnswer(inputTwo)}>Go!</button>
                </div>
                <p className='level__code'>
                    moreMantArray = [
                    {
                        moreMantaImgs.map((img, index) => {
                            // conditional ensures no additional comma on the last item
                            return index < moreMantaImgs.length - 1 ?
                            <><img className='level__manta-ray' src={img} alt='manta ray'/><span>,</span></>
                            : <><img className='level__manta-ray' src={img} alt='manta ray'/></>
                        })
                    }
                    ];
                </p>
                <button className='level__button--tablet' onClick={() => checkAnswer(inputTwo)}>Go!</button>
                <button className='level__button--mobile' onClick={() => checkAnswer(inputTwo)}>Go!</button>
                </>
                : null
            }
            {/* render next level button when both answers are correct */}
            {
                inputOneCorrect && inputTwoCorrect ? 
                <button 
                className='level__next-button' 
                onClick={() => {
                    clearInput(); setInputOneCorrect(false); setInputTwoCorrect(false); newLevel((currentLevel.id + 1));
                }}>
                    Next
                </button> 
                : null
            }
        </section>
    );
}

export default LevelFour;