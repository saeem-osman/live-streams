import React, { Component } from 'react'
import { connect } from 'react-redux'
import {signIn, signOut} from '../actions'

class GoogleAuth extends Component {
    
    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId : '526972329429-68eo5utq581etgit09lsttnfjadh17je.apps.googleusercontent.com',
                scope : 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn) =>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }
    onSignedIn = () =>{
         this.auth.signIn()
        
    }
    onSignedOut = () =>{
         this.auth.signOut()
    }

    renderAuthenticationChange(){
        if(this.props.isSignedIn === null){
            return null;
        }
        else if(this.props.isSignedIn){
            return(
                <div>
                    <button onClick={this.onSignedOut} className="ui goodle red button">
                        <i className="goodle icon" />
                        Sign Out
                    </button>
                </div>
            )
        }else{
            return(
                <div>
                    <button onClick={this.onSignedIn} className="ui google red button">
                        <i className="google icon" />
                        Sign In with Google
                    </button>
                </div>
            )
        }
    }

    render(){
        return(
            <div>
                {this.renderAuthenticationChange()}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        isSignedIn : state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {signIn,signOut})(GoogleAuth)