import React from "react";
import { TextInput, StyleSheet } from "react-native";

const InputeText = (props) => {

    return (<TextInput style={styles.container}  {...props} > </TextInput>


    )

};


const styles = StyleSheet.create({
    container: {
        width: "80%",
        height: 45,
        borderWidth: 1,
        borderRadius: 10

    },
});

export default InputeText;