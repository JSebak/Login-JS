import { useNavigate } from "react-router"

const Succes = (props) => {

    const navigate = useNavigate();

    const back = () => {
        navigate("/singup");
    }

    return (
        <div className="container">
            <h1>Registered Succesfully!</h1>
            <button onClick={back}>Go back</button>
        </div>
    );
}
export default Succes;