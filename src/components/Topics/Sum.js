import React, {Component} from 'react';

class Sum extends Component{
	constructor(){
		super();
		this.state ={
			number1:0,
			number2:0,
			sum:null
		}
	}
	
	onChangeOne(e){
		this.setState({number1:e});
	}
	onChangeTwo(e){
		this.setState({number2:e});
	}
	
	onClick(){
		var sumNew = Number(this.state.number1) + Number(this.state.number2);
		this.setState({sum:sumNew});
	}
	
	render(){
		return(
		<div className="puzzleBox sumPB">
			<h4>Sum</h4>
			<input className="inputLine" onChange={(e)=>{this.onChangeOne(e.target.value)}}/>
			<input className="inputLine" onChange={(e)=>{this.onChangeTwo(e.target.value)}}/>
			<button  className="confirmationButton" onClick={()=>{this.onClick()}}>Add</button>
			<span className="resultsBox">{this.state.sum}</span>
		</div>
		);
	}
	
}

export default Sum;