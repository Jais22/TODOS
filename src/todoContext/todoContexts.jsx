import { useState,useEffect, createContext, useContext } from "react";
import { v4 as uuidv4 } from 'uuid'

const todoContexts=createContext()
const useTodoContext=()=>useContext(todoContexts)

//localStorage

const getLocalItem = () => {
    const storeItem = localStorage.getItem("list");
    return storeItem ? JSON.parse(localStorage.getItem("list")) : [];
  };
const TodoProvider=({children})=>{

    const [activity, setActivity] = useState("");
    const [task, setTask] = useState(getLocalItem())
    const [update, setUpdate] = useState(true)
    const [edit, setEdit] = useState(null);

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(task));
      }, [task]);

    const handleUpdate = () => {
        if (activity === "") {
            alert("please fill the input box");
        } else if (!update) {
            setTask(
                task.map((newElem) => {
                    if (newElem.id === edit) {
                        return { ...newElem, title: activity };
                    }
                    return newElem;
                })
            );
            setUpdate(true);
            setActivity("");
            setEdit(null);
        } else {
            const allActivtity = { id: uuidv4(), title: activity, complete: false };

            setTask([...task, allActivtity]);
            setActivity("");
        }
    };
    const handleRemove = (id) => {
        const isConfirm=window.confirm("are you sure to remove it")
        if(isConfirm){
          const filterItem =
          task.filter((item) => 
            id !== item.id )
        setTask(filterItem)
      }
    
        };
        
      const handleEdit = (id) => {
        const findItem = task.find((elem) => (
          id === elem.id
        ))
        setActivity(findItem.title)
        setUpdate(false)
        setEdit(id);
      }
      const handleAllRemove = () => {
        setTask([])
      }
      const handleComplete = (id) => {
        setTask(task.map((compItem) => {
          if (compItem.id === id) {
            return { ...compItem, complete: !compItem.complete };
          }
    
          return compItem;
    
        })
        );
      };


const allValue={activity, setActivity,task,
    setTask,update,setUpdate,edit,
    setEdit,handleUpdate,handleAllRemove,
handleComplete,handleEdit,handleRemove}
    return(
        <todoContexts.Provider value={allValue}>
            {children}
        </todoContexts.Provider>
    )

}

export{todoContexts,TodoProvider,useTodoContext}