import React, { useState } from 'react';
import './Accordian.css';

function Accordian() {
    const accordionData = [
        {
          id: 1,
          heading: "What is React?",
          content: "React is a JavaScript library for building user interfaces. It was developed by Facebook and is widely used for creating single-page applications."
        },
        {
          id: 2,
          heading: "What are hooks in React?",
          content: "Hooks are functions that let you use state and other React features without writing a class. Common hooks include useState, useEffect, and useContext."
        },
        {
          id: 3,
          heading: "What is JSX?",
          content: "JSX stands for JavaScript XML. It allows you to write HTML elements in JavaScript and place them in the DOM without using createElement() or appendChild()."
        },
        {
          id: 4,
          heading: "What is the virtual DOM?",
          content: "The virtual DOM is a lightweight JavaScript representation of the real DOM. React uses it to optimize rendering by comparing changes and updating the real DOM efficiently."
        },
        {
          id: 5,
          heading: "How does useState work?",
          content: "The useState hook lets you add state to functional components. It returns an array with the current state and a function to update it."
        }
      ];
      const [active, setActive] = useState(null);
      const [enableMultiselect, setEnableMultiselect] = useState(false);
      const [activeIds, setActiveIds] = useState([]);

      const handleSingleSelect = (id) => {
        setActive(active === id ? null : id);
      }

      const handleMultiSelect = (id) => {
        setActiveIds(prev => {
            if (prev.includes(id)) {
                return prev.filter(item => item !== id)
            }
            else {
                return [...prev, id]
            }
        })
      }

  return (
    <div className="accordion-container">
        <h1 className="accordion-title">Accordian</h1>
        <button 
            className="toggle-button" 
            onClick={()=>{
                setEnableMultiselect(!enableMultiselect);
                setActive(null); // Reset active state when toggling multiselect
                setActiveIds([]); // Clear selected IDs when toggling multiselect
            }}
        >
            {enableMultiselect?'Disable Multi Select': 'Enable Multi Select'}
        </button>
        {
            accordionData.map((item)=>(
                <div key={item.id} className="accordion-item">
                    <div 
                        className="accordion-heading"
                        onClick={enableMultiselect?()=>handleMultiSelect(item.id):() => handleSingleSelect(item.id)}
                    >
                        {item.heading}
                    </div>
                    {(active === item.id || activeIds.includes(item.id)) && <div className="accordion-content">{item.content}</div>}
                </div>
            ))
        }
    </div>
  )
}

export default Accordian