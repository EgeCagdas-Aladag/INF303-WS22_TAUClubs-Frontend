import React, { Component } from "react";

class Login extends Component {
  state = {
    credentials: { email: "", password: "" },
  };

  login = (event) => {
    fetch("http://127.0.0.1:8000/dj-rest-auth/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.credentials),
    })
      .then(console.log(this.state.credentials))
      .then((data) => data.json())
      .then((data) => {
        this.props.userLogin(data.token);
      })
      .catch((error) => console.error(error));
  };

  inputChanged = (event) => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({ credentials: cred });
  };

  render() {
    return (
      <div>
        <h1>Login user form</h1>

        <label>
          Email:
          <input
            type="text"
            name="email"
            value={this.state.credentials.email}
            onChange={this.inputChanged}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.inputChanged}
          />
        </label>
        <br />
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}

export default Login;