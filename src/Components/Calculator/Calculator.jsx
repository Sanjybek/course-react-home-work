import { useState } from "react"

function Calculator() {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [result, setResult] = useState('');


    
        const сalculator = (operator) => {
            if (operator === '+') {
                setResult(Number(input1) + Number(input2));
            } else if (operator === '-') {
                setResult(Number(input1) - Number(input2));
            } else if (operator === '/') {
                setResult(Number(input1) / Number(input2));
            } else if (operator === '*') {
                setResult(Number(input1) * Number(input2));
            }
        };

    return (
        <div>
            <input type="text" onChange={(e) => setInput1(e.target.value)} />
            <input type="text" onChange={(e) => setInput2(e.target.value)} />
            <button onClick={() => сalculator('+')}>+</button>
            <button onClick={() => сalculator('-')}>-</button>
            <button onClick={() => сalculator('/')}>/</button>
            <button onClick={() => сalculator('*')}>*</button>
            <h3>{result}</h3>
        </div>
    );
}

export default Calculator;