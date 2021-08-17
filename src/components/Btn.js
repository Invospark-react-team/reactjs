import React from 'react'

const Btn = () => {
    let counter = 0;
    
    const onClick = () => {
        counter ++;
        console.log(counter)
    }

    return (
        <div>
            <button
                onClick={onClick}>
                Click me</button>
        </div>
    )
}

export default Btn
