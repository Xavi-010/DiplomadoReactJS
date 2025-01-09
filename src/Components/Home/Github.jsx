
import githubLogo from '../../assets/github.svg'

const GithubLogo = ()=>{
    return(
            <div>
                <a href="https://github.com/Xavi-010/DiplomadoReactJS" target="_blank">
                <img src={githubLogo} className="logo" alt="Vite logo" />
                </a>
            </div>
    );
};

export default GithubLogo;