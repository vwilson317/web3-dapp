import { useState } from "react";
import { Question } from "./Question";

const QuestionScreen = () => {
    const [questions, setQuestions] = useState<IQuestion[]>([]);

    return (<>
        <h2>Select Game: {game.title}</h2>
        {questions.map(q => {
            return <Question {...q} />
        })}
    </>
    )
}

export default QuestionScreen;