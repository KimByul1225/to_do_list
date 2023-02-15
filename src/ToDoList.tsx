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
type IFormData = {
    errors: {
            email: {
            message: string;
        };
    };
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
};
function ToDoList(){
    const { register, watch, handleSubmit, formState: {errors}} = useForm<IFormData>({
        defaultValues: {
            email: "@naver.com"
        }
    });
    //console.log(watch());
    const onValid = (data:any) => {
        console.log(data);
    }
   // console.log(errors);

    return (
            <form onSubmit={handleSubmit(onValid)}>
                
                <input 
                    {...register("email", { 
                        required: "Email은 필수입니다.",
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                            message: "naver이메일만 사용가능합니다."
                        }
                    })}
                    type="text" 
                    placeholder='Email'
                />
                <span>
                    {errors.email?.message}
                </span>
                <br />
                <input 
                    {...register("name", { 
                        required: "이름을 적어주세요", 
                        minLength: 5 
                    })}
                    type="text" 
                    placeholder='Name'
                />
                <span>
                    {errors.name?.message}
                </span>
                <br />
                <input 
                    {...register("password", { 
                        required: "비밀번호를 입력하세요",
                        minLength: {
                            value : 5,
                            message: "비밀번호가 너무 짧습니다."
                        }
                    })}
                    type="password" 
                    placeholder='Password'
                />
                <span>
                    {errors.password?.message}
                </span>
                <br />
                <input 
                    {...register("passwordConfirm", {
                        required: "비밀번호를 입력하세요",
                        minLength: {
                            value : 5,
                            message: "비밀번호가 너무 짧습니다."
                        }
                    })}
                    type="password" 
                    placeholder='PasswordConfirm'
                />
                <span>
                    {errors.passwordConfirm?.message}
                </span>
                <button>button</button>
            </form>
            
    );
}


export default ToDoList;