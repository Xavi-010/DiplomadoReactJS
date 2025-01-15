import { useSelector} from 'react-redux'
import { useState } from 'react';
const About = ()=>{
    const value = useSelector((state) => state.product.initialvalue)
    const [ nameComponent,setNameComponent ] = useState('About');
      
    return(
        <>
            <h1>Component About</h1>
            <p>Value Initial :{value} </p>
            <p>Component name: {nameComponent}</p>
            <button onClick={() => {setNameComponent('Curso de React')}}>Press</button>
        </>
    );
};

export default About;