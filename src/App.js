import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import { QuestionsArray } from "./Questions.js";



// We now have our own reference to the addressBook array
// from external Javascript file
const localQuestions = QuestionsArray;


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
            globalArray: localQuestions,  
            questionbasket:[],
            AnswerBasket:[],
             NoOfQuestins:0,
             isLoggedIn:true,
             isCorrectAnswer:true,
             Answer: 'yes'

 
          };

          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        } // end constructor
        

        CheckAnswer(userInputtedAnswer) {
          
          const isCorrectAnswer = this.state.isCorrectAnswer;
         // QuestionsArray[0].question;

         this.setState({AnswerBasket:this.state.AnswerBasket.concat(userInputtedAnswer)});
          
         console.log(userInputtedAnswer);
         console.log("Answer Basket = "+this.state.AnswerBasket);


         let i = 0;
              while (i < QuestionsArray.length){

                              if(isCorrectAnswer===false) {
                                <p>
                                Correct Answer, signals bias
                               
                              
    
    
                              </p> 
                              }
                              else{
                                <p>
                                Incorrect Answer, not biased.

                              </p> 

                              }//end if
                 i++; // increment the while loop counter.
              }// end while
              return userInputtedAnswer;
      } // end check answer

      handleChange(event) {
        //set the answer value
        this.setState({Answer: event.target.value});
      }
    
      handleSubmit(event) {
        alert('You said: ' + this.state.Answer);
        event.preventDefault();
        console.log(this.state.Answer);
      }


        render() {

          const isLoggedIn = this.state.isLoggedIn;
         
          if (isLoggedIn) {
            
            return (
              <div className="Logged in">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Welcome to Bias Quiz: Username Logged in

                  </p>
                  Please answer {QuestionsArray.length} questions.
                  <br/>
                  <br/>
                  <p>{QuestionsArray[0].question}</p>
                  
                    
                    <form onSubmit={this.handleSubmit}>
                    <label>
                      <select value={this.state.value} onChange={this.handleChange}>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                      </select>
                    </label>
                    <input type="submit" value="Submit" onClick={()=> this.CheckAnswer(this.state.Answer)} />
                  </form>
            <i>You selected: {this.state.Answer}</i>

            <i>CAll to Check Answer Function-send answer </i>
             
           
                </header>
              </div>
            );


          } else {
            return (
              <div className="Logged out">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Welcome to Bias Quiz: Logged out
                  </p>
                  Please answer {QuestionsArray.length} questions.
                  <br/>
                  <br/>
                  
                   
                  
                </header>
              </div>
            );
          }
  
}
}

export default App;
