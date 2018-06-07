import React from 'react';
import Input from '@material-ui/core/Input';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

class MultipleSelect extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: ["Pappu", "paas"]
    }
  }

  handleChange = () => {
    console.log("Multi select got cliked");
  }

  render() {
    return (
    	<FormControl >
        <InputLabel htmlFor="select-multiple-checkbox">{this.props.label}</InputLabel>
        <Select
          multiple
          value={this.props.value}
          onClick={()=>this.props.onClick()}
          input={<Input id="select-multiple-checkbox" readOnly/>}
          renderValue={selected => selected.join(', ')}
          
        >
          
        </Select>
      </FormControl>
    );
  }
}
export default MultipleSelect;