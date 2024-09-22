import React from 'react'

function Alert(props) {

    const capitalize=(word)=>{
        // if the type is in canelcase then first we have to convert to lowercase
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
        // we are putting a caps to the first letter and then concatenating the rest from 1st index
    }


  return (
    // here we used cls(cumulative layout shift(should be good)=when content shifts down,it will be a problem so we use height)
    <div style={{height:'50px'}}>
        {/* in react, for if else statement(easy approach) we use:
        props.alert && -> if this has valid, execute else no*/}
        {props.alert &&
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)} : </strong>{props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>}
    </div>
  )
}

export default Alert;
