import { IGame } from "./IGame";
import { IConfig } from "./IConfig";
import { useNavigation } from '@react-navigation/native';
import { Switch, TextInput, View, Text } from "react-native";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Button } from "@rneui/themed";

interface GameConfigProps {
    game: IGame;
}

const GameConfig = ({ game }: GameConfigProps) => {
    const nav = useNavigation();
    const [passingGrade, setPassingGrade] = useState('');
    const [customGreetingMsgs, setCustomGreetingMsgs] = useState('');
    const [customFailureMsgs, setCustomFailureMsgs] = useState('');
    const [isRandomQuestions, setIsRandomQuestions] = useState(false);
    const [isPredefinedQuestions, setIsPredefinedQuestions] = useState(false);
    const [questionCount, setQuestionCount] = useState('');

    function handleSaveOnPress() {
        alert('Save');
        nav.goBack();
    };

    return (
        <View style={styles.container}>
            {/* Passing Grade */}
            <TextInput
                style={styles.input}
                placeholder="Passing Grade (Percentage)"
                keyboardType="numeric"
                value={passingGrade}
                onChangeText={setPassingGrade}
            />

            {/* Custom Greeting Messages */}
            <TextInput
                style={styles.input}
                placeholder="Custom Greeting Messages (255 characters)"
                maxLength={255}
                value={customGreetingMsgs}
                onChangeText={setCustomGreetingMsgs}
            />

            {/* Custom Failure Messages */}
            <TextInput
                style={styles.input}
                placeholder="Custom Failure Messages (255 characters)"
                maxLength={255}
                value={customFailureMsgs}
                onChangeText={setCustomFailureMsgs}
            />

            {/* Is Random Questions */}
            <View style={styles.switchContainer}>
                <Switch
                    value={isRandomQuestions}
                    onValueChange={setIsRandomQuestions}
                />
                <Text>Is Random Questions</Text>
            </View>

            {/* Is Predefined Questions */}
            <View style={styles.switchContainer}>
                <Switch
                    value={isPredefinedQuestions}
                    onValueChange={setIsPredefinedQuestions}
                />
                <Text>Is Predefined Questions</Text>
            </View>

            {/* Question Count */}
            <TextInput
                style={styles.input}
                placeholder="Question Count"
                keyboardType="numeric"
                value={questionCount}
                onChangeText={setQuestionCount}
            />

            {/* Save Button */}
            <Button title="Save" onPress={handleSaveOnPress} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
    },
    input: {
        marginBottom: 16,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
});

export default GameConfig;