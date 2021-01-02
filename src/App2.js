import React, { Component } from "react";
import "./App.css";
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';



  
const MySlider = withStyles({
    root: {
      color: '#52af77',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);


  const CardStyle = makeStyles({
    root: {
      minWidth: 275,
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 30,
    },
    pos: {
      marginBottom: 12,
    },
  });
  

function getBasketTotal(acc, obj){
    return acc + obj.votes;
  
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
                  Slider1ValueState:0,
                  Slider2ValueState:0,
                  Slider3ValueState:0,
                  Slider4ValueState:0,
                  AnswerArray:[],
                  questions : [
                            {id:1,name: "Q1. Conservative or Liberal?", votes: 50},
                            {id:2,name: "Q2. Patriot or Rebel?", votes: 50},
                            {id:3,name: "Q3. Democrat or Republican?", votes: 50},
                            {id:4,name: "Q4. Woke or Overslept?", votes: 50}
                            ]

                };
                this.onSearchFormChange = this.onSearchFormChange.bind(this);
                this.onSliderChangeFunction1 = this.onSliderChangeFunction1.bind(this);
                this.onSliderChangeFunction2 = this.onSliderChangeFunction2.bind(this);
                this.onSliderChangeFunction3 = this.onSliderChangeFunction3.bind(this);
                this.onSliderChangeFunction4 = this.onSliderChangeFunction4.bind(this);
  }

onSearchFormChange(event){

  this.setState({searchTerm:event.target.value})
  console.log(event);

  let sTerm = event.target.value; // typed in value
    let numChars = sTerm.length;
    this.setState({ len: numChars });
}

onSliderChangeFunction1(event, index){
    
    let newquestions = [...this.state.questions];
    newquestions[0].votes= index;
   
    this.setState({questions: newquestions});
    event.preventDefault();
    return newquestions[0].votes;
    
}

onSliderChangeFunction2(event, index){
    
    let newquestions = [...this.state.questions];
    newquestions[1].votes= index;
   
    this.setState({questions: newquestions});
    event.preventDefault();
    return newquestions[1].votes;
    
}

onSliderChangeFunction3(event, index){
    
    let newquestions = [...this.state.questions];
    newquestions[2].votes= index;
   
    this.setState({questions: newquestions});
    event.preventDefault();
    return newquestions[2].votes;
    
}

onSliderChangeFunction4(event, index){
    
    let newquestions = [...this.state.questions];
    newquestions[3].votes= index;
   
    this.setState({questions: newquestions});
    event.preventDefault();
    return newquestions[3].votes;
    
}



  render() {
   const classes = CardStyle;
  return (
    <div className="App">
        <h1>Opinion App</h1>
        <hr></hr>
    <Card className={classes.root} >
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          
      {this.state.questions.filter(flex_id_search(1)).map((ListItem) => (
      <h2 key={ListItem.id}>
    
     {ListItem.name}    
        <div>
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      <SliderForm 
        //passing these properties to searchform component
        //SliderValue=>this.props.SliderValue
          SliderValue={this.state.Slider1ValueState}
          //onSliderChange=> this.props.onSliderChange
          onSliderChange={this.onSliderChangeFunction1}
        />
      Your Answer: {ListItem.votes}% 
      </div>
      </h2>
      ))}
        <div>
         
        </div>
        </Typography>
       
        
      </CardContent>
      
    </Card>
    &nbsp;
    <Card className={classes.root} >
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          
      {this.state.questions.filter(flex_id_search(2)).map((ListItem) => (
      <h2 key={ListItem.id}>
    
     {ListItem.name}
        <div>
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      <SliderForm 
        //passing these properties to searchform component
        //SliderValue=>this.props.SliderValue
          SliderValue={this.state.Slider1ValueState}
          //onSliderChange=> this.props.onSliderChange
          onSliderChange={this.onSliderChangeFunction1}
        />
        Your Answer: {ListItem.votes}% 
      </div>
      </h2>
      ))}
        <div>
         
        </div>
        </Typography>
       
        
      </CardContent>
      
    </Card>
      
    &nbsp;
    <Card className={classes.root} >
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          
      {this.state.questions.filter(flex_id_search(3)).map((ListItem) => (
      <h2 key={ListItem.id}>
    
     {ListItem.name}   
        <div>
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      <SliderForm 
        //passing these properties to searchform component
        //SliderValue=>this.props.SliderValue
          SliderValue={this.state.Slider1ValueState}
          //onSliderChange=> this.props.onSliderChange
          onSliderChange={this.onSliderChangeFunction1}
        />
      Your Answer: {ListItem.votes}% 
      </div>
      </h2>
      ))}
        <div>
         
        </div>
        </Typography>
       
        
      </CardContent>
      
    </Card>

    &nbsp;
    <Card className={classes.root} >
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          
      {this.state.questions.filter(flex_id_search(4)).map((ListItem) => (
      <h2 key={ListItem.id}>
    
     {ListItem.name}
        <div>
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      <SliderForm 
        //passing these properties to searchform component
        //SliderValue=>this.props.SliderValue
          SliderValue={this.state.Slider1ValueState}
          //onSliderChange=> this.props.onSliderChange
          onSliderChange={this.onSliderChangeFunction1}
        />
           Your Answer: {ListItem.votes}%  
      </div>
      </h2>
      ))}
        <div>
       
        </div>
        </Typography>
       
        
      </CardContent>
      
    </Card>
     
      <hr></hr>

      
      <h2>Your Bias Score is: <b>{this.state.questions.reduce(getBasketTotal,0.0)}</b></h2>
      </div>
 

  );
      
}
 }



class SliderForm extends Component {
  render() {
    // this.props are the properties which are provided or passed
    // to this component. We have the searchTerm and we have the
    // onChange function.
    //const SliderValueFromProps = this.props.SliderValue;
    //wired back to onSliderChangeFunction via 
    const onSliderChangeFromProps = this.props.onSliderChange;



    return (
      <div >
               
                <MySlider 
                
                  onChangeCommitted={onSliderChangeFromProps}
                  defaultValue={50}
                  //getAriaValueText={onSliderChangeFromProps}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="on"
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
