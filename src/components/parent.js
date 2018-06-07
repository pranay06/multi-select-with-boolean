import React from 'react';

import MultiSelectBoolean from "./MultiSelectBoolean.js";

export default class Parent extends React.Component {
	constructor(props) {
		super(props);
		this.state  = {
			label: "Some Label",
			value: {
				"boolean": true,
				"selected": ["Calender"]
			},
			metaData: ["Calender", "Ninjas"]
		}
		
		
	}

	

	onBooleanValueChange = (value) =>{
		this.setState((previousState, props)=>{

			return {
				value: {
					boolean: value,
					selected: previousState.value.selected
				}
			}
		})
	}	

	checkBoxValueChange = (arrayOfValues)=>{
		// if(this.state.value.selected.indexOf(value) === )

		this.setState((previousState, props)=>{
			return {
				value: {
					boolean: previousState.value.boolean,
					selected: arrayOfValues
				}
			}
		});
	}

	clearData = () => {
		this.setState({
			value: {
				"boolean": false,
				"selected": []
			}
		})
	}


	render() {
		return (
			<div>
				<MultiSelectBoolean value={this.state.value} label={this.state.label} metaData={this.state.metaData} onBooleanValueChange={(value)=>this.onBooleanValueChange(value)} checkBoxValueChange={(value)=>this.checkBoxValueChange(value)} clearData={()=>this.clearData()} />
			</div>
		);
	}
}
