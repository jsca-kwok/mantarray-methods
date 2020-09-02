import React, { useState, useRef } from 'react';
import './LevelSix.scss';
import redRay from '../../../assets/images/red-ray.png';
import orangeRay from '../../../assets/images/orange-ray.png';
import yellowRay from '../../../assets/images/yellow-ray.png';
import greenRay from '../../../assets/images/green-ray.png';
import blueRay from '../../../assets/images/blue-ray.png';
import purpleRay from '../../../assets/images/purple-ray.png';
import greyRay from '../../../assets/images/grey-ray.png';
import hat from '../../../assets/images/hat.png';

const LevelSix = ({ currentLevel, newLevel }) => {
    const [mantaImgs, setMantaImgs] = useState([redRay, orangeRay, yellowRay, greenRay, blueRay, purpleRay]);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [cowboyImgs, setCowboyImgs] = useState([]);
    const [inputOne, setInputOne] = useState(null);
    const [inputOneCorrect, setInputOneCorrect] = useState(false);

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
            mapArray();
        } else {
            answerOne.current.value = '';
            answerOne.current.placeholder = 'try again';
        } 
    }

    // allows answer to be submitted with return key
    const keyPressHandler = (e, input) => {
        if (e.key !== 'Enter') {
            return;
        }
        checkAnswer(input);
    }

    const mapArray = () => {
        let cowboyArray = [];
        mantaImgs.map(img => cowboyArray.push(img));
        setCowboyImgs(cowboyArray);
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
                <p className='level__code'>let cowboys = mantArray.</p>
                <input 
                    className='level__code level__code--input' 
                    ref={answerOne} 
                    placeholder={`type answer here`} 
                    onChange={(e) => setInputOne(e.target.value)}
                    onKeyPress={(e) => keyPressHandler(e, inputOne)}>
                </input>
                <span className='level__code'>(</span>
                <img className='level__manta-ray' src={greyRay} alt='each ray' />
                <span className='level__code'>=&gt; + </span>
                <img className='level__hat' src={hat} alt='hat' />
                <span>);</span>
            </div>
                <p className='level__code'>
                    cowboys = [
                    {
                        cowboyImgs.map((img, index) => {
                            // conditional ensures no additional comma on the last item
                            return index < cowboyImgs.length - 1 ?
                            <><img className='level__manta-ray' src={img} alt='manta ray'/><span>,</span></>
                            : <><img className='level__manta-ray' src={img} alt='manta ray'/></>
                        })
                    }
                    ];
                </p>
                <button className='level__button--tablet' onClick={() => checkAnswer(inputOne)}>Go!</button>
                <button className='level__button--mobile' onClick={() => checkAnswer(inputOne)}>Go!</button>
            {/* render next level button when answer is correct */}
            {
                inputOneCorrect ? 
                <button 
                className='level__next-button' 
                onClick={() => {
                    clearInput(); setInputOneCorrect(false); newLevel((currentLevel.id + 1));
                }}>
                    Next
                </button> 
                : null
            }
        </section>
    );
}

export default LevelSix;