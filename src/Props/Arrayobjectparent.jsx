import React from 'react'
import Arrayobjectchild from './Arrayobjectchild';

const Arrayobjectparent = () => {
    const users = [
        { name: 'Mousom', age: '23', city: 'UPA' },
        { name: 'Sourav', age: '24', city: 'Makla' }
    ];

    return (

        <>
            <h1>I am Array object parent</h1>
            <Arrayobjectchild users={users}/>
        </>
    )
}

export default Arrayobjectparent
