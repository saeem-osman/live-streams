import React, { Component } from 'react'

class GoogleAuth extends Component {
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId: '526972329429-68eo5utq581etgit09lsttnfjadh17je.apps.googleusercontent.com',
                scope: 'email'
            })
        })
    }
    render(){
        return(
            <div>Google Auth</div>
        )
    }
}

export default GoogleAuth