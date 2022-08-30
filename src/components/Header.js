import styles from './Header.module.css';

function Header({toDos, progress, completed, allBtn, progressBtn, completeBtn}) {
    return (
        <div className={styles.header}>  {/* header */}
            <h1>TO DO LIST</h1>
            <div>
                <div onClick={allBtn}>All {toDos.length}</div>
                <div onClick={progressBtn}>progress {progress.length}</div>
                <div onClick={completeBtn}>complete {completed.length}</div>
            </div>
        </div>
    )
}

export default Header;