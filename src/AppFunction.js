import React, { useState, useEffect } from 'react';

const initialLocationState = {
    latitude: null,
    longitude: null,
    speed: null
}

function App() {
    const [count, setCount] = useState(0);
    const [isOn, setIsOn] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    const [status, setStatus] = useState(navigator.onLine);
    const [{latitude, longitude, speed}, setLocation] = useState(initialLocationState);
    let mounted = true;

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
        window.addEventListener('online', handleOnLine);
        window.addEventListener('offline', handleOffLine);
        navigator.geolocation.getCurrentPosition(handleGeolocation);
        const watchId = navigator.geolocation.watchPosition(handleGeolocation);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('online', handleOnLine);
            window.removeEventListener('offline', handleOffLine);
            navigator.geolocation.clearWatch(watchId);
            mounted = false;
        }
    }, [count]);

    const handleOnLine = () => {
        setStatus(true);
    }

    const handleOffLine = () => {
        setStatus(false);
    }

    const handleGeolocation = event => {
        if (mounted) {
            setLocation({
                latitude: event.coords.latitude,
                longitude: event.coords.longitude,
                speed: event.coords.speed
            })
        }
    }

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

            <h2>Network status</h2>
            <p>You are {status ? "online" : "offline"}</p>

            <h2>Geolocation</h2>
            <p>Latitude is {latitude}</p>
            <p>Longitude is {longitude}</p>
            <p>Your speed is {speed ? speed : "0"}</p>
        </>
    );
}

export default App;
