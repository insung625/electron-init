import React from 'react';

export default function App() {

    const btnClick = () => {
        return window.api.noti("Welcome to my app");
    }

    return (
        <>
            <h1> I am App component!! </h1>
            <button onClick ={btnClick}> click !!</button>
        </>
    );
}

