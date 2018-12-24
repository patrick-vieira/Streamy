import React from 'react';
import {connect} from "react-redux";
import {fetchStreams} from "../../store/actions/streams";
import {Link} from "react-router-dom";


class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin = (stream) => {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className='right floated content'>
                    <Link to={`/streams/edit/${stream.id}`} className='ui button primary'>
                        EDIT
                    </Link>
                    <Link to={`/streams/delete/${stream.id}`} className='ui button negative'>
                        DELETE
                    </Link>
                </div>
            );
        }
    };

    renderStreamInfo = (stream) => {
        return (
            <div className="left floated content">
                <Link to={`/streams/${stream.id}`} className="header">{stream.title}</Link>
                <div className="meta">
                    ahoy
                </div>
                <div className="description">
                    {stream.description}
                </div>
            </div>
        );
    };

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className='card' key={stream.id}>
                    <i className='large icon aligned icon camera'/>
                    <div className='content'>
                        {this.renderStreamInfo(stream)}
                        {this.renderAdmin(stream)}
                    </div>
                </div>
            );
        });
    };

    renderCreate() {
        if (this.props.isUserSignedIn) {
            return (
                <div style={{textAlign: 'right'}}>
                    <Link to='/streams/new' className='ui button primary'>
                        Create Stream
                    </Link>
                </div>
            );
        }
    }


    renderGrid() {
        return (
            <div className="ui internally celled grid">
                <div className="row">
                    <div className="three wide column">
                        <img ref='https://via.placeholder.com/300x250?text=300x250+MPU' alt='ads'/>
                    </div>

                    <div className="ten wide column">
                        <div className="ui grid">
                            <div className="ten wide column">
                                <h2>Streams</h2>
                            </div>
                            <div className="six wide column">
                                {this.renderCreate()}
                            </div>
                        </div>
                    </div>

                    <div className="three wide column">
                        <img ref='https://via.placeholder.com/300x250?text=300x250+MPU' alt='ads'/>
                    </div>
                </div>


                <div className="row">
                    <div className="three wide column">
                        <img ref='https://via.placeholder.com/300x250?text=300x250+MPU' alt='ads'/>
                    </div>
                    <div className="ten wide column">
                        <div className="ui link cards">
                            {this.renderList()}
                        </div>
                    </div>
                    <div className="three wide column">
                        <img ref='https://via.placeholder.com/300x250?text=300x250+MPU' alt='ads'/>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderGrid()}
            </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isUserSignedIn: state.auth.isSignedIn
    }
};

export default connect(mapStateToProps, {fetchStreams})(StreamList);