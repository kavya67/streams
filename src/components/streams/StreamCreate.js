import React, { Component } from "react";
//redux form
import { Field, reduxForm } from "redux-form";
// Field is a component
// reduxForm is a function similar to connect function of react redux

class StreamCreate extends Component {
  renderInput({ input, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    ); //Field component returns a object(input)
  }

  onSubmit = (formValues) => {
    console.log(formValues);
  };
  render() {
    // console.log(this.props);
    const { handleSubmit } = this.props;
    return (
      <form
        className="ui form"
        onSubmit={handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui primary button">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "StreamCreate",
})(StreamCreate);
