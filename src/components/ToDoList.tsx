import { useForm } from 'react-hook-form';
import { atom, useRecoilState } from 'recoil';

interface IForm {
    toDo: string;
}

interface IToDo{
    text: string;
    category: "TO_DO" | "DOING" | "DONE";
    id: number;
}

const toDoState =  atom<IToDo[]>({
    key: "toDo",
    default: [],
})



function ToDoList() {
    const [toDos, setToDos] = useRecoilState(toDoState);
    // const value = useRecoilValue(toDoState);
    // const modFn = useSetRecoilState(toDoState);
    const {
        register, handleSubmit, setValue
    } = useForm<IForm>();

    const handleValid = ({toDo}:IForm) => {
        console.log("add to do", toDo);
        setToDos(oldToDos => [ ...oldToDos, {text: toDo, id:Date.now(), category: "TO_DO"}]);
        setValue("toDo", "");
    };
    console.log(toDos)
    return (
        <div>
            <h1>To Dos</h1>
            <hr />
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
            <ul>
                {
                    toDos.map((toDo) => <li key={toDo.id}>{toDo.text}</li>)
                }
            </ul>
        </div>
    );
}



export default ToDoList;