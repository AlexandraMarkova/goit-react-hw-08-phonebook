import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../redux/auth/auth-operations';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';



const styles = {
  text: {
      textAlign: 'center',
    },
  form: {
    
    width: 320,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h1 style={styles.text}>Страница регистрации</h1>

        <form
          onSubmit={this.handleSubmit}
          style={styles.form}
          autoComplete="off"
        >
          <label style={styles.label}>
            <TextField
              id="outlined-basic"
              label="name"
              variant="outlined"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

          <label style={styles.label}>
            <TextField
              id="outlined-basic"
              label="email"
              variant="outlined"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label style={styles.label}>
            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <Button variant="contained" color="primary" type="submit">
            Зарегистрироваться
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
