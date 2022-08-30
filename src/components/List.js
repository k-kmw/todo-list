import PropTypes from "prop-types";
import {useState, useEffect} from "react"

function List({toDos, deleteBtn, storageKey, setToDos, completed, progress, 
    status, onModify, onModified, onModifyChange, modify, modifiedSubmit}) {

    const isChecked = (e, id) => {
            e.target.parentElement.style.textDecoration = "line-through";
            setToDos(toDos.map(toDo => toDo.id === id ? {...toDo, done: !toDo.done} : toDo))
            localStorage.setItem(storageKey, JSON.stringify(toDos));
    }

    if(status === "ALL") {
        return (
            <div>
                <ul>
                    {
                    toDos.map(toDo=> 
                    <li key={toDo.id} style={toDo.done ? {textDecoration: "line-through"} : null}>
                    <form onSubmit={modifiedSubmit}>
                        <input type="checkbox"
                        onClick={(e) => isChecked(e, toDo.id)}
                        checked = {toDo.done ? true : false}
                        readOnly
                        />
                        {toDo.modify ? 
                            <input type="text" value={modify} onChange={onModifyChange} />
                            : <span>{toDo.text}</span>}
                        {!toDo.modify ? 
                            <button onClick={()=>onModify(toDo.id)}>수정</button>:
                            <button onClick={(e)=>onModified(e, toDo.id)}>done</button>
                        }
                        <button onClick={() => deleteBtn(toDo.id)}>❌</button>
                    </form>

                    </li>).reverse()
                    }
                </ul>
            </div>
        )
    }
    else if(status === "COMPLETE") {
        return (
            <ul>
                {
                completed.map(toDo=> 
                <li key={toDo.id} style={toDo.done ? {textDecoration: "line-through"} : null}>
                <input type="checkbox"
                onClick={(e) => isChecked(e, toDo.id)}
                checked = {toDo.done ? true : false}
                readOnly
                />
                {toDo.text}
                <button onClick={() => deleteBtn(toDo.id)}>❌</button>
                </li>).reverse()
                }
            </ul>
        )
    }

    else if(status == "PROGRESS") {
        return (
            <ul>
                {
                progress.map(toDo=> 
                <li key={toDo.id} style={toDo.done ? {textDecoration: "line-through"} : null}>
                <input type="checkbox"
                onClick={(e) => isChecked(e, toDo.id)}
                checked = {toDo.done ? true : false}
                readOnly
                />
                {toDo.text}
                <button onClick={() => deleteBtn(toDo.id)}>❌</button>
                </li>).reverse()
                }
            </ul>
        )
    }


}

List.propTypes = {
    toDos: PropTypes.array.isRequired,
    deleteBtn: PropTypes.func.isRequired
}

export default List;