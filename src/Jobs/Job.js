import React, {Component} from "react"
import {
  Button, ButtonGroup, DropdownButton,
  MenuItem, ButtonToolbar, Panel,
  FormGroup, ControlLabel, FormControl
} from "react-bootstrap"
import './Jobs.css'

const dropdownOptions = ['Developer', 'Designer', 'Celebrant', 'Genie', 'Tango Dancer']

export default class Job extends Component {
  state = {
    companyName: '',
    income: 0
  }
  handleCompanyChange = (e) => {
    this.setState({companyName: e.target.value})
  }
  handleIncomeChange = (e) => {
    this.setState({income: e.target.value})
  }
  render() {
    const {jobNumber} = this.props
    return (
      <Panel>
        <h3>Job: {jobNumber}</h3>
        <h5>What is your occupation?</h5>
        <DropdownButton
          style={{width: '100%'}}
          title={'select'}
          id={`dropdown-basic`}
        >
          {dropdownOptions.map(option => <MenuItem key={option} eventKey="1">{option}</MenuItem>)}
        </DropdownButton>
        <br/>
        <FormGroup
          controlId="companyNameId"
        >
          <ControlLabel>Company name</ControlLabel>
          <FormControl
            type="text"
            value={this.state.companyName}
            placeholder="Enter company name"
            onChange={this.handleCompanyChange}
          />
        </FormGroup>
        <FormGroup
          controlId="incomeNameId"
        >
          <ControlLabel> Income</ControlLabel>
          <FormControl
            type="number"
            value={this.state.income}
            placeholder="Enter amount"
            onChange={this.handleIncomeChange}
          />
        </FormGroup>
      </Panel>
    )
  }
}
