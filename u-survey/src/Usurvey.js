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

    answerSelected(){

    }

    questionSubmit(){
        
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
        this.answerSelected = this.answerSelected.bind(this);
        this.questionSubmit = this.questionSubmit.bind(this);
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
                questions = <div>
                    <h2>Here are some questions: </h2>
                    <form onSubmit={this.questionSubmit}>
                        <div className="card">
                            <label>What kind of courses do you dig?</label> <br />
                            <input type="radio" name="answer1" value="Technology" onChange={this.answerSelected} />Technology
                            <input type="radio" name="answer1" value="Design" onChange={this.answerSelected} />Design
                            <input type="radio" name="answer1" value="Marketing" onChange={this.answerSelected} />Marketing
                        </div>
                        <div className="card">
                            <label>You are a....</label> <br />
                            <input type="radio" name="answer2" value="Student" onChange={this.answerSelected} />Student
                            <input type="radio" name="answer2" value="In-job" onChange={this.answerSelected} />In-job
                            <input type="radio" name="answer2" value="Looking-job" onChange={this.answerSelected} />Looking-job
                        </div>
                        <div className="card">
                            <label>Is online learning helpful? </label> <br />
                            <input type="radio" name="answer3" value="yes" onChange={this.answerSelected} />yes
                            <input type="radio" name="answer3" value="no" onChange={this.answerSelected} />no
                            <input type="radio" name="answer3" value="maybe" onChange={this.answerSelected} />maybe
                        </div>
                        <input className="feedback-button" type="submit" value="submit" />
                    </form>
                </div>;
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