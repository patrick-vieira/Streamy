import React from 'react';
import connect from "react-redux/es/connect/connect";
import {signIn, signOut} from "../../store/actions";

class GoogleAuth extends React.Component {
    state = { isSignedIn: null};


    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '315007153825-hogg8mvf981rkcme6umm9okmbsp94p73.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getBasicProfile());
        } else {
            this.props.signOut();
        }
    };

    signInClick = () => {
        this.auth.signIn();
    };
    signOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton = () => {
        if(this.props.isSignedIn == null) {
            return null
        } else if (this.props.isSignedIn){
            return (

                <div className="ui small button animated fade " tabIndex="0">
                    <div className="visible content ">
                        <img className="ui avatar image" src={`${ this.props.userProfileImage}`} alt='profile' />
                        <span> {`${ this.props.userName}`}</span>
                    </div>
                    <div className="hidden content"  onClick={this.signOutClick}>
                        Sign Out
                    </div>
                </div>


            )
        } else {
            return (
                <button className='ui red google button' onClick={this.signInClick}>
                    <i className='google icon'/>
                    Sign In
                </button>
            )
        }
    };

    render() {
        return (<div> { this.renderAuthButton() }</div>);
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn,
        userProfileImage: state.auth.userProfileImage,
        userName: state.auth.userFullName
    }
};

export default connect(mapStateToProps, { signIn, signOut})(GoogleAuth);