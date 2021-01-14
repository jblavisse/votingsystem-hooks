import React, {useState} from 'react';
import Counter from "./Counter";

export default function Question({data}) {
    const [countAnswerVisible, setCountAnswerVisible] = useState(false);
    const [userAnswer, setUserAnswer]  = useState("1");

    const handleVote = () => {
        setCountAnswerVisible(true);

        const newQuestion = data;
        newQuestion.answers[userAnswer-1].count++;
    }

    const handleAnswer = (e) => {
        setUserAnswer(e.target.value);
    }

    return (
        <div className="card mb-3">
            <div className="card-header bg-primary text-white border-primary">
               {data.title}
            </div>
            <div className="card-body">
            <form>
                {data.answers.map(answer => {
                    const idAnswer = "q"+data.id+"r"+answer.number; 
                    return (
                        <div className="form-check">
                            <input className="form-check-input" type="radio" 
                               id={idAnswer} name={"q"+data.id} 
                               value={answer.number} 
                               onChange={handleAnswer} />
                            <label className="form-check-label" htmlFor={idAnswer}>
                                {answer.name} {countAnswerVisible ? answer.count : null}
                            </label>
                        </div>
                    )
                })}
            </form>
            </div>
            <div className="card-footer bg-transparent">
                <button className="btn btn-primary" onClick={handleVote}>Voter</button>
                <Counter/>
            </div>
    </div>
    )
}
