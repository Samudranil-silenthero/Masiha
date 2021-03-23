import React, { Component } from "react";
import axios from 'axios';

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
      otpShow: false,
      otp: ''

    };
    // this.state = this.initialState();
    // this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.autocomplete = null;
  }
      _getCode = async() => {
        const e = this.state.code+this.state.pno;
        await axios.get("http://localhost:8000/verify/getcode", {
            params: {
                phonenumber: e,
                channel: 'sms'
            }
        })
        .then(data => console.log(data))
        .catch(err => console.log(err));
    };

    _verifyCode = async () => {
        const e = this.state.code+this.state.pno;
        await axios.get("http://localhost:8000/verify/verifycode", {
            params: {
                phonenumber: e,
                code: this.state.otp
            }
        })
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }

  // initialState() {
  //   return {
  //     name: "",
  //   };
  // }
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      console.log(this.state);

      let input = {};
      input["name"] = "";
      input["email"] = "";
      input["phone"] = "";
      this.setState({
        input: input,
      });

      alert("Form is submited");
    }
  }


  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["phone"]) {
      isValid = false;
      errors["phone"] = "Please enter your phone number.";
    }

    if (typeof input["phone"] !== "undefined") {
      const pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(input["phone"])) {
        isValid = false;
        errors["phone"] = "Please enter only number.";
      } else if (input["phone"].length !== 10) {
        isValid = false;
        errors["phone"] = "Please enter valid phone number.";
      }
    }

    if (!input["comment"]) {
      isValid = false;
      errors["comment"] = "Please enter your comment.";
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  render() {
    return (
        <div className="auth-wrapper">
        <div className="auth-inner">
      <form onSubmit={this.handleSubmit}>
        
        <h3> Register </h3>
        <div className="form-group">
          <label> Your Name </label>{" "}
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="form-group">
          <label> Phone No </label>{" "}
          <input
            type="text"
            name="phone"
            value={this.state.input.phone}
            onChange={this.handleChange}
            className="form-control"
            placeholder="Enter phone No ."
          />
          <div className="text-danger"> {this.state.errors.phone} </div>{" "}
        </div>
        <div className="form-group">
          <label> Email address </label>{" "}
          <input
            type="text"
            name="email"
            value={this.state.input.email}
            onChange={this.handleChange}
            class="form-control"
            placeholder="Enter email"
            id="email"
          />
          <div className="text-danger"> {this.state.errors.email} </div>{" "}
        </div>
        <div className="form-group">
          <label> Location </label>{" "}
          <input
          name="location"
            id="autocomplete"
            class="form-control"
            placeholder="Enter location"
            type="text"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          {" "}
          Send OTP{" "}
        </button>{" "}
        <p className="forgot-password text-right">
          Already registered <a href="./login.js"> sign in ? </a>{" "}
        </p>{" "}
      </form>
      </div>
      </div>
    );
  }
}