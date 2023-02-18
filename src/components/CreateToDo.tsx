import React from 'react';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { toDoState } from '../atoms';


interface IForm {
    toDo: string;
}


function CreateToDo() {
    const setToDos = useSetRecoilState(toDoState)

    const {register, handleSubmit, setValue} = useForm<IForm>();
    

    const handleValid = ({toDo}:IForm) => {
        console.log("add to do", toDo);
        setToDos(oldToDos => [ ...oldToDos, {text: toDo, id:Date.now(), category: "TO_DO"}]);
        setValue("toDo", "");
    };

    return (
        <form onSubmit={handleSubmit(handleValid)}>
            <input 
                {...register("toDo", {
                    required: "To Do를 작성해주세요.",

                })}
                type="text" 
                placeholder="작성해주세요."
            />
            <button>
                Add
            </button>
        </form>
    );
}

export default CreateToDo;