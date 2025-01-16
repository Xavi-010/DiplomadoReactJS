import useForm from "../Hooks/useForm";

// eslint-disable-next-line react/prop-types
const FormLoginWithHook = ({ titleForm }) =>{

    const {formData, handleChange} = useForm({
        username:'',
        email:''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('datos del formulario', formData);
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

export default FormLoginWithHook;