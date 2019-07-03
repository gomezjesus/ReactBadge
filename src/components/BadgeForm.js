import React from "react";

class BadgeForm extends React.Component {
  state = {};
  handleChange = e => {
    // console.log({ name: e.target.name, value: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    console.log("button was clicked");
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Form submitted");
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>First Name</label>
            <input
              onChange={this.handleChange}
              className='form-control'
              name='firstName'
              type='text'
              value={this.state.firstName}
            />
            <label>Last Name</label>
            <input
              onChange={this.handleChange}
              className='form-control'
              name='lastName'
              type='text'
              value={this.state.lastName}
            />
            <label>Email</label>
            <input
              onChange={this.handleChange}
              className='form-control'
              name='email'
              type='email'
              value={this.state.email}
            />
            <label>Job Title</label>
            <input
              onChange={this.handleChange}
              className='form-control'
              name='jobTitle'
              type='text'
              value={this.state.jobTitle}
            />
            <label>Twitter</label>
            <input
              onChange={this.handleChange}
              className='form-control'
              name='twitter'
              type='text'
              value={this.state.twitter}
            />
          </div>
          <button onClick={this.handleClick} className='btn btn-primary'>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
