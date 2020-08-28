import React, { useState, useRef } from 'react';
import './LevelFive.scss';
import redRay from '../../../assets/images/red-ray.png';
import orangeRay from '../../../assets/images/orange-ray.png';
import yellowRay from '../../../assets/images/yellow-ray.png';
import greenRay from '../../../assets/images/green-ray.png';
import blueRay from '../../../assets/images/blue-ray.png';
import purpleRay from '../../../assets/images/purple-ray.png';

const LevelFive = ({ currentLevel, newLevel }) => {
    const [mantaImgs, setMantaImgs] = useState([redRay, orangeRay, yellowRay, greenRay, blueRay]);
    const [inputOne, setInputOne] = useState(null);
    const [inputOneCorrect, setInputOneCorrect] = useState(false);

    // refs to user inputs
    const answerOne = useRef();

    // clear user inputs when level is complete
    const clearInput = () => {
        answerOne.current.value = '';
    }

    const checkAnswer = (input) => {
        // reverse
        if (input === currentLevel.answerOne) {
            setInputOneCorrect(true);
            reverseArray();
        }
    }

    // allows answer to be submitted with return key
    const keyPressHandler = (e, input) => {
        if (e.key !== 'Enter') {
            return;
        }
        checkAnswer(input);
    }

    const reverseArray = () => {
        const mantaImgsCopy = mantaImgs.slice();
        mantaImgsCopy.reverse();
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
                    ref={answerOne} 
                    placeholder={`type method here`} 
                    onChange={(e) => setInputOne(e.target.value)}
                    onKeyPress={(e) => keyPressHandler(e, inputOne)}>
                </input>
                <span className='level__code'>(</span>
                <span className='level__code'>);</span>
                <button className='level__input-button--tablet' onClick={() => checkAnswer(inputOne)}>Go!</button>
            </div>
            <button className='level__input-button--mobile' onClick={() => checkAnswer(inputOne)}>Go!</button>
            {/* render next level button when both answers are correct */}
            {
                inputOneCorrect ? 
                // <button 
                // className='level__next-button' 
                // onClick={() => {
                //     clearInput(); setInputOneCorrect(false); newLevel((currentLevel.id + 1));
                // }}>
                //     Next
                // </button> 
                <p className='level__instructions'>Thanks for playing! More levels coming soon.</p>
                : null
            }
        </section>
    );
}

export default LevelFive;