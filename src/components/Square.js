import React from 'react'

const Square = () => {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default Square
