import React from 'react';
import './Visual.scss';
import LevelOne from '../Levels/LevelOne/LevelOne';
import LevelTwo from '../Levels/LevelTwo/LevelTwo';
import LevelThree from '../Levels/LevelThree/LevelThree';
import LevelFour from '../Levels/LevelFour/LevelFour';
import LevelFive from '../Levels/LevelFive/LevelFive';
import LevelSix from '../Levels/LevelSix/LevelSix';
import LevelSeven from '../Levels/LevelSeven/LevelSeven';

const Visual = ({ currentLevel, newLevel }) => {
    return (
        <section className='visual'>
            {
                currentLevel.id === 1 && <LevelOne currentLevel={currentLevel} newLevel={newLevel} />
            }
            {
                currentLevel.id === 2 && <LevelTwo currentLevel={currentLevel} newLevel={newLevel} />
            }
            {
                currentLevel.id === 3 && <LevelThree currentLevel={currentLevel} newLevel={newLevel} />
            }
            {
                currentLevel.id === 4 && <LevelFour currentLevel={currentLevel} newLevel={newLevel} />
            }
            {
                currentLevel.id === 5 && <LevelFive currentLevel={currentLevel} newLevel={newLevel} />
            }
            {
                currentLevel.id === 6 && <LevelSix currentLevel={currentLevel} newLevel={newLevel} />
            }
            {
                currentLevel.id === 7 && <LevelSeven currentLevel={currentLevel} newLevel={newLevel} />
            }
        </section>
    );
}

export default Visual;