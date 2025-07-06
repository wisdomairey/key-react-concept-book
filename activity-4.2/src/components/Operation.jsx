import { useState } from "react";

const Operation = () => {
    const [firstValue, setFirstValue] = useState('');
    const [secondValue, setSecondValue] = useState('');
    const [operation, setOperation] = useState('add');

    const calculateResult = () => {
        const num1 = Number(firstValue);
        const num2 = Number(secondValue);

        switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return num2 !== 0 ? num1 / num2 : 'Error (÷0)';
        default:
            return '';
        }
    };


    return (
        <div className='flex gap-5 my-6'>
            <input type="number" value={firstValue} onChange={(e) => setFirstValue(e.target.value)} placeholder='First number' className='border-2 bg-gray-200 hover:bg-amber-100' />
            <select name="" id="" className='border-2 bg-gray-200 hover:bg-amber-100' value={operation}
        onChange={(e) => setOperation(e.target.value)}>
                <option value="add">+</option>
                <option value="subtract">-</option>
                <option value="multiply">*</option>
                <option value="divide">/</option>
            </select>
            <input type="number" value={secondValue} onChange={(e) => setSecondValue(e.target.value)} placeholder='Second number' className='border-2 bg-gray-200 hover:bg-amber-100' />
            <p>= {calculateResult()}</p>
        </div>
    )
}

export default Operation