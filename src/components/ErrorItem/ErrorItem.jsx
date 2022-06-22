import "./ErrorItem.css";

const ErrorItem = (props) =>{

    const showError = (field) => {
        if(props.errors != undefined && props.errors.length > 0 )
        {

            const element = props.errors.find(item =>item.property === field.replace("Error",""));
            if(!element) {
                return props.error;
            }
            return Object.values(element.constraints).join(", ")
        }
        return props.error
      }
    
    return(
        <div id={`${props.id}Error`} className="errorItem">{showError(props.id)}</div>
    )
}

export default ErrorItem;