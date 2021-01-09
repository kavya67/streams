import React, { Component } from "react";
//redux form
import { Field, reduxForm } from "redux-form";
// Field is a component
// reduxForm is a function similar to connect function of react redux
import { connect } from "react-redux";
import { createStream } from "../../actions";

class StreamCreate extends Component {
  renderError({ error, touched }) {
    return touched && error ? (
      <div className="ui error message">
        <div className="header">{error}</div>
      </div>
    ) : (
      ""
    );
  }
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        <div>{this.renderError(meta)}</div>
      </div>
    ); //Field component returns a object(input)
  };

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };
  render() {
    // console.log(this.props);
    const { handleSubmit } = this.props;
    return (
      <form className="ui form error" onSubmit={handleSubmit(this.onSubmit)}>
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

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You need a title!"; //Field's name property , redux form will match with error object
  }

  if (!formValues.description) {
    errors.description = "You need description!";
  }

  return errors;
};

const formWrapped = reduxForm({
  form: "StreamCreate",
  validate, //hooking up the validate function with redux form
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
