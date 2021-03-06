import React, { useState, useRef } from 'react';
import './LevelSeven.scss';
import redRay from '../../../assets/images/red-ray.png';
import orangeRay from '../../../assets/images/orange-ray.png';
import yellowRay from '../../../assets/images/yellow-ray.png';
import greenRay from '../../../assets/images/green-ray.png';
import blueRay from '../../../assets/images/blue-ray.png';
import purpleRay from '../../../assets/images/purple-ray.png';
import greyRay from '../../../assets/images/grey-ray.png';
import hat from '../../../assets/images/hat.png';
import redRayHat from '../../../assets/images/red-ray-hat.png';
import orangeRayHat from '../../../assets/images/orange-ray-hat.png';
import yellowRayHat from '../../../assets/images/yellow-ray-hat.png';
import greenRayHat from '../../../assets/images/green-ray-hat.png';
import blueRayHat from '../../../assets/images/blue-ray-hat.png';
import purpleRayHat from '../../../assets/images/purple-ray-hat.png';
import greyRayHat from '../../../assets/images/grey-ray-hat.png';

const LevelSeven = ({ currentLevel, newLevel }) => {
    const [mantaHatImgs, setMantaHatImgs] = useState([redRayHat, orangeRayHat, redRayHat, redRayHat, blueRayHat, redRayHat]);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [suspect, setSuspect] = useState([]);
    const [suspects, setSuspects] = useState([]);
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
        if (currentQuestion === 1 && alteredInput === currentLevel.answerOne) {
            setInputOneCorrect(true);
            setCurrentQuestion(2);
            findArray();
        } else if (currentQuestion === 1) {
            answerOne.current.value = '';
            answerOne.current.placeholder = 'try again';
        } else if (currentQuestion === 2 && alteredInput === currentLevel.answerTwo) {
            setInputTwoCorrect(true);
            filterArray();
        } else {
            answerTwo.current.value = '';
            answerTwo.current.placeholder = 'try again';
        }
    }

    // allows answer to be submitted with return key
    const keyPressHandler = (e, input) => {
        if (e.key !== 'Enter') {
            return;
        }
        checkAnswer(input);
    }

    const findArray = () => {
        const redRay = mantaHatImgs.slice(0,1);
        setSuspect(redRay);
    }

    const filterArray = () => {
        const allRedRays = [redRayHat, redRayHat, redRayHat, redRayHat];
        setSuspects(allRedRays);
    }

    return (
        <section className='level'>
            <p className='level__instructions'>{currentLevel.questionOne}</p>
            {/* original array to use methods on */}
            <p className='level__code'> 
                let mantArray = [
                {
                    mantaHatImgs.map((img, index) => {
                        // conditional ensures no additional comma on the last item
                        return index < mantaHatImgs.length - 1 ?
                        <><img className='level__manta-ray' src={img} alt='manta ray'/><span>,</span></>
                        : <><img className='level__manta-ray' src={img} alt='manta ray'/></>
                    })
                }
                ];
            </p>
            {/* input for question one */}
            <div className='level__input-container'>
                <p className='level__code'>let suspect = mantArray.</p>
                <input 
                    className='level__code level__code--input' 
                    ref={answerOne} 
                    placeholder={`type answer here`} 
                    onChange={(e) => setInputOne(e.target.value)}
                    onKeyPress={(e) => keyPressHandler(e, inputOne)}>
                </input>
                <span className='level__code'>(</span>
                <img className='level__manta-ray' src={greyRayHat} alt='each ray' />
                <span className='level__code'>=&gt; </span>
                <img className='level__manta-ray' src={greyRayHat} alt='each ray' />
                <span className='level__code'>===</span>
                <img className='level__manta-ray' src={redRayHat} alt='red ray' />
                <span>);</span>
            </div>
            <p className='level__code'>
                suspect = [
                {
                    suspect.map((img, index) => {
                        // conditional ensures no additional comma on the last item
                        return index < suspect.length - 1 ?
                        <><img className='level__manta-ray-hat' src={img} alt='manta ray'/><span>,</span></>
                        : <><img className='level__manta-ray-hat' src={img} alt='manta ray'/></>
                    })
                }
                ];
            </p>
            <button className='level__button--tablet' onClick={() => checkAnswer(inputOne)}>Go!</button>
            <button className='level__button--mobile' onClick={() => checkAnswer(inputOne)}>Go!</button>
            {/* input for question two appears only if question one is correct */}
            {
                inputOneCorrect &&
                <> 
                <p className='level__instructions'>{currentLevel.questionTwo}</p>
                <div className='level__input-container'>
                    <p className='level__code'>let suspects = mantArray.</p>
                    <input 
                        className='level__code level__code--input' 
                        ref={answerTwo} 
                        placeholder={`type answer here`} 
                        onChange={(e) => setInputTwo(e.target.value)}
                        onKeyPress={(e) => keyPressHandler(e, inputTwo)}>
                    </input>
                    <span className='level__code'>(</span>
                    <img className='level__manta-ray' src={greyRayHat} alt='each ray' />
                    <span className='level__code'>=&gt; </span>
                    <img className='level__manta-ray' src={greyRayHat} alt='each ray' />
                    <span className='level__code'>===</span>
                    <img className='level__manta-ray' src={redRayHat} alt='red ray' />
                    <span>);</span>
                    <button className='level__button--tablet' onClick={() => checkAnswer(inputTwo)}>Go!</button>
                </div>
                <p className='level__code'>
                suspects = [
                {
                    suspects.map((img, index) => {
                        // conditional ensures no additional comma on the last item
                        return index < suspects.length - 1 ?
                        <><img className='level__manta-ray-hat' src={img} alt='manta ray'/><span>,</span></>
                        : <><img className='level__manta-ray-hat' src={img} alt='manta ray'/></>
                    })
                }
                ];
            </p>
                <button className='level__button--tablet' onClick={() => checkAnswer(inputTwo)}>Go!</button>
                <button className='level__button--mobile' onClick={() => checkAnswer(inputTwo)}>Go!</button>
                </>
            }
            {/* render next level button when both answers are correct */}
            {
                (inputOneCorrect && inputTwoCorrect) && 
                // <button 
                // className='level__next-button' 
                // onClick={() => {
                //     clearInput(); setInputOneCorrect(false); setInputTwoCorrect(false); newLevel((currentLevel.id + 1));
                // }}>
                //     Next
                // </button> 
                // : null
                <p className='level__code'>Thanks for playing! More levels coming soon.</p>
            }
        </section>
    );
}

export default LevelSeven;