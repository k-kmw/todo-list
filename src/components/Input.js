
function Input({modifiedSubmit, onChange, addBtn, input}) {
    return (
        <div>  {/* input box  */}
            <form onSubmit = {modifiedSubmit}>
                <input type="text" onChange={onChange} value={input} placeholder='pelase enter your todo'/>
                <button type="button" onClick = {addBtn}>+</button>
            </form>
        </div>
    )
}

export default Input;