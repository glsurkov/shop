import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App"

const rootElem = document.getElementById('root')

if(rootElem){
    const root = createRoot(rootElem)
    root.render(<App/>)
}else{
    console.log("Root element isn't defined")
}

