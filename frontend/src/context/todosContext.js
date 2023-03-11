import axios from "axios";
import { createContext, useReducer } from "react";

export const todosContext = createContext()


const INITIAL_STATE = {
    todos: [],
  };

  export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "GET_COMMENTATY":
        return {
          ...state,
          todos: action.payload
        };
        default:
      return state;
    }
  
    }

    const TodosContextProvider = ({ children }) => {

        const [state, dispatch] = useReducer(reducer, INITIAL_STATE); 
    
        const getTodos = async () => {
            const { data} = await axios (
              `http://localhost:8000/todos` );
              console.log(data)
            dispatch({
              type: "GET_COMMENTATY",
              payload: {
                data: data, 
               
              },
            });
          };

          
      return (
        <todosContext.Provider
        value={{
        todos: state.todos, 
        getTodos
        }}
        >
            {children}
        </todosContext.Provider>
      )
    }

    export default TodosContextProvider