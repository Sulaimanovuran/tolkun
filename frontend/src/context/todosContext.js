import axios from "axios";
import { createContext, useReducer } from "react";

export const todosContext = createContext()


const INITIAL_STATE = {
    todos: [],
    curentProduct: {}
  };

  export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "GET_COMMENTATY":
        return {
          ...state,
          todos: action.payload
        };

        case "ADD_COMMENTATY" :
          return {
           ...state ,  curentProduct : action.payload
          }
        default:
      return state;
    }
  
    }

    const TodosContextProvider = ({ children }) => {

        const [state, dispatch] = useReducer(reducer, INITIAL_STATE); 
    
        const getTodos = async () => {
            const { data} = await axios (
              `http://localhost:8000/todos/` );
              console.log(data.id)
            dispatch({
              type: "GET_COMMENTATY",
              payload: {
                data: data, 
               
              },
            });
          };

          const addTodos = async (id) => {
            const { data } = await axios (
              `http://localhost:8000/todos/${id}` );
            dispatch({
              type: "ADD_COMMENTATY",
              payload: {
                data: data, 
              },
            });
          };

          
      return (
        <todosContext.Provider
        value={{
        todos: state.todos, 
        curentProduct: state.curentProduct,
        getTodos,
        addTodos
        }}
        >
            {children}
        </todosContext.Provider>
      )
    }

    export default TodosContextProvider