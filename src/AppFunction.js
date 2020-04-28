import React, { useState, useEffect } from 'react';

function App() {
    const [count, setCount] = useState(0);
    const [isOn, setIsOn] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    }

    const toggleLight = () => {
        setIsOn(prevFlag => !prevFlag);
    }

    const handleMouseMove = event => {
        setMousePosition({
            x: event.pageX,
            y: event.pageY
        })
    }

    useEffect(() => {
        document.title = `You have clicked ${count} times`;
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [count]);

    return (
        <>
            <h2>Counter</h2>
            <button onClick={incrementCount}>
                I was clicked {count} times
            </button >

            <h2>Toggle Light</h2>
            <img
                src={
                    isOn
                        ? "https://icon.now.sh/highlight/fd0"
                        : "https://icon.now.sh/highlight/aaa"
                }
                style={{
                    height: "50px",
                    width: "50px"
                }}
                alt="flashLight"
                onClick={toggleLight}
            />

            <h2>Mouse position</h2>
            <p>{JSON.stringify(mousePosition, null, 2)}</p>
        </>
    );
}

export default App;
