import React from 'react'

const Child = ({ sendData }) => {
    
    return (
        <div>
            <button onClick={() => sendData("Hello Parent!")}>
                Send Data to Parent
            </button>
        </div>
    );
}

export {Child }

// export default Child;
