export const InputBox=({label,placeholder,onChange})=>{
    return <div>
        <div>
            {label}
        </div>
        <input onChange={onChange} placeholder={placeholder}/>
    </div>
}