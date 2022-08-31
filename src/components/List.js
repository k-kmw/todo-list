import PropTypes from "prop-types";
import styles from './List.module.css';

function List({toDos, deleteBtn, isChecked, completed, progress, 
    status, onModify, onModified, onModifyChange, modify, modifiedSubmit}) {

    if(status === "ALL") {
        return (
            <div className={styles.container}>
                <ul className={styles.list__container}>
                    {
                    toDos.map(toDo=> 
                    <li className={styles.item} key={toDo.id} style={toDo.done ? {textDecoration: "line-through"} : null}>
                    <form className={styles.item__form} onSubmit={modifiedSubmit}>
                        <div>
                            <input type="checkbox"
                            onClick={() => isChecked(toDo.id)}
                            checked = {toDo.done ? true : false}
                            readOnly
                            />
                            {toDo.modify ? 
                                <input id={`modify${toDo.id}`} type="text" value={modify} onChange={onModifyChange} />
                                : <span>{toDo.text}</span>}
                        </div>
                        <div>
                            {!toDo.modify ? 
                                <button className={styles.item__btn} onClick={()=>onModify(toDo.id, toDo.text)}>✍️</button>:
                                <button className={styles.item__btn} onClick={()=>onModified(toDo.id, toDo.text)}>done</button>
                            }
                            <button className={styles.item__btn} onClick={() => deleteBtn(toDo.id)}>❌</button>
                        </div>
                    </form>

                    </li>).reverse()
                    }
                </ul>
            </div>
        )
    }
    else if(status === "COMPLETE") {
        return (
            <div className={styles.container}>
                <ul className={styles.list__container}>
                    {
                    completed.map(toDo=> 
                    <li className={styles.item} key={toDo.id} style={toDo.done ? {textDecoration: "line-through"} : null}>
                    <form className={styles.item__form} onSubmit={modifiedSubmit}>
                        <div>
                            <input type="checkbox"
                            onClick={(e) => isChecked(e, toDo.id)}
                            checked = {toDo.done ? true : false}
                            readOnly
                            />
                            {toDo.modify ? 
                                <input id={`modify${toDo.id}`} type="text" value={modify} onChange={onModifyChange} />
                                : <span>{toDo.text}</span>}
                        </div>
                        <div>
                            {!toDo.modify ? 
                                <button className={styles.item__btn} onClick={()=>onModify(toDo.id, toDo.text)}>✍️</button>:
                                <button className={styles.item__btn} onClick={()=>onModified(toDo.id, toDo.text)}>done</button>
                            }
                            <button className={styles.item__btn} onClick={() => deleteBtn(toDo.id)}>❌</button>
                        </div>
                    </form>

                    </li>).reverse()
                    }
                </ul>
            </div>
        )
    }

    else if(status == "PROGRESS") {
        return (
            <div className={styles.container}>
                <ul className={styles.list__container}>
                    {
                    progress.map(toDo=> 
                    <li className={styles.item} key={toDo.id} style={toDo.done ? {textDecoration: "line-through"} : null}>
                    <form className={styles.item__form} onSubmit={modifiedSubmit}>
                        <div>
                            <input type="checkbox"
                            onClick={(e) => isChecked(e, toDo.id)}
                            checked = {toDo.done ? true : false}
                            readOnly
                            />
                            {toDo.modify ? 
                                <input id={`modify${toDo.id}`} type="text" value={modify} onChange={onModifyChange} />
                                : <span>{toDo.text}</span>}
                        </div>
                        <div>
                            {!toDo.modify ? 
                                <button className={styles.item__btn} onClick={()=>onModify(toDo.id, toDo.text)}>✍️</button>:
                                <button className={styles.item__btn} onClick={()=>onModified(toDo.id, toDo.text)}>done</button>
                            }
                            <button className={styles.item__btn} onClick={() => deleteBtn(toDo.id)}>❌</button>
                        </div>
                    </form>

                    </li>).reverse()
                    }
                </ul>
            </div>
        )
    }


}

List.propTypes = {
    toDos: PropTypes.array.isRequired,
    deleteBtn: PropTypes.func.isRequired
}

export default List;