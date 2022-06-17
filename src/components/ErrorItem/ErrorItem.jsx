import "./ErrorItem.css";

const ErrorItem = (props) =>{
    return(
        <div id={`${props.id}Error`} className="errorItem">{props.error}</div>
    )
}

export default ErrorItem;