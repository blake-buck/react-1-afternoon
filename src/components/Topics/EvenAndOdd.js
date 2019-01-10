import React, {Component} from 'react';

class EvenAndOdd extends Component{
	constructor(prop){
		super(prop);
		this.state = {
			array: [],
			evenArray: ["[]"],
			oddArray: ["[]"],
			userInput: ""
		}
		
	}
	//updateArray takes whatever is in the input field, and throws it into stringArr. a for-loop then
	//filters over stringArr and pushes any values that are numbers into trueArray, the state array is then set to true array
	updateArray(e){
		this.setState({evenArray:[], oddArray:[]});
		var stringArr = e.split("");
		var trueArray =[];
		var numberString ="";
		for(var i=0; i<=stringArr.length; i++){
			if(stringArr[i]>=0||stringArr[i]<0){
				numberString += (stringArr[i]);
			}
			else{
				trueArray.push(Number(numberString));
				numberString="";
			}
		}
		this.setState({array: trueArray});
	}
	
	//evenOrOdd destructures the state object, and removes the end display bracket in the even and odd arrays
	//it then cycles through the array of numbers provided by updateArray and pushes the evens and odds into their respective arrays along with a comma
	//then both arrays pop to remove the comma at the end of the array and pushes the closing bracket onto both arrays
	evenOrOdd(){
		var {array, evenArray, oddArray} = this.state;
		evenArray.shift();
		oddArray.shift();
		for(var i=0; i<array.length; i++){
			if(array[i]%2===0){
				evenArray.push(array[i]);
				evenArray.push(",");
			}
			else{
				oddArray.push(array[i]);
				oddArray.push(",");
			}
		}
		evenArray.pop();
		evenArray.push("]");
		evenArray.unshift("[");
		
		oddArray.pop();
		oddArray.push("]");
		oddArray.unshift("[");
		this.setState({array:[],evenArray: evenArray, oddArray: oddArray});
	}
	
	render(){
		return(
		<div className="puzzleBox evenAndOddPB">
			<h4>Evens & Odds</h4>
			<input className="inputLine" onChange={(e) => {this.updateArray(e.target.value)}} />
			<button className="confirmationButton" onClick={() => {this.evenOrOdd()}}>Split</button>
			<span className="resultsBox">Evens:{this.state.evenArray} </span>
			<span className="resultsBox">Odds:{this.state.oddArray}</span>
		</div>
		);
	}
	
}

export default EvenAndOdd;