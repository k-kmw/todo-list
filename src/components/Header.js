import styles from './Header.module.css';

function Header({toDos, progress, completed, allBtn, progressBtn, completeBtn}) {
    return (
        <div className={styles.header}>  {/* header */}
            <h1 className={styles.title}>TO DO LIST</h1>
            <div className={styles.categoryContainer}>
                <div className={styles.categoryBtn} onClick={allBtn}>All {toDos.length}</div>
                <div className={styles.categoryBtn} onClick={progressBtn}>progress {progress.length}</div>
                <div className={styles.categoryBtn} onClick={completeBtn}>complete {completed.length}</div>
            </div>
        </div>
    )
}

export default Header;