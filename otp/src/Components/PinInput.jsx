import React from 'react';
import { forwardRef } from 'react';
const PinInput = forwardRef(({ onChangeHandler, onBackspace }, ref) => {
    const handleKeyUp = (e) => {
        if (e.keyCode === 8 && !e.target.value) {
           
            onBackspace(e);
          }
           else {
            onChangeHandler(e);
          }
        };
    return (
        <div>
             <input
                ref={ref}
                maxLength={1}
                onKeyUp={handleKeyUp}
                
                />
        </div>
    );
});

export default PinInput;