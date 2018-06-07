import React from 'react';
import RadioButtonsGroup from './inputBox.js';
import CheckboxesGroup from './dropDown.js';
import FormDialog from './clearbutton.js';
import MultipleSelect from "./select.js";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
export default class MultiSelectBoolean extends React.Component {
	constructor(props) {
		super(props);
		this.state  = {
			showOptions: false
		}
		
		
	}

	onClick = () => {
		this.setState((previousState, props)=>{
			return {
				showOptions: !previousState.showOptions
			}
		});
	}

	onBooleanValueChange = (value) =>{
		this.props.onBooleanValueChange((value==='true'));
	}	

	checkBoxValueChange = (value)=>{
		// if(this.state.value.selected.indexOf(value) === )

		var arrayOfValues = this.props.value.selected;
		var index = arrayOfValues.indexOf(value);
		if (index > -1) {
		  arrayOfValues.splice(index, 1);
		}
		else
			arrayOfValues.push(value);
		this.props.checkBoxValueChange(arrayOfValues);
		
	}

	clearData = () => {
		this.props.clearData();
		
	}


	render() {
		return (
			<div>
				<MultipleSelect value={this.props.value.selected} onClick={()=>this.onClick()} label={this.props.label}/>
				{(this.state.showOptions)?<Card><CardContent><RadioButtonsGroup value= {this.props.value.boolean} onChange={(value)=>this.onBooleanValueChange(value)}/>
				<CheckboxesGroup value={this.props.value.selected} metaData={this.props.metaData} onChange={(value)=>this.checkBoxValueChange(value)}/>					
				<FormDialog clearData={()=>this.clearData()}/></CardContent></Card>:""}
			</div>
		);
	}
}

//props
//value = {
//	"boolean": false,
//	"selected": ["Calender"]
// }
// metaData = ["Calender, Ninjas"]
//