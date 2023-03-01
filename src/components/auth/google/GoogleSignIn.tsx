import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { signInWithGoogle } from "./signInWithGoogle";
import {  GoogleSigninButton } from "@react-native-google-signin/google-signin";

export const GoogleSignIn = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signInWithGoogle}
      />
      <LoginButton />
    </View>
  );
}


function LoginButton() {
  return (
    <TouchableOpacity onPress={signInWithGoogle}>
      <Text>Login with Google</Text>
    </TouchableOpacity>
  );
}