import { createContext } from "react";

export const TaskContext = createContext();

export function ContextProvider(props) {
    <TaskContext.Provider>
        {props.children}
    </TaskContext.Provider>
}
