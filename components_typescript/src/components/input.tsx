import React, { useState, ChangeEvent } from 'react';
type inputprop = {
    value: string;
    change: (value:string) => void;
}

function SInput(props: inputprop) {
    const Change = (e: ChangeEvent<HTMLInputElement>) => {
        props.change(e.target.value)
    }
    return(
        <input type="text" value={props.value} onChange={Change} />    
    )
}
export default SInput;