import { useState } from 'react';

const App = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes('@')) {
      setError('Invalid email address entered!');
    } else {
      setError('');
      alert(`Email submitted: ${email}`);
    }

  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    // if (e.target.value.includes('@')) {
    //   setError('');
    // }
  }

  return (
    <form className="flex flex-col gap-4 p-4" onSubmit={handleSubmit} >
      <label htmlFor="email">Your email:</label>
      <input id="email" value={email} name="email" className="border-2 w-[200px]" placeholder="example@gmail.com" onChange={handleEmailChange} />
      <button type="submit" className="border-2 bg-amber-300 text-blue-600 font-bold w-min px-4 py-1 hover:bg-amber-700 focus:bg-amber-100">Submit</button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  )
}

export default App