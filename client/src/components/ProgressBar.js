import React, { useState, useEffect } from 'react'

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        listenToScrollEvent();
    });

    const listenToScrollEvent = () => {
        document.addEventListener("scroll", () => {
            requestAnimationFrame(() => {
                // Calculates the scroll distance
                calculateScrollDistance();
            });
        });
    };

    // Calculate the docuemnt height
    const getDocHeight = () => {
        return Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight
        );
    };

    const calculateScrollDistance = () => {
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const docHeight = getDocHeight();
        console.log(windowHeight, docHeight);

        const totalDocScrollLength = docHeight - windowHeight;
        const scrollPostion = Math.floor((scrollTop / totalDocScrollLength) * 100);
        console.log(scrollTop / totalDocScrollLength);

        setProgress(scrollPostion);
    };
    return <div className="z-20 h-2 fixed top-0 left-0 from-blue-600 w-full to-indigo-600 bg-gradient-to-l"
        style={{ width: `${progress}%` }}
    ></div>;
};

export default ProgressBar
