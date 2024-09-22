// rfc: react functional component
import './TextForm.css';
import {useState} from 'react';

export default function TextForm(props) {


  const handleUpClick=()=>{
    if(text.length>0){
      console.log("upper case was clicked "+ text);
      let newText=text.toUpperCase();
      setText(newText);
      // setText("You clicked on handleupclick");
      //why we use console is bcoz in s/w development we will use this strict for the purpose of debugging
      props.showalert("Converted to Upper Case","success")
    }
  }

  const handleDownClick=()=>{
      if(text.length>0){
        console.log("upper case was clicked "+ text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showalert("Converted to Lower Case","success")
      }
  }

  const handleOnChange=(event)=>{
    //it is the value tht u r obtaining after onchange has been applied
    console.log("on change");
    setText(event.target.value);
    
  }
  const handleDelete=()=>{
    if(text.length>0){
      setText("");
      props.showalert("Message is Deleted","warning")
    }
  }
  



  // syntax for states: const [current state, updated state]=useState("default state")=for the first time what will current state have 
  const[text,setText]=useState("");

  //text="changed value"; -> this is wrong bcoz u should nly use the concept of usestate to reassign any value or update 

  // settext("New text");
  // we are updating text usin setText
  // console.log(text);

  return (
    <div className='container' style={{color:props.mode==='dark'? 'white':'black'}}>

        <h1 className="mb-3">{props.heading}</h1>
        {/* mb is margin bottom */}

        <div className="mb-3">
        {/* <label htmlFor="exampleFormControlTextarea1" className="form-label" >{props.heading}</label> */}
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'? 'white':'black', color:props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-4" style={{backgroundColor:"blue"}} onClick={handleUpClick} >To Upppercase </button>

        <button disabled={text.length===0} className="btn btn-primary mx-4  my-3"  onClick={handleDownClick} >To Lowercase </button>


        <button disabled={text.length===0} className="btn btn-secondary mx-4" style={{backgroundColor:"blue"}}onClick={handleDelete} >Delete Content</button>

        <div >
          <h1>your text summary</h1>

          <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>

          <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes takes to read</p>
          {/* 1 minute / 125 words = 1 word can be read in 0.0088 milliseconds */}
          <h1>preview</h1>
          <p>{text.length>0 ? text :"Nothing to preview!"}</p>
          {/* u want to add preview of the text */}

        </div>
        {/* mx-4 is used for spacing -margin x-axis 4units of space */}


        {/* one way of styling in bootstrap (using classname)*/}
        {/* <button>Convert</button>  */}
        {/* simple button with no stylings */}

        {/* now our job is to convert the given string into uppercase, we will make use of state in react(always write states inside function)*/}
    </div>
  )
}
