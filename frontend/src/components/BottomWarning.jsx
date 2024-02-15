import {Link} from "react-router-dom"
export const BottomWarning=({label,buttonText,to})=>{
    return <div>
        <div>
            {label}
        </div>
        <Link to={to}>
            {buttonText}
        </Link>
    </div>
}
