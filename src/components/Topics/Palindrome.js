import React, {Component} from 'react';

class Palindrome extends Component{
	
	constructor(){
		super();
		
		this.state ={
			userInput: "",
			palindrome:""
		}
		this.onInputChange = this.onInputChange.bind(this);
	}
	
	onInputChange(e){
		this.setState({userInput:e});
	}
	
	onButtonClick(){
		var forwards = this.state.userInput.split("");
		var backwards = [];
		for(let i=forwards.length-1; i>=0; i--){
			backwards.push(forwards[i]);
		}
		this.setState({palindrome:"true"});
		for(let i=0; i<forwards.length; i++){
			if(forwards[i] !== backwards[i])this.setState({palindrome:"false"});
		}
	
	}
	
	render(){
		return(
		<div className="puzzleBox filterStringPB">
			<h4>Palindrome</h4>
			<input className="inputLine" onChange={(e) => {this.onInputChange(e.target.value)}} />
			<button className="confirmationButton" onClick={() => {this.onButtonClick()}}>Check</button>
			<span className="resultsBox">Palindrome: {this.state.palindrome}</span>
		</div>
		);
	}
	
}

export default Palindrome;