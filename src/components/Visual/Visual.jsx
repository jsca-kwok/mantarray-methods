import React from 'react';
import './Visual.scss';
import redRay from '../../assets/images/red-ray.png';
import orangeRay from '../../assets/images/orange-ray.png';
import yellowRay from '../../assets/images/yellow-ray.png';
import greenRay from '../../assets/images/green-ray.png';
import blueRay from '../../assets/images/blue-ray.png';

const Visual = () => {
    const mantaImgs = [redRay, orangeRay, yellowRay, greenRay, blueRay];

    return (
        <section className='visual'>
            {/* original array to use methods on */}
            <code> 
                const mantArray = [
                {
                    mantaImgs.map((img, index) => {
                        return index < mantaImgs.length - 1 ?
                        <><img className='visual__manta-ray' src={img} alt='manta ray' /><span>,</span></>
                        : <><img className='visual__manta-ray' src={img} alt='manta ray' /></>
                    })
                }
                ];
            </code>
        </section>
    );
}

export default Visual;