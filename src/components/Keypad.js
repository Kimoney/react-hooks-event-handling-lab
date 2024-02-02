// Code Keypad Component Here

function Keypad (){
    function consoleMessage (){
        console.log('Entering password...')
    }
    return (
            <input type="password" onChange={consoleMessage}></input>
    )
}

export default Keypad;