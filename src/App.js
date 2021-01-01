import logo from './logo.svg';
import './App.css';

import React, { Component } from "react";
import { QuestionsArray } from "./Questions.js";

import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

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
      Answer: 1,
      valueNow:10

 
          };

          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
          this.LiveSliderValue = this.LiveSliderValue.bind(this);
          this.SubmitSliderValue = this.SubmitSliderValue.bind(this);
          this.handleSliderCommit = this.handleSliderCommit.bind(this);
          this.handleSliderChange = this.handleSliderChange.bind(this);

          this.AnsListItems = this.AnsListItems.bind(this);
        } // end constructor
        


        CheckAnswer(userInputtedAnswer) {
        const isCorrectAnswer = this.state.isCorrectAnswer;
        
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

        this.setState({valueNow: event.target.value});
        
        console.log("Value Now = "+event);
      }
    
      handleSubmit(event) {
        alert('You said: ' + this.state.Answer);
        event.preventDefault();
        console.log(this.state.Answer);
      }

      LiveSliderValue(Svalue) {
        console.log("LiveSliderValue="+Svalue);
        return `${Svalue}`;
      }

      handleSliderCommit(){
        console.log("Commit: handleSliderCommmit(event)=>");
      }

      handleSliderChange(event) {

        console.log("handleSliderChange(event)=>"+event);
        this.setState({AnswerBasket:this.state.AnswerBasket.concat(event)});
        console.log("Answer Basket Length= "+this.state.AnswerBasket.length);
        
      }

      SubmitSliderValue(userInputtedSliderValue) {
      //bind
        console.log("SubmitSliderValue rec'd slow message:=>"+userInputtedSliderValue);
        //this.setState({AnswerBasket:this.state.AnswerBasket.concat(userInputtedSliderValue)});
        
        
        //console.log("Answer Basket = "+this.state.AnswerBasket);

      }

      AnsListItems() {
        
        //return this.state.AnswerBasket.map((r) => <li>{r}</li>);
      
        return (
          <ol>
            {this.state.AnswerBasket.map(r => (
              <li key={r}>{r}</li>
            ))}
          </ol>
        );
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
                    <div>
                
              </div>
                  </p>
                  Please answer {QuestionsArray.length} questions.
                  <br/>
                  <br/>
                  <p>{QuestionsArray[0].question}</p>  
                    <form onSubmit={this.handleSubmit}>
                    <label>
                      <select value={this.state.value} onChange={this.handleChange}>
                      <option value="1">Yes</option>
                      <option value="0">No</option>
                      </select>
                    </label>
                    <input type="submit" value="Submit" onClick={()=> this.CheckAnswer(this.state.Answer)} />
                  
                  
                  </form>
            <i>You selected: {this.state.Answer}</i>
            <i>Call to Check Answer Function-send answer </i> 

            <i>You selected: {this.valuetext}</i>

                </header>
               
                <div className="slider">
                <Typography id="discrete-slider" gutterBottom>
                  Opinion
                </Typography>

               
                <Slider
                  onChange={this.handleSliderChange}
                  onChangeCommitted={()=> this.handleSliderCommit}
                  defaultValue={0}
                  getAriaValueText={()=> this.SubmitSliderValue}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={10}
                  marks
                  min={0}
                  max={100}
                />
                <div>
                {this.state.AnsListItems}
                </div>
                </div>
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
