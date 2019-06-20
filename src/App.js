import React from 'react'
import {connect} from 'react-redux'
import {increment,decrement} from "./actions/counterAction"
import {fetchPosts} from "./actions/fetchAction"

const App = (props) => 
{

    console.log(props)
     return (
 <div>
     
     <button onClick={ () => props.increment()}>Increment</button>
     <button onClick={ () => props.decrement()}>Decrement</button>
     counter value: {props.counter}
     <button onClick={()=> props.fetchPosts()}>Load data</button>
     
     <div>value: </div>
     </div>

 )
}

const mapStateToprops = (state) => { 
    console.log(state)
    return{
        counter:state.counter, fetch:state.fetchPosts
    }
}

export default connect(mapStateToprops,{increment,decrement, fetchPosts})(App)