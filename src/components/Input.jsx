// import React, { useState } from 'react';

// const Input = ({onSubmit}) => {
//     const [input,setInput] = useState('');
//     const handleSubmit = ()=>{
//         if(!input)return;
//         onSubmit(input)
//         setInput('');
//     };
//     return (
//         <div>
//            <input type="text" className='input'value={input} onChange={e=>setInput(e.target.value)} /> 
//            <button className='btn' onClick={handleSubmit

//            }>Add</button>
//         </div>
//     );
// };

// export default Input;











import React, { useState } from 'react';

const Input = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('To-Do');

    const handleSubmit = () => {
        // Validation
        if (!title || title.length > 50) return;
        if (description.length > 200) return;

        onSubmit({ title, description, category }); // Pass all values to onSubmit
        setTitle('');
        setDescription('');
    };

    return (
        <div>
            <input
                type="text"
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength="50"
                placeholder="Task Title (Max 50 characters)"
            />
            <textarea
                className="textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                maxLength="200"
                placeholder="Task Description (Optional, Max 200 characters)"
            />
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="To-Do">To-Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
            </select>
            <button className="btn" onClick={handleSubmit}>Add Task</button>
        </div>
    );
};

export default Input;



