import React,{useState} from 'react'

export default function About(props) {

    // const[btnText,setbtnText]=useState("Enable Dark Mode")

    // const [myStyle,setmyStyle]=useState({
    //     color:'black',
    //     backgroundColor: 'white'
    // })

    // let myStyle={
    //     color:'white',
    //     backgroundColor: 'black'
    // }

    // let toggleStyle=()=>{
    //     if(myStyle.color==='white'){
    //         setmyStyle({
    //             color:'black',
    //             backgroundColor:'white'

    //         })
    //         setbtnText("Enable Dark Mode")
    //     }
    //     else{
    //         setmyStyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         setbtnText("Enable Light Mode")
    //     }
    // }
    let myStyle={
        color:props.mode==='dark'? 'white':'black',
        backgroundColor:props.mode==='dark'? 'black':'white',
        border: '2px solid',
        borderColor:props.mode==='dark'? 'white':'black',
    }

  return (
    <div class="container" style={myStyle}>
        <h2>About Us</h2>
      <div className="accordion" id="accordionExample" >
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button  className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle} >
        Analize your text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={myStyle}>
      <div className="accordion-body">
        <strong>This will analize your text</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
        You dont have to pay
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
      <div className="accordion-body">
        <strong>This website provides free services</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
        Available on all browsers
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
      <div className="accordion-body">
        <strong>This is available on all devices.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    {/* <div className="container">
        <button onClick={toggleStyle} type='button' className="btn btn-primary my-4">{btnText}</button>
    </div> */}
    </div>
  )
}
