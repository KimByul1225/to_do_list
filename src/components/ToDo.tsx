import React from 'react';
import { useSetRecoilState } from 'recoil';
import { IToDo, toDoState } from '../atoms';

// [
//     {
//         "text": "1",
//         "id": 1676728866655,
//         "category": "TO_DO"
//     },
//     {
//         "text": "2",
//         "id": 1676728867956,
//         "category": "TO_DO"
//     },
//     {
//         "text": "3",
//         "id": 1676728868985,
//         "category": "TO_DO"
//     },
//     {
//         "text": "4",
//         "id": 1676728869960,
//         "category": "TO_DO"
//     },
//     {
//         "text": "5",
//         "id": 1676728870910,
//         "category": "TO_DO"
//     }
// ]

function ToDo({text, category, id}: IToDo) {
    const setToDos = useSetRecoilState(toDoState);

    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const {currentTarget:{name}} = e;
        //console.log(name);

        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
            const oldToDo = oldToDos[targetIndex];
            const newToDo = {text, id, category: name};
            console.log("oldToDo", oldToDo);
            console.log("newToDo", newToDo);
            //console.log("targetIndex", targetIndex)
            return oldToDos;
        })

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