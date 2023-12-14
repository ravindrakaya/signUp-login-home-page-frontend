import { Component } from "react";
import { Link } from "react-router-dom";

import "./index.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  onClickLoginBtn = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const userDetails = { username, password };

    // console.log(userDetails);
    const url = "http://localhost:3000/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  };

  onChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  onChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    const { username, password } = this.state;

    return (
      <form className="login-form-container" onSubmit={this.onClickLoginBtn}>
        <div className="login-input-field">
          <label htmlFor="username" className="login-label">
            Username
          </label>
          <input
            type="text"
            className="login-input"
            id="username"
            placeholder="Username"
            value={username}
            onChange={this.onChangeUsername}
          />
        </div>
        <div className="login-input-field">
          <label htmlFor="password" className="login-label">
            Password
          </label>
          <input
            type="password"
            className="login-input"
            id="password"
            placeholder="Password"
            value={password}
            onChange={this.onChangePassword}
          />
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
        <Link to="/signup/" className="link-element">
          <button type="button" className="new-account-btn">
            Create Account
          </button>
        </Link>
      </form>
    );
  }
}

export default Login;
