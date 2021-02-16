import React, { useState } from 'react'


interface HeaderProps {
    buttonText?: string;
}

interface Movie {
    title: string;
    date: string;
    rating: string;
    description: string;
}

export default function Header({buttonText}: HeaderProps) {
    const [count, setCount] = useState(0);
    const [movies, setMovies] = useState<Movie | null>(null)

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Header</h1>
            <button onClick={increment}>{buttonText || 'Click the button !!'}</button>
            <p>{count}</p>
        </div>
    )
}