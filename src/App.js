import React, {Component} from 'react';
import firebase from 'firebase';
import {View} from 'react-native';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillUnmount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBHpytQ3Zg7MqjLFkDyBv4iMrB-NdDLwy0',
      authDomain: 'fir-auth-test-40c21.firebaseapp.com',
      projectId: 'fir-auth-test-40c21',
      storageBucket: 'fir-auth-test-40c21.appspot.com',
      messagingSenderId: '495365361475',
      appId: '1:495365361475:web:ca68ac12135b1eb13c29f6',
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentiction" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
