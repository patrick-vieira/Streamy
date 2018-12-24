import React from 'react';
import Modal from "../modals/Modal";
import history from '../../history';
import {connect} from "react-redux";
import {deleteStream, fetchStream} from "../../store/actions/streams";
import {Link} from "react-router-dom";

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.streamId);
    }

    actionsFragment() {
        return (
            <React.Fragment>
                <button className='ui button negative'
                        onClick={() => this.props.deleteStream(this.props.streamId)}>Delete</button>
                <Link to='/' className='ui button'>Cancel</Link>
            </React.Fragment>
        );
    };

    contentFragment() {
        if (!this.props.stream) {
            return <div>Loadins...</div>
        }

        return (
            <React.Fragment>
                <div className="ui card">
                    <div className="content">
                        <div className="header">{this.props.stream.title}</div>
                        <div className="meta">
                            <span>2 days ago</span>
                            <a>Animals</a>
                        </div>
                        <p>{this.props.stream.description}</p>
                    </div>
                </div>
            </React.Fragment>
        );
    };

    render() {
        return (
            <Modal
                title='Delete Stream'
                content={this.contentFragment()}
                actions={this.actionsFragment()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let {id} = ownProps.match.params;

    return {
        streamId: id,
        stream: state.streams[id]
    }
};

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);