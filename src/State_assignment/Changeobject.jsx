import React from 'react'
import { useState } from 'react'

const Changeobject = () => {

    const mydata = {
        name: 'Mousom',
        age: 23,
        city: 'Uttarpara',
        hobbies: 'Gaming',
        phone: 9903419235,
        email: 'mousomray02@gmail.com'
    };

    const [piller, changable] = useState(mydata);

    const change = () => {
        if (
            piller.name === mydata.name &&
            piller.age === mydata.age &&
            piller.hobbies === mydata.hobbies &&
            piller.phone === mydata.phone &&
            piller.email === mydata.email
        ) {
            changable({
                ...piller,
                name: 'Sudip',
                age: 52,
                hobbies: 'Music',
                phone: 9007315925,
                email: 'sudipray37310@gmail.com'
            });
        } else {
            changable(mydata);
        }
    };
    


    return (
        <>
            <h4>My name is {piller.name}</h4>
            <h4>My age is {piller.age}</h4>
            <h4>My hobbies are {piller.hobbies}</h4>
            <h5>Contact with me phone: {piller.phone} and email {piller.email}</h5>
            <br />
            <button className='btn' style={{ backgroundColor: 'green', color: 'white' }} onClick={change}>Change</button>
        </>
    )
}

export default Changeobject
