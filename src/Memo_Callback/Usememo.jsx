import React, { useMemo, useState } from 'react';

const Usememo = () => {

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const style = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
    }

    const Calculation = (num) => {
        console.log("Loop");
        for (let i = 0; i < 1000000000; i++) { }
        return num;
    }

    useMemo(() => {
        return Calculation(number)
    }, [])

    //  Calculation(number)

    return (
        <>

            <div style={style}>
                <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
                <h2>{number}</h2>
                <button onClick={() => setDark(!dark)}>Toggle</button>
            </div>

        </>
    )
}

export default Usememo





