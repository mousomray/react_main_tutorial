import React from 'react'

const Stringchild = (props) => {

    //  If you do using destructuring
    //const { name, age, city } = props;

    return (
        <>
            {/*If you not use destructuring*/}
            <h4>I am String Child</h4>
            <h4>Name:{props.name}</h4>
            <h4>Age:{props.age}</h4>
            <h4>City:{props.city}</h4>
        </>
    )
}

export default Stringchild
