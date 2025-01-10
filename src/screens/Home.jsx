// import Logo from '../Components/Home/Logo.jsx'
// import Github from '../Components/Home/Github.jsx'
import Body from '../Components/Home/Body.jsx'
import Footer from '../Components/Home/Footer.jsx'
import OpenLink from '../Components/Core/OpenLink.jsx'

//img
import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg'; 
import githubLogo from '../assets/github.svg';

import { useSelector, useDispatch } from 'react-redux'

const Home = ()=> {
  const count = useSelector((state) => state.counter.value)

  return (
    <div>
      {/* <Logo/>
      <Github/> */}
      <div>
        <span>Count Value: {count}</span>
      </div>

      <OpenLink redirectURL="https://vite.dev" logoImage={viteLogo} altValue="Vite"/>
      <OpenLink redirectURL="https://react.dev" logoImage={reactLogo} altValue="React"/>
      <OpenLink redirectURL="https://github.com/Xavi-010/DiplomadoReactJS" logoImage={githubLogo} altValue="GitHub"/>


      <Body/>
      <Footer/>
    </div>
  )
}

export default Home