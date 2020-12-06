import React, {useState,useContext} from 'react'
import {MyContext} from '../App'
function Simple(props) {
 const simpleContext=useContext(MyContext);
    return (
        <React.Fragment>
        <div>
          <button onClick={()=>{simpleContext.countDispatch('increment')}}>
              increment
          </button>
            <button onClick={()=>{simpleContext.countDispatch('decrement')}}>
                decrement
            </button>
            <button onClick={()=>{simpleContext.countDispatch('reset')}}>
                Reset
            </button>
        </div>
        </React.Fragment>
    )
}
export default Simple