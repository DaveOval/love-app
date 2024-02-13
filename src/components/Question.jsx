import React, { useState } from 'react';

const Question = ({ handleAnswers }) => {

    const [isNoButtonDisabled, setIsNoButtonDisabled] = useState(false);

    const [ x, setX] = useState(0);
    const [ y, setY] = useState(0);

    const [countHover, setCountHover] = useState(0);

    const handleNoButtonClick = () => {
      // Deshabilita el botón "No" y realiza la animación
      setIsNoButtonDisabled(true);
    };

    const handleNoButtonHover = () => {
        // Realiza la animación de traslación aleatoria solo en el hover
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const randomX = Math.random() * viewportWidth - viewportWidth / 2;
        const randomY = Math.random()  * viewportHeight - viewportHeight / 2; 
        setX(randomX);
        setY(randomY);
        setCountHover(countHover + 1);
      };

    return (
        <div className="steps">
            <p>
                Hey Tris, me encantaría saber si estarías dispuesta a ser mi Valentine este año. 
            </p>
            <p>
                ¿Te gustaría compartir este día especial conmigo y hacerlo inolvidable juntos?
            </p>
            <div className='botones-question'>
                <button value={"yes"} onClick={handleAnswers} className='button_love' >
                    Si
                </button>
                <button 
                    value={"no"} 
                    onClick={handleNoButtonClick}
                    onMouseEnter={handleNoButtonHover}
                    disabled={isNoButtonDisabled}
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                >
                    No
                </button>
            </div>
            {
                countHover >= 5 ? (
                <div>
                    <h1>Entonces no? 😔</h1>
                    <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTdva2tmcGk5eWJiOXJoYmMzbWoxeXRiaHV4d3c0Zjl2bDkyeGQxbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3OhXBaoR1tVPW/giphy.gif" alt="Sad cat" />
                </div> ) : null
                
            }
            
        </div>
    )
}

export default Question;