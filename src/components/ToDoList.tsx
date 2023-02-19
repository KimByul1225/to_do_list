import { useRecoilState, useRecoilValue } from 'recoil';
import { categoryState, toDoSelector, toDoState } from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';





function ToDoList() {
    // const toDos = useRecoilValue(toDoState);

    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState);
    const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
        console.log(e.currentTarget.value);
        setCategory(e.currentTarget.value);
    }

    // console.log(toDos)
    // console.log("selectorOutput", selectorOutput)
    return (
        <div>
            <h1>To Do List</h1>
            <hr />
            <select
                onInput={onInput}
                value={category}
            >
                <option value="TO_DO">ToDo</option>
                <option value="DOING">Doing</option>
                <option value="DONE">Done</option>
            </select>
            <CreateToDo/>
            {
                toDos?.map((toDo)=> {
                    return(
                        <ToDo key={toDo.id} {...toDo} />
                    )
                })
            }


            <h2>To Do</h2>
            {/* <ul>
                {   
                    toDo.map((toDo) => <ToDo key={toDo.id} {...toDo} />)
                    // toDos.map((toDo) => <ToDo id={toDo.id} text={toDo.text} category={toDo.category}/>)
                }
            </ul> */}
            
        </div>
    );
}



export default ToDoList;