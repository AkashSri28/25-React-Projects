import React, { useEffect, useState } from 'react';
import './styles.css'

function RandomColor() {
    const [randomColor, setRandomColor] = useState('#623456');
    const [colorType, setColorType] = useState('hex');

    useEffect(()=>{
      handleColorChange();
    }, [colorType])

    const handleColorTypeChange = () => {
      setColorType(prevType => prevType === 'hex'? 'rgb': 'hex');
    }

    const handleColorChange = () => {
      if (colorType === 'hex') {
        const range = '0123456789ABCDEF';
        let newColor = '#';
        for (let i = 0; i < 6; i++) {
          newColor += range[Math.floor(Math.random() * 16)];
        }
        setRandomColor(newColor);
      }
      else {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        setRandomColor(`rgb(${r}, ${g}, ${b})`);
      }
    }

  return (
    <div className='container' style={{backgroundColor: randomColor}}>
        <h1 className="title">{colorType === 'hex'?'Hex': 'RGB'}: {randomColor}</h1>
        <div>
          <button onClick={handleColorChange}>Change Color</button>
          <button onClick={handleColorTypeChange}>Change Color Type</button>      
        </div>
    </div>
  )
}

export default RandomColor