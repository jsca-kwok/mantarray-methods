import React from 'react';
import './Visual.scss';
import redRay from '../../assets/images/red-ray.png';
import orangeRay from '../../assets/images/orange-ray.png';
import yellowRay from '../../assets/images/yellow-ray.png';
import greenRay from '../../assets/images/green-ray.png';
import blueRay from '../../assets/images/blue-ray.png';
import purpleRay from '../../assets/images/purple-ray.png';

const Visual = () => {
    const mantaImgs = [redRay, orangeRay, yellowRay, greenRay, blueRay];

    return (
        <section className='visual'>
            {/* original array to use methods on */}
            <p className='visual__code'> 
                const mantArray = [
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
            <div className='visual__input-container'>
                <p className='visual__code'>mantArray.</p>
                <input className='visual__code visual__code--input' placeholder={`type method here`}></input>
                <p className='visual__code'>(</p>
                <img className='visual__manta-ray' src={purpleRay} alt='manta ray' />
                <p className='visual__code'>);</p>
                <button className='visual__input-button--tablet'>Go!</button>
            </div>
            <button className='visual__input-button--mobile'>Go!</button>
        </section>
    );
}

export default Visual;