import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

class RadioButtonsGroup extends React.Component {
  state = {
    value: 'AND',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
    	<div>
        <FormControl component="fieldset">
          
          <RadioGroup
            aria-label="Condition"
            name="AND"
            value={this.props.value}
            onChange={(event)=>this.props.onChange(event.target.value)}
          >
            <FormControlLabel value={true} control={<Radio color="primary" />} label="AND" />
            <FormControlLabel value={false} control={<Radio color="primary" />} label="OR" />
          </RadioGroup>
        </FormControl>
        </div>
    );
  }
}

export default RadioButtonsGroup;