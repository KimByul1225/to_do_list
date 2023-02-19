import { type } from "os";
import { atom, selector } from "recoil";


type categories = "TO_DO" | "DOING" | "DONE";


export interface IToDo{
    text: string;
    category: categories;
    id: number;
}

export const categoryState = atom<categories>({
    key: "category",
    default: "TO_DO",
})

export const toDoState =  atom<IToDo[]>({
    key: "toDo",
    default: [],
});

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({get}) => {
        const toDos = get(toDoState);
        const category = get(categoryState);
        // if(category === "TO_DO") return toDos.filter(toDo => toDo.category === "TO_DO");
        // if(category === "DOING") return toDos.filter(toDo => toDo.category === "DOING");
        // if(category === "DONE") return toDos.filter(toDo => toDo.category === "DONE");
        return toDos.filter(toDo => toDo.category === category);
    }
});
