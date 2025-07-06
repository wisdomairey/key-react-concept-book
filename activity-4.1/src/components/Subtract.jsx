import { useState } from 'react';

const Subtract = () => {
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');


  return (
      <div className='flex gap-5 my-6'>
          <input type="number" value={firstValue} onChange={(e) => setFirstValue(e.target.value)} placeholder='First number' className='border-2 bg-gray-200 hover:bg-amber-100' />
          <span>-</span>
          <input type="number" value={secondValue} onChange={(e) => setSecondValue(e.target.value)} placeholder='Second number' className='border-2 bg-gray-200 hover:bg-amber-100' />
          <p>= {Number(firstValue) - Number(secondValue)}</p>
      </div>
  )
}

export default Subtract