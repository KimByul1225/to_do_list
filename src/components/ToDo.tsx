import React from 'react';
import { useSetRecoilState } from 'recoil';
import { IToDo, toDoState } from '../atoms';

function ToDo({text, category, id}: IToDo) {
    const setToDos = useSetRecoilState(toDoState)
    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const {currentTarget:{name}} = e;
        console.log(name)
    }
    return (
        <li>
            <span>
                {text} 
            </span>
            {category !== "DOING" && <button name="DOING"  onClick={onClick}>DOING</button>}
            {category !== "TO_DO" && <button name="TO_DO" onClick={onClick}>TO Do</button>}
            {category !== "DONE" && <button name="DONE" onClick={onClick}>DONE</button>}
        </li>
    );
}

export default ToDo;