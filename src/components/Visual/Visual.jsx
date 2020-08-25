import React, { useState } from 'react';
import './Visual.scss';
import redRay from '../../assets/images/red-ray.png';
import orangeRay from '../../assets/images/orange-ray.png';
import yellowRay from '../../assets/images/yellow-ray.png';
import greenRay from '../../assets/images/green-ray.png';
import blueRay from '../../assets/images/blue-ray.png';
import purpleRay from '../../assets/images/purple-ray.png';

const Visual = ({ currentLevel, newLevel }) => {
    const [mantaImgs, setMantaImgs] = useState([redRay, orangeRay, yellowRay, greenRay, blueRay]);
    const [inputOne, setInputOne] = useState(null);
    const [inputTwo, setInputTwo] = useState(null);
    const [inputOneCorrect, setInputOneCorrect] = useState(false);
    const [inputTwoCorrect, setInputTwoCorrect] = useState(false);

    const checkAnswer = (input) => {
        if (input === inputOne && input === currentLevel.answerOne) {
            setInputOneCorrect(true);
            // add purple ray to original array if correct
            const mantaImgsCopy = mantaImgs.slice();
            mantaImgsCopy.unshift(purpleRay);
            setMantaImgs(mantaImgsCopy);
        };
        if (input === inputTwo && input === currentLevel.answerTwo) {
            setInputTwoCorrect(true);
            const mantaImgsCopy = mantaImgs.slice();
            mantaImgsCopy.shift();
            setMantaImgs(mantaImgsCopy);
        }
    }

    return (
        <section className='visual'>
            <p className='visual__instructions'>{currentLevel.questionOne}</p>
            {/* original array to use methods on */}
            <p className='visual__code'> 
                let mantArray = [
                {
                    mantaImgs.map((img, index) => {
                        // conditional ensures no additional comma on the last item
                        return index < mantaImgs.length - 1 ?
                        <><img className='visual__manta-ray' src={img} alt='manta ray'/><span>,</span></>
                        : <><img className='visual__manta-ray' src={img} alt='manta ray'/></>
                    })
                }
                ];
            </p>
            {/* input for question one */}
            <div className='visual__input-container'>
                <span className='visual__code'>mantArray.</span>
                <input className='visual__code visual__code--input' placeholder={`type method here`} onChange={(e) => setInputOne(e.target.value)}></input>
                <span className='visual__code'>(</span>
                <img className='visual__manta-ray' src={purpleRay} alt='manta ray' />
                <span className='visual__code'>);</span>
                <button className='visual__input-button--tablet' onClick={() => checkAnswer(inputOne)}>Go!</button>
            </div>
            <button className='visual__input-button--mobile' onClick={() => checkAnswer(inputOne)}>Go!</button>

            {/* input for question two appears only if question one is correct */}
            {
                inputOneCorrect ?
                <> 
                <p className='visual__instructions'>{currentLevel.questionTwo}</p>
                <div className='visual__input-container'>
                    <span className='visual__code'>mantArray.</span>
                    <input className='visual__code visual__code--input' placeholder={`type method here`} onChange={(e) => setInputTwo(e.target.value)}></input>
                    <span className='visual__code'>();</span>
                    <button className='visual__input-button--tablet' onClick={() => checkAnswer(inputTwo)}>Go!</button>
                </div>
                <button className='visual__input-button--mobile' onClick={() => checkAnswer(inputTwo)}>Go!</button>
                </>
                : null
            }
            {/* render next level button when both answers are correct */}
            {
                inputOneCorrect && inputTwoCorrect ? 
                <button className='visual__next-button' onClick={() => newLevel((currentLevel.id + 1))}>Next</button> 
                : null
            }
        </section>
    );
}

export default Visual;