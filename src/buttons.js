import React from 'react'

export default function Buttons({ click, fun }) {
    function onClickHandler() {
        console.log("Inside the child ele button")
        fun("Hey This is sam from the child component")
    }

    return (
        <div>
            <button onClick={onClickHandler}>{click}</button>

        </div>
    )
}
