import React, { Component } from 'react';
var firebase = require('firebase');
var uuid = require('uuid');

var config = {
    apiKey: "AIzaSyCkx6jKR_qJiM-Cvfk6JNm13c3IoJUNOQ8",
    authDomain: "usurvey-b49e7.firebaseapp.com",
    databaseURL: "https://usurvey-b49e7.firebaseio.com",
    projectId: "usurvey-b49e7",
    storageBucket: "usurvey-b49e7.appspot.com",
    messagingSenderId: "633894929479"
  };
  firebase.initializeApp(config);

class Usurvey extends Component {
    constructor(props){
        super(props);

        this.state = {
            uid: uuid.v1(),
            studentName: '',
            answers: {
                answer1: '',
                answer2: '',
                answer3: ''
            },
            isSubmitted: false
        };
    }

    render() {
        var studentName;
        var questions;

        if(this.state.studentName === '' && this.state.isSubmitted === false) {
            studentName = <div>
                <h1>Hey student, please let us know your name</h1>
                <form>
                    <input type="text" placeholder="john/jane" ref="name" />
                </form>
            </div>
        }

        return(
            <div>
                {studentName}
                --------------------------------------------
                {questions}
            </div>
        );
    }
}

export default Usurvey;