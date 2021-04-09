import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../modal";
import history from "../../history";
import { deleteStream, fetchStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    const streamId = this.props.match.params.id;
    this.props.fetchStream(streamId);
  }
  renderActions = () => {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  };

  render() {
    const { stream } = this.props;
    return (
      <Modal
        title={!stream ? "" : `${stream.title}`}
        content={
          !stream ? "loading..." : "Are you sure you want to delete the stream?"
        }
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
