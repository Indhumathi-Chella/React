import { useState,use, createContext, Suspense } from "react";

const ThemeContext = createContext('light');
function ToggleMode({messagePromise}){
    const theme = use(ThemeContext);   
    const message = use(messagePromise);
    return(
        <>
        <p style={{color:theme == 'dark'?'white':'black',backgroundColor: theme == 'dark' ? 'black' :'white'}}>{message}</p>
        </>
    )

}

export default function Mode(){
    const messagePromise = new Promise (resolve => setTimeout(()=> resolve('Hello from Promise')));
    return(
        <ThemeContext.Provider value="dark">
            <Suspense fallback={<div>Loading...</div>}>
            <ToggleMode messagePromise={messagePromise} />
            </Suspense>
        </ThemeContext.Provider>
    )
}