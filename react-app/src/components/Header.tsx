import React, { useState } from 'react'

type HeaderProps = {
    buttonText?: string;
}

const Header = ({buttonText}: HeaderProps): JSX.Element  => {
    const [count, setCount] = useState(0);

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

export default Header;