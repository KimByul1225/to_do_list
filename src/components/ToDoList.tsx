import { useRecoilValue } from 'recoil';
import { toDoSelector, toDoState } from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';





function ToDoList() {
    // const toDos = useRecoilValue(toDoState);

    const [toDo, doing, done] = useRecoilValue(toDoSelector);

    // console.log(toDos)
    // console.log("selectorOutput", selectorOutput)
    return (
        <div>
            <h1>To Do List</h1>
            <hr />
            <CreateToDo/>
            <h2>To Do</h2>
            <ul>
                {   
                    toDo.map((toDo) => <ToDo key={toDo.id} {...toDo} />)
                    // toDos.map((toDo) => <ToDo id={toDo.id} text={toDo.text} category={toDo.category}/>)
                }
            </ul>
            <hr />
            <h2>Doing</h2>
            <ul>
                {   
                    doing.map((toDo) => <ToDo key={toDo.id} {...toDo} />)
                }
            </ul>
            <hr />
            <h2>Done</h2>
            <ul>
                {   
                    done.map((toDo) => <ToDo key={toDo.id} {...toDo} />)
                }
            </ul>
            <hr />
        </div>
    );
}



export default ToDoList;