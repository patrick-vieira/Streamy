import React from 'react';
import _ from 'lodash';
import {connect} from "react-redux";
import {editStream, fetchStream} from "../../store/actions/streams";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {

  componentDidMount() {
      this.props.fetchStream(this.props.streamId);
  }

  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.editStream(this.props.streamId, formValues);
  };

  render() {

    if(!this.props.stream){
      return <div>Loadins...</div>
    }

    return (
        <div>
          <h3>Edit Stream</h3>
          <StreamForm
              initialValues={_.pick(this.props.stream, 'title', 'description')}
              onSubmit={this.onSubmit}
          />
        </div>
    );
  }

}

const mapStateToProp = (state, ownProps) => {
  let { id } = ownProps.match.params;
  return {
    streamId: id,
    stream: state.streams[id]
  }
};

export default connect(mapStateToProp, { fetchStream, editStream })(StreamEdit);