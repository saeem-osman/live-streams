import React, { Component } from 'react'

class GoogleAuth extends Component {
    state = {
        isSignedIn : null
    }
    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId : '526972329429-68eo5utq581etgit09lsttnfjadh17je.apps.googleusercontent.com',
                scope : 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({
                    isSignedIn : this.auth.isSignedIn.get()
                })
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = () =>{
        this.setState({
            isSignedIn : this.auth.isSignedIn.get()
        })
    }
    onSignedIn = () =>{
         this.auth.signIn()
        
    }
    onSignedOut = () =>{
         this.auth.signOut()
    }

    renderAuthenticationChange(){
        if(this.state.isSignedIn === null){
            return null;
        }
        else if(this.state.isSignedIn){
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

export default GoogleAuth