import { useState } from "react";

// eslint-disable-next-line react/prop-types
const FormLogin = ({ titleForm }) =>{
    const [formData,setFormData] = useState({
        username:'',
        email:''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('datos del formulario', formData);
    };

    const handleChange = (e) => {
        // debugger;
        //console.log(event);
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    return(
        <>
            <form onSubmit={handleSubmit}>
                <h3>{ titleForm} </h3>
                <div>
                    <label htmlFor="username">Username:
                        <input 
                            type="text" 
                            name="username" 
                            id="username" 
                            value={formData.username} 
                            onChange={handleChange}
                            required />
                    </label>
                </div>

                <div>
                    <label htmlFor="email">Email:
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            value={formData.email} 
                            onChange={handleChange}
                            required />
                    </label>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </>
    );
};

export default FormLogin;