import React, { Component } from "react";
//import "./styles.css";
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

function q_id(question_number){
    if(question_number.id===1){
    return (question_number.id === 1)
    }
    
    else if(question_number.id===2){
    return (question_number.id === 2)  
    }
    
    else if(question_number.id===3){
            return (question_number.id === 3)     
    }
    
    else if(question_number.id===4){
            return (question_number.id === 4)
            
    }
    
}

function flex_id_search(id_input){

    return function (question_number){

        return question_number.id === id_input;
    }


}

 class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

                  searchTerm:" ", 
                  len:0, 
                  SliderValueState:0,
                  AnswerArray:[],

                            questions : [
                                {id:1,name: "Q1. Conservative or Liberal?", votes: 0},
                                {id:2,name: "Q2. Patriot or Rebel?", votes: 0},
                                {id:3,name: "Q3. Democrat or Republican?", votes: 0},
                                {id:4,name: "Q4. Woke or Overslept?", votes: 0}
                            ]

                };
                this.onSearchFormChange = this.onSearchFormChange.bind(this);
               
                this.onSliderChangeFunction = this.onSliderChangeFunction.bind(this);

  }

onSearchFormChange(event){

  this.setState({searchTerm:event.target.value})
  console.log(event);

  let sTerm = event.target.value; // typed in value
    let numChars = sTerm.length;
    this.setState({ len: numChars });
}

onSliderChangeFunction(event, index){
    
    console.log("value=>"+index);
    //holds value
    this.setState({SliderValueState:index})
   
    //just keeps adding values to array, not changing them.
    this.setState({AnswerArray:this.state.AnswerArray.concat(index)});
    
    let newquestions = [...this.state.questions];

    newquestions[0].votes= index;
    this.setState({questions: newquestions});
    return newquestions[0].votes;
    //event.preventDefault();
}



  render() {

    //console.log(this.state.SearchTerm);

  return (
    <div className="App">
        <h1>CS385 Search App</h1>
        The search term is <b>[{this.state.searchTerm}]</b>. 
        There are <b>[{this.state.len}]</b> characters typed.
        
        

        <SearchForm
        //passing these properties to searchform component
        //searchTerm=>this.props.searchTerm
          searchTerm={this.state.searchTerm}
          //onChange=> this.props.onChange
          onChange={this.onSearchFormChange}
        />

        <SliderForm
        //passing these properties to searchform component
        //SliderValue=>this.props.SliderValue
          SliderValue={this.state.SliderValueState}
          //onSliderChange=> this.props.onSliderChange
          onSliderChange={this.onSliderChangeFunction}
        />
        <hr></hr>
        The slider value is <b>[{this.state.SliderValueState}]</b>.
        <hr></hr> 
        
        <hr></hr>
      
      <div>
      {this.state.AnswerArray.map((ans, index) => (
      <p key={index}>Answer, {ans} !</p>
      ))}
      </div>

      <div>
         id 1
         <SliderForm
        //passing these properties to searchform component
        //SliderValue=>this.props.SliderValue
          SliderValue={this.state.SliderValueState}
          //onSliderChange=> this.props.onSliderChange
          onSliderChange={this.onSliderChangeFunction}
        />
      {this.state.questions.filter(flex_id_search(1)).map((ListItem) => (
      <p key={ListItem.id}>
      List_ID:{ListItem.id} List_ID:{ListItem.name}   Question_id: {ListItem.votes}   
      </p>
      ))}
      </div>

      <div>
         id 2
         <SliderForm
        //passing these properties to searchform component
        //SliderValue=>this.props.SliderValue
          SliderValue={this.state.SliderValueState}
          //onSliderChange=> this.props.onSliderChange
          onSliderChange={this.onSliderChangeFunction}
        />
      {this.state.questions.filter(flex_id_search(2)).map((ListItem) => (
      <p key={ListItem.id}>
      List_ID:{ListItem.id} List_ID:{ListItem.name}   Question_id: {ListItem.votes}   
      </p>
      ))}
      </div>
      
      <div>
         id 3
         <SliderForm
        //passing these properties to searchform component
        //SliderValue=>this.props.SliderValue
          SliderValue={this.state.SliderValueState}
          //onSliderChange=> this.props.onSliderChange
          onSliderChange={this.onSliderChangeFunction}
        />
      {this.state.questions.filter(flex_id_search(3)).map((ListItem) => (
      <p key={ListItem.id}>
      List_ID:{ListItem.id} List_ID:{ListItem.name}   Question_id: {ListItem.votes}   
      </p>
      ))}
      </div>

      <div>
         id 4
         <SliderForm
        //passing these properties to searchform component
        //SliderValue=>this.props.SliderValue
          SliderValue={this.state.SliderValueState}
          //onSliderChange=> this.props.onSliderChange
          onSliderChange={this.onSliderChangeFunction}
        />
      {this.state.questions.filter(flex_id_search(4)).map((ListItem) => (
      <p key={ListItem.id}>
      List_ID:{ListItem.id} List_ID:{ListItem.name}   Question_id: {ListItem.votes}   
      </p>
      ))}
      </div>

      <div>
          All
      {this.state.questions.map((ListItem) => (
      <p key={ListItem.name}>
      List_ID:{ListItem.name}   Question_id: {ListItem.votes}   
      </p>
      ))}
      </div>

      


      </div>


  );
}
 }


 class SearchForm extends Component {
  render() {
    // this.props are the properties which are provided or passed
    // to this component. We have the searchTerm and we have the
    // onChange function.
    const searchTermFromProps = this.props.searchTerm;
    const onChangeFromProps = this.props.onChange;

    return (
      <div className="SearchFormForm">
        <hr />
        Search Component:
        <form>
          <b>Type your search here: </b>
          <input type="text" 
          value={searchTermFromProps}
          onChange={onChangeFromProps}
          />
        </form>
        <hr />
      </div>
    );
  }
} // close the SearchForm Component

class SliderForm extends Component {
  render() {
    // this.props are the properties which are provided or passed
    // to this component. We have the searchTerm and we have the
    // onChange function.
    //const SliderValueFromProps = this.props.SliderValue;
    //wired back to onSliderChangeFunction via 
    const onSliderChangeFromProps = this.props.onSliderChange;

    return (
      <div className="slider">
                <Typography id="discrete-slider" gutterBottom>
                  Opinion
                 
                </Typography>
                <Slider
                  onChangeCommitted={onSliderChangeFromProps}
                  defaultValue={50}
                  //getAriaValueText={onSliderChangeFromProps}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={10}
                  marks
                  min={0}
                  max={100}
                />
                </div>
    );
  }
} // close the SearchForm Component

export default App;
