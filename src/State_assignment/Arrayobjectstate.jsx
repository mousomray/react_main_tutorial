import React from "react";
import { useState } from "react";

const Arrayobjectstate = () => {
    const mydata = [
        { name: 'Mousom', age: 23, city: 'Uttarpara', hobbies: 'Gym' },
        { name: 'Sudip', age: 52, city: 'Uttarpara', hobbies: 'Music' },
        { name: 'Dipak', age: 78, city: 'Uttarpara', hobbies: 'Football' }
    ];

    const [piller, changable] = useState(mydata);

    const clear = () => {
        changable([]);
    };

    const undo = () =>{
        changable(mydata);
    }

    return (
        <>
            {piller.map((value, index) => (
                <div key={index}>
                    <h3>
                        My name is {value.name}. My age is {value.age}. I live in {value.city} and my hobbies are {value.hobbies}.
                    </h3>
                </div>
            ))}
            <button className='btn' style={{backgroundColor:'blue',color:'white'}} onClick={clear}>Clear</button>
            <button className='btn' style={{backgroundColor:'green',color:'white'}} onClick={undo}>Undo</button>
        </>
    );
};

export default Arrayobjectstate;
