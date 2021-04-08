import React from "react";
import { connect } from "react-redux";
//actions
import { fetchStream, editStream } from "../../actions";
//stream form
import StreamForm from "./StreamForm";
//

//lodash
import _ from "lodash";

class StreamEdit extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchStream(id);
  }
  onSubmit = (formValues) => {
    const id = this.props.match.params.id;
    this.props.editStream(id, formValues);
  };
  render() {
    const { stream } = this.props;
    if (!stream) {
      return <div>loading....</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
