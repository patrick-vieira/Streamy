import React from 'react';
import {connect} from "react-redux";
import {fetchStream} from "../../store/actions/streams";


class StreamShow extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.streamId);
  }

  renderStream() {
      if(!this.props.stream){
        return <div>Loading!</div>
      }

      const {title, description} = this.props.stream;

      return (
          <div>
            <h1>{title}</h1>
            <h5>{description}</h5>
          </div>)
  }

  render() {
    return <div>
      {this.renderStream()}
    </div>
  }
}

const mapStateToProps = (state, ownProps) => {
  let {id} = ownProps.match.params;

  return {
    streamId: id,
    stream: state.streams[id]
  }
};


export default connect(mapStateToProps, {fetchStream})(StreamShow);