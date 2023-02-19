import { atom, selector } from "recoil";

export enum Categories{
    "TO_DO" = "TO_DO",
    "DOING" = "DOING",
    "DONE" = "DONE",
}
// type categories = "TO_DO" | "DOING" | "DONE";


export interface IToDo{
    text: string;
    category: Categories;
    id: number;
}

export const categoryState = atom<Categories>({
    key: "category",
    default: Categories.TO_DO,
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
