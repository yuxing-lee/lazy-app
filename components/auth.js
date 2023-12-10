import React, { useEffect } from 'react';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from "expo-web-browser";
import { Text, View, Button } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

function Auth() {
    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: "195433673647-m0gdslsmot19btv2o06c54ko52c7c934.apps.googleusercontent.com"
    });

    useEffect(() => {
        console.log("response: ", response);
    }, [response]);

    return (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Button title="Login with Google" onPress={promptAsync} />
        </View>
    )
}
export default Auth;