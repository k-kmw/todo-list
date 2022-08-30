import styles from './Input.module.css';

function Input({modifiedSubmit, onChange, addBtn, input}) {
    return (
        <div className={styles.container}>  {/* input box  */}
            <form className={styles.form} onSubmit = {modifiedSubmit}>
                <input className={styles.input} type="text" onChange={onChange} value={input} placeholder='pelase enter your todo'/>
                <button className={styles.btn} type="button" onClick = {addBtn}>+</button>
            </form>
        </div>
    )
}

export default Input;