import { useDispatch} from "react-redux";
import ModalLogout from "../Modals/ModalLogout.jsx";
import { useState } from "react";
import { setFormData, setIsLoggin } from "../../store/features/form/formSlice.js";



const Logout = ()=>{

    const [showModalLogout, setShowModalLogout] = useState(false);
    const dispatch = useDispatch();


    const onCloseModalLogout = () => {
        setShowModalLogout(false);
    };

    const pressButton = () => {
        setShowModalLogout(true);
    };

    const handleLogout = () => {
        dispatch(setFormData({ module: "", username: "", email: "", password: "" })); 
        dispatch(setIsLoggin(false)); 
        setShowModalLogout(false); 
    };


    return(
        <>
            <button className="button-logout" type="button" onClick={pressButton}>
                Logout
            </button>
            <ModalLogout
                visible={showModalLogout}
                message="¿Estás seguro de que quieres cerrar sesión?"
                onClose={onCloseModalLogout}
                onLogout={handleLogout}
            />
        </>
    )
}

export default Logout