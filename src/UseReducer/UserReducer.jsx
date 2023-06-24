import React,{useReducer} from 'react'
import Img from './Img';



function UserReducer() {

function actionname(state,action)
{
    if(action.type ==="CHANGE")
    {
        return ({ ... state,name: "Shivani Gohil"});
    }
    if(action.type ==="PLUS")
    {
        return ({ ... state,number:state.number+1});
    }
    if (action.type ==="MINUS")
    {
        return ({ ... state,number:state.number-1});
    }
    if(action.type ==="HIDE")
    {
        return ({ ... state,isImage:false});
    }
    if(action.type ==="SHOW")
    {
        return ({ ... state,isImage:true});
    }
    if(action.type ==="TOGGLE")
    {
        return ({ ... state,isImage:!state.isImage});
    }
}
const statename={
    name:"Mayur Gohil",
    number:1,
    isImage:true
}

const [state,dispatch]=useReducer(actionname,statename)




  return (
    <div className='container mt-5'>
        <button onClick={()=>{dispatch({type:"CHANGE"})}}>Change Name state</button>
        <h1>{state.name}</h1>


        <button onClick={()=>{dispatch({type:"PLUS"})}}>+</button>
        <h1>{state.number}</h1>
        <button onClick={()=>{dispatch({type:"MINUS"})}}>-</button>

        <hr/>

        <button onClick={()=>{dispatch({type:"HIDE"})}}>HIDE</button>
        <button onClick={()=>{dispatch({type:"SHOW"})}}>SHOW</button>
        <button onClick={()=>{dispatch({type:"TOGGLE"})}}>HIDE/SHOW</button><BR/>

        {state.isImage? <img/> : null}




    </div>
  )
}

export default UserReducer