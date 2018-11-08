import React, {Component} from "react"
import {
  Button, ButtonGroup, DropdownButton,
  MenuItem, ButtonToolbar, Panel,
  FormGroup, ControlLabel, FormControl
} from "react-bootstrap"

const dropdownOptions = ['Unemployed', 'Retired']

export default class CurrentStatus extends Component {
  state = {
  }
  render() {
    return (
      <Panel>
        <h5>What is your current status?</h5>
        <DropdownButton
          style={{width: '100%'}}
          title={'select'}
          id={`dropdown-basic`}
        >
          {dropdownOptions.map(option => <MenuItem key={option} eventKey="1">{option}</MenuItem>)}
        </DropdownButton>
      </Panel>
    )
  }
}
