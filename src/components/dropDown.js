import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';


class CheckboxesGroup extends React.Component {
  state = {
    gilad: true,
    jason: false,
    antoine: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };



  render() {

    var formControl = this.props.metaData.map((mData)=>{
        return (
            <FormControlLabel
              control={
                <Checkbox
                  checked={(this.props.value.indexOf(mData) != -1)}
                  onChange={(event)=>this.props.onChange(event.target.value)}
                  value= {mData}
                />
              }
              label={mData}
            />
          )
    })

    
    return (
      <FormControl component="fieldset">
        
        <FormGroup>
         {formControl}
        </FormGroup>
        
      </FormControl>
    );
  }
}

export default CheckboxesGroup;