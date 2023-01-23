import React from "react";
import { Button, StyleSheet } from "react-native";

const LoginButton = (props) => {

    return (
        <Button
          title={props.title} {...props}

        />


    )


};

const styles = StyleSheet.create({



});

export default LoginButton;
