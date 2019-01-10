import React, {Component} from 'react';

class FilterObject extends Component{
	
	constructor(){
		super();
		
		this.state = {
			unFilteredArray: [
			{"name":"Anakin", "title":"Knight on Council", "age":30},
			{"name":"Obi-wan", "title":"Master", "hairColor":"brown"},
			{"name":"Yoda", "title":"Master", "age":900}
			],
			userInput:"",
			filteredArray:[],
		}
		this.filterFunction = this.filterFunction.bind(this);
		this.onInputChange  = this.onInputChange.bind(this);
	}
	
	onInputChange(e){
		this.setState({userInput:e});
	}
	
	filterFunction(){
		var newArr =[];
		for(var i=0; i<this.state.unFilteredArray.length; i++){
			for(var key in this.state.unFilteredArray[i]){
				if(key === this.state.userInput)newArr.push(this.state.unFilteredArray[i]);
			}
		}
		console.log(newArr);
		this.setState({filteredArray: newArr});
	}
	
	render(){
		return(
		<div className="puzzleBox filterObjectPB">
			<h4>Filter Object</h4>
			
			<span className="puzzleText">
			Unfiltered:{JSON.stringify(this.state.unFilteredArray)}
			</span>
			
			<input className="inputLine" onChange={(e)=>{this.onInputChange(e.target.value)}} />
			
			<button className="confirmationButton" onClick={()=>{this.filterFunction()}} >Filter</button>
			
			<span className="resultsBox filterObjectRB">
			Filtered:{JSON.stringify(this.state.filteredArray)}
			</span>
		</div>
		);
	}
	
}

export default FilterObject;