import React, {useState} from 'react'

export default function Counter() {

    const [score, setScore] = useState(0);

    // const incrementScore = () => {
    //     setScore(score+1);
    // }

    return (
        // <span onClick={incrementScore}>
        //     {score}
        // </span>

        <span onClick={() => setScore(score+1)}>
            {score}
        </span>
    )
}
