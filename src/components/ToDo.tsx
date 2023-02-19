import React from 'react';
import { useSetRecoilState } from 'recoil';
import { Categories, IToDo, toDoState } from '../atoms';

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
    const deleteTodo = () => {
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
            return [
            ...oldToDos.slice(0, targetIndex),
            ...oldToDos.slice(targetIndex + 1),
            ];
        });
    };

    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const {currentTarget:{name}} = e;
        //console.log(name);
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
            const oldToDo = oldToDos[targetIndex];
            const newToDo = {text, id, category: name as any};
            console.log("oldToDo", oldToDo);
            console.log("newToDo", newToDo);
            //console.log("targetIndex", targetIndex)
            return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex+1)];
        });

    }
    return (
        <li>
            <span>
                {text} 
            </span>
            {category !== Categories.DOING && <button name={Categories.DOING} onClick={onClick}>DOING</button>}
            {category !== Categories.TO_DO && <button name={Categories.TO_DO} onClick={onClick}>TO Do</button>}
            {category !== Categories.DONE && <button name={Categories.DONE} onClick={onClick}>DONE</button>}
            <button onClick={deleteTodo}>삭제</button>
        </li>
    );
}

export default ToDo;