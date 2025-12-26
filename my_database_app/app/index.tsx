import { Text, View } from "react-native";
import React, {useState} from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from '../FirebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export default function Index() {
  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');

  const signIn = async() => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
    } catch (error: any) {
      console.log(error)
      alert('Sign in failed: ' + error.message);
    }
  }

  const signUp = async() => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
    } catch (error: any) {
      console.log(error)
      alert('Sign in failed: ' + error.message);
    }
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>LOGIN PAGE</Text>
    </SafeAreaView>
  );
}
