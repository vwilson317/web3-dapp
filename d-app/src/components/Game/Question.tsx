import { CheckBox } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { Button, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";


interface IMultiChoiceAnswer{
    value: string;
    isCorrect: boolean;
}

export function Question(question : IQuestion) {
    const [questionType, setQuestionType] = useState(QuestionType.SINGLE_MULTIPLE_CHOICE);
    // const [question, setQuestion] = useState("");
    const [options, setOptions] = useState<IMultiChoiceAnswer[]>([]);
    const [isMutipleChoice, setMultipleChoice] = useState(false);

    useEffect(() => {
        if (questionType === QuestionType.SINGLE_MULTIPLE_CHOICE ||
            questionType === QuestionType.MULTIPLE_MULTIPLE_CHOICE) {
            setMultipleChoice(true);
        }
    }, [questionType]);

    const addOption = () => {
        setOptions([...options, {} as IMultiChoiceAnswer]);
    };

    const getSelectComponent = (option: IMultiChoiceAnswer) => {
        // const currentOption = options[index];

        if (questionType === QuestionType.SINGLE_MULTIPLE_CHOICE) {
            return (
                <>
                    <TextInput value={option.value} onChangeText={e => option.value = e} />
                    {options.length === 1 ? <CheckBox title='Correct' checked={option.isCorrect} onPress={() => option.isCorrect = !currentOption.isCorrect}/> : <></>}
                </>
            )
        }
        else if (questionType === QuestionType.MULTIPLE_MULTIPLE_CHOICE) {
            return (
                <>
                    <TextInput value={option.value} onChangeText={e => option.value = e} />
                    <CheckBox title='Correct' checked={option.isCorrect} onPress={() => option.isCorrect = !option.isCorrect}/>
                </>
            )
        }
    }

    function MultipleChoiceComponent() {
        const answers = options.map((option) => {
            getSelectComponent(option);
        });

        return (
            <>
                {answers}
                <Button title="Add Answer" onPress={addOption} />
            </>
        )
    }

    return (
        <View>
            <h1>Question</h1>
            <select>
                {Object.keys(QuestionType).map((key, index) => {
                    return (
                        <option key={index} value={key} onSelect={(_) => setQuestionType(index)}>
                            {key}
                        </option>
                    );
                })};
            </select>
            <TextInput placeholder="Example: What color are my eyes" />
            {isMutipleChoice ? <MultipleChoiceComponent /> :
                <TextInput placeholder="Example: Blue" />
            }
        </View >
    )
}