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
    nameSubmit(event){
        var studentName = this.refs.name.value;
        this.setState({studentName: studentName}, function(){
            console.log(this.state);
        });
    }
    constructor(props){
        super(props);

        this.state = {
            uid: uuid.v1(),
            studentName: 'killerMan',
            answers: {
                answer1: '',
                answer2: '',
                answer3: ''
            },
            isSubmitted: false
        };
        this.nameSubmit = this.nameSubmit.bind(this);
    }

    render() {
        var studentName;
        var questions;

        if(this.state.studentName === '' && this.state.isSubmitted === false) {
            studentName = <div>
                <h1>Hey student, please let us know your name</h1>
                <form onSubmit={this.nameSubmit}>
                    <input className="namy" type="text" placeholder="john/jane" ref="name" />
                </form>
            </div>;
            questions = ''
        } else if (this.state.studentName !== '' && this.state.isSubmitted === false){
            studentName = <h1>Welcome to USurvey, {this.state.studentName}</h1>;
                questions = <p>hey</p>;
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