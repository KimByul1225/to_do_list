import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

// function ToDoList() {
//     const [toDo, setToDo] = useState("");
//     const onChange = (event:React.FormEvent<HTMLInputElement>) => {
//         const {currentTarget : {value}} = event;
//         setToDo(value);
//     }
//     const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         console.log(toDo)
//     }
//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input 
//                     type="text" 
//                     placeholder='To do'
//                     value={toDo}
//                     onChange={onChange}
//                 />
//                 <button>Add</button>
//             </form>
//         </div>
//     );
// }

function ToDoList(){
    const { register, watch } = useForm();
    console.log(watch());
    return (
            <form>
                <input 
                    {...register("email")}
                    type="text" 
                    placeholder='Email'
                />
                <br />
                <input 
                    {...register("name")}
                    type="text" 
                    placeholder='Name'
                />
                <br />
                <input 
                    {...register("password")}
                    type="password" 
                    placeholder='Password'
                />
                <br />
                <input 
                    {...register("passwordConfirm")}
                    type="password" 
                    placeholder='PasswordConfirm'
                />
                <button>button</button>
            </form>
    );
}


export default ToDoList;