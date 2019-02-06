import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const PageOne = () =>{
    return(
        <div>
            This is from pageOne. <br />
            <button><Link to="/pagetwo">ClickMe </Link></button>
        </div>
    )
}

const PageTwo = () =>{
    return(
        <div>
            This is a nice little page Two.
            <br />
            <button><Link to="/">ClickMe </Link></button>
            
        </div>
    )
}
const App = () =>{
    return(
        <div>
            <BrowserRouter>
                <div>
                    <Route path='/' exact component={PageOne} />
                    <Route path='/pagetwo' component={PageTwo} />
                </div>
            
            </BrowserRouter>
        </div>
    )
}

export default App