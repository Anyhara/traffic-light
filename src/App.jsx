import { useState } from "react";
import './App.css';


function App() {

    const [color, setColor] = useState("");

    function Alternate() {
        if ( color === "red" ) {
            setColor("yellow")
        } if ( color === "yellow" ) {
            setColor("green")
        } if ( color === "green" ) {
            setColor("red")
        } if ( color === "" ) {
            setColor("red")
        };
    };

    return (
        <>
            <div className="traffic-signal">
                <div className={"light red " + (color === "red" ? "glow" : "")} onClick={() => setColor("red")}></div>
                <div className={"light yellow " + (color === "yellow" ? "glow" : "")} onClick={() => setColor("yellow")}></div>
                <div className={"light green " + (color === "green" ? "glow" : "")} onClick={() => setColor("green")}></div>
            </div>
            <button className="btn-reset" onClick={() => setColor("")}>Reset</button>
            <button className="btn-alternate" onClick={() => (Alternate())}>Alternate</button>
        </>
    );
};

export default App