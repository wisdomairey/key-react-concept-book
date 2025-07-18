import { useRef } from "react";

const Form = () => {
    const nameRef = useRef(null);
    const programRef = useRef(null);

    let handleSubmitForm = (event) => {
        event.preventDefault();
        
        const enteredName = nameRef.current.value;
        const selectedProgram = programRef.current.value;

        console.log('Entered Name: ' + enteredName);
        console.log('Selected Program: ' + selectedProgram);
    }

    return (
        <form onSubmit={handleSubmitForm} className="m-10 p-4 bg-gray-100 rounded shadow-md border-fuchsia-500 border-2">
        <div className="form-control">
            <label htmlFor="name" className="block">Your name</label>
            <input ref={nameRef} type="text" id="name" className="border-2 border-fuchsia-500 my-1" />
        </div>
        <div className="form-control">
            <label  htmlFor="program" className="block">Choose your program</label>
            <select ref={programRef} id="program" className="block border-2 border-fuchsia-500 my-2">
            <option value="basics">The Basics</option>
            <option value="advanced">Advanced Concepts</option>
            <option value="mastery">Mastery</option>
            </select>
        </div>
        <button className="bg-fuchsia-700 px-2 py-1 hover:bg-fuchsia-600 ">Submit</button>
        </form>
    );
}

export default Form