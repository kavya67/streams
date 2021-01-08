import React, { Component } from "react";
//redux form
import { Field, reduxForm } from "redux-form";
// Field is a component
// reduxForm is a function similar to connect function of react redux

class StreamCreate extends Component {
  renderInput({ input }) {
    return <input {...input} />; //field returns a object
  }
  render() {
    console.log(this.props);
    return (
      <form>
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm({
  form: "StreamCreate",
})(StreamCreate);
