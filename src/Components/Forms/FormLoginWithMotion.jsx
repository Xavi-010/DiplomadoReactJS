import { useState, useEffect} from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setFormData, setIsLoggin } from "../../store/features/form/formSlice.js";
import ModalBienvenido from "../../Components/Modals/ModalBienvenido.jsx";
import ModalAlert from "../../Components/Modals/ModalAlert.jsx";
import useForm from "../Hooks/useForm.js";

// eslint-disable-next-line react/prop-types
export const FormWithMotionAndHook = ({ titleForm }) => {
    
    const [showModalBienvenido, setShowModalBienvenido] = useState(false);
    const [showModalAlert, setShowModalAlert] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    
    const {formData,handleChange,reset} = useForm({
        username:'',
        email:'',
        password:''
    })
    
    const dataForm = useSelector((state) => state.form.dataForm);
    const dispatch = useDispatch();
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (formData.password=== dataForm.password) {
            dispatch(setFormData({
                username:formData.username,
                email:formData.email
            })); 
            setShowModalBienvenido(true);
            dispatch(setIsLoggin(true));
            // reset()
        } else {
            setShowModalAlert(true);
        }
    };
    
    const isLoggin = useSelector((state) => state.form.isLoggin);

    useEffect(()=>{
        if(!isLoggin){
            reset();
        }
    },[isLoggin]);

    
    const changedPasswordVisible = () => {
        setIsVisible(!isVisible);
    };
    
    const onCloseModalBienvenido = () => {
        setShowModalBienvenido(false);
    };
    
    const onCloseModalAlert = () => {
        setShowModalAlert(false);
    };
    
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <ModalBienvenido
                visible={showModalBienvenido}
                message={`Bienvenido: ${formData.username}`}
                onClose={onCloseModalBienvenido}
            />

            <ModalAlert
                visible={showModalAlert}
                message="Username/Password incorrectos!!!"
                onClose={onCloseModalAlert}
            />
            <form onSubmit={handleSubmit}>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3>{titleForm}</h3>
                </motion.div>

                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="form-input">
                        <label htmlFor="module">
                            Module:
                        </label>
                            <input
                                type="text"
                                name="module"
                                id="module"
                                value={dataForm.module}
                                disabled
                                required
                            />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="form-input">
                        <label htmlFor="username">
                            Username:
                        </label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="form-input">
                        <label htmlFor="email">
                            Email:
                        </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="form-input">
                        <label htmlFor="password">
                            Password:
                        </label>
                            <input
                                type={isVisible ? "text" : "password"}
                                name="password"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <button type="button" onClick={changedPasswordVisible}>
                                {isVisible ? "Hide" : "Show"}
                            </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                    >
                    <button type="submit">Login</button>
                </motion.div>
            </form>
        </motion.div>
    );
};
export default FormWithMotionAndHook

