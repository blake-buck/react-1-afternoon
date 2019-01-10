import React, {Component} from 'react';

class FilterString extends Component{
	
	constructor(){
		super();
		this.state = {
			unFilteredArray: ["I shoulda been a cowboy", "from Memphis to Mobile I've played all the dives", "song, song of the South",
								"worked hard all week, got a little jingle", "my mind ain't nothing but a total blank", "yeah them boys from Oklahoma roll their joints all wrong"
								],
			userInput: "",
			filteredArray:[],
			
		}
		this.onInputChange = this.onInputChange.bind(this);
		this.onButtonClick = this.onButtonClick.bind(this);
	}
	
	onInputChange(e){
		this.setState({userInput: e});
	}
	
	onButtonClick(){
		var {unFilteredArray} = this.state;
		var newArr =[];
		for(var i=0; i<unFilteredArray.length; i++){
			if(unFilteredArray[i].indexOf(this.state.userInput)>=0)newArr.push(unFilteredArray[i]);
		}
		//console.log(newArr);
		this.setState({filteredArray:newArr});
	}
	
	render(){
		return(
		<div className="puzzleBox filterStringPB">
			<h4>Filter String</h4>
			<span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
			<input className="inputLine" onChange={(e) => {this.onInputChange(e.target.value)}}/>
			<button className="confirmationButton" onClick={() => {this.onButtonClick()}}>Filter</button>
			<span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredArray)}</span>
		</div>
		
		);
	}
	
}

export default FilterString;