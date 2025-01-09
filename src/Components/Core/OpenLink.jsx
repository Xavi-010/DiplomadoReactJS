
const OpenLink = ({redirectURL,logoImage,altValue})=>{
    return (
        <>
            <a href={redirectURL} target="_blank">
            <img src={logoImage} className="logo" alt={`${altValue} logo`} />
            </a>
        </>
        //quitamos el div
    )
}

export default OpenLink;