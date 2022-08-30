import styles from './style.module.css';
import {useState, useEffect} from "react"
import List from './components/List'
import Header from './components/Header'
import Input from './components/Input'

const STORAGE_KEY = "TODOS"
function App() {
    const [toDos, setToDos] = useState([]);
    const [input, setInput] = useState("");
    const [completed, setCompleted] = useState([]);
    const [progress, setProgress] = useState([]);
    const [status, setStatus] = useState("ALL");
    const [modify, setModify] = useState("");

    useEffect(()=>{
      setToDos(JSON.parse(localStorage.getItem(STORAGE_KEY)))
    }, [])

    useEffect(()=> {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(toDos));
      setCompleted(toDos.filter((toDo)=>toDo.done))
      setProgress(toDos.filter((toDo)=>!toDo.done)) 
    }, [toDos])

    const onChange = (e) => {
      setInput(e.target.value);
    }

    const addBtn = () => {
      const toDoObj = {
        id: Date.now(),
        text: input,
        done: false,
        modify: false,
      }
      setToDos((toDos)=>[toDoObj, ...toDos]);
      setInput("")
      setModify(input);
    }


    const deleteBtn = (id) => {
      setToDos((toDos) => toDos.filter((toDo) => toDo.id !== id))
    }

    const modifiedSubmit = (e) => {
      e.preventDefault();
      // console.log(e)
      if(e.target.childElementCount >= 4) 
      {
        return;
      }
      addBtn();
      
    }

    const allBtn = () => {
      setStatus('ALL');
    }

    const completeBtn = () => {
      setCompleted(toDos.filter((toDo)=>toDo.done))
      setStatus('COMPLETE')
    }

    const progressBtn = () => {
      setProgress(toDos.filter((toDo) => !toDo.done));
      setStatus('PROGRESS')
    }
    
    const onModify = (id) => {
      setToDos((toDos) => 
      toDos.map((toDo) => toDo.id === id ? ({...toDo, modify: !toDo.modify}) : toDo))
    }
    
    const onModified = (e, id) => {
      const modifyText = e.target.previousSibling.value
      setToDos((toDos) => 
      toDos.map((toDo) => toDo.id === id ? ({...toDo, modify: !toDo.modify}) : toDo))
      setToDos((toDos) => toDos.map((toDo) => toDo.id === id ? {...toDo, text: modifyText} : toDo))
    }

    const onModifyChange = (e, id) => {
      setModify(e.target.value)
    }

    return (
        <div className={styles.container}>
          <Header toDos={toDos}
          completed={completed}
          progress={progress}
          allBtn={allBtn}
          completeBtn={completeBtn}
          progressBtn={progressBtn}
          />

          <Input modifiedSubmit={modifiedSubmit}
          onChange={onChange}
          addBtn={addBtn}
          input={input}
          />

          <List toDos={toDos}
          deleteBtn={deleteBtn}
          storageKey={STORAGE_KEY}
          setToDos={setToDos}
          completed={completed}
          status={status}
          progress={progress}
          onModify={onModify}
          onModified={onModified}
          onModifyChange={onModifyChange}
          modify={modify}
          modifiedSubmit={modifiedSubmit}
          />
        </div>
    );
}

export default App;
