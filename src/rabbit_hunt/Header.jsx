import React from 'react';

export default  ({tries, max, won, lost, undo}) => (
    <div>
        <div>Find the rabbit!</div>
        <div>Try {tries + 1} of {max} <input type='button' value='undo' onClick={undo} /></div>
        {won ? <div> You WON!</div>: null}
        {lost ?<div> You LOST! </div> : null}
    </div>
);
