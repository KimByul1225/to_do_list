import React from 'react';
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
    const { register, watch, handleSubmit, formState } = useForm();
    //console.log(watch());
    const onValid = (data:any) => {
        console.log(data);
    }
    console.log(formState.errors);

    return (
            <form onSubmit={handleSubmit(onValid)}>
                <input 
                    {...register("email", { required:true })}
                    type="text" 
                    placeholder='Email'
                />
                <br />
                <input 
                    {...register("name", { 
                        required:true, 
                        minLength: 10 
                    })}
                    type="text" 
                    placeholder='Name'
                />
                <br />
                <input 
                    {...register("password", { 
                        required:true,
                        minLength: {
                            value : 5,
                            message: "비밀번호가 너무 짧습니다."
                        }
                    })}
                    type="password" 
                    placeholder='Password'
                />
                <br />
                <input 
                    {...register("passwordConfirm", {
                        required: "비밀번호를 입력하세요",
                        minLength: 5 
                    })}
                    type="password" 
                    placeholder='PasswordConfirm'
                />
                <button>button</button>
            </form>
    );
}


export default ToDoList;