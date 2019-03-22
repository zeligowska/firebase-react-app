import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

class App extends Component {

  state = {
    firstName: '',
    lastName: '',
    age: null
  }

  styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    },
    textField: {
      marginLeft: 10,
      marginRight: 10,
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
    button: {
      height: 56,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 16,
    }
  }

  handleChange = (event) => {
    this.setState( { [event.target.name]: event.target.value } );
}

  render() {
    return (
      <div>
        <form style={this.styles.container}>
          <TextField
            style={this.styles.textField}
            value={this.state.firstName}
            name="firstName"
            id="first-name-field"
            label="First name"
            // placeholder="First name"
            margin="normal"
            variant="outlined"
          />
          <TextField
            value={this.state.lastName}
            name="lastName"
            id="last-name-field"
            label="Last name"
            // placeholder="Last name"
            style={this.styles.textField}
            margin="normal"
            type="text"
            variant="outlined"
          />
          <TextField
            id="age-field"
            label="Age"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
            type="number"
            style={this.styles.textField}
            margin="normal"
            variant="outlined"
          />
          <Button variant="contained" color="primary" style={this.styles.button}>
            Send
            <Icon>send</Icon>
          </Button>
        </form>
      </div>
    );
  }
}

export default App;
