import About from './About';
import Alert from './Alert';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import {useState} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
// we have many components for that reason we use BrowserRouter 


function App() {
  const[btnText,setbtnText]=useState("light")

  const [alert,setalert]=useState(null);
  // make alert as a object which can store more values,variable stores only one value 

  //when u click on the button "to uppercase" it should show the alert message. similarly when u click on dark mode button it should show some alert message 
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type,
    })
    setTimeout(()=>{
      setalert(null);
    },3000)

  }

  const toggleMode=()=>{
    if(btnText==='light'){
      setbtnText('dark');
      document.body.style.backgroundColor='black';
      showalert("Dark Mode turned on!","success")
      document.title="Dark Mode";
    }
    else{
      setbtnText('light');
      document.body.style.backgroundColor='white';
      showalert("Light Mode turned on!","success ")
      document.title="Light Mode";

    }
  }

  

    
  

    // <h1 style={{color:'red'}}>Hey , I am tanmai</h1>
    // Functional based: props, use react hooks concept:Hooks allow function components to have access to state and other React features, this is the must thing that you should learn without this react hook you cannot build react application ok so what is react hooks basically contains use state, use effect and also it contains use reducer and so many things that we will be learning so they are preferred choice for creating simple stateless components or for using hooks to manage states in modern react

    // our js functions that return jsx
    // class based components: this keyword(which obj is active at tht point of time inside some particular class) (difficult than functional bcoz we use objects and all)
    // the basic feature of class based components is tht it is created using the js classes tht extend the react dot component class(in index.html) basically these classes they have a render method where u return the jsx tht should be displayed and after tht this class based components can manage their own state using this dot states.
    // also they can contain methods for handling user interfaces and their logic ok so this class based components of suitable for Complex components with state and life cycle needs
    // props:properties: if u wanna send some data from one component to other component(ex:from app.js to Navbar.js) just like parameters and arguments how we pass


    // project we want to build: give input as a parah or a word, tht website should show the count of the letters in the parah and also remove the spaces and give some count of the characters


    // suppose u want a value to be constant throught ur webpage, u want to change it only when u need it:

    let greet=<b>Good morning</b>;

    return (
    <>

    {/* why exact? bcoz page will be loaded only if the exact path is obtained (only if the user enters the exact path)
    home/user/account (this page is existing)
    home/user/account/user1 (this page is not existing)
    but when tht page is not existing above both are similar, so react will match and open the existing page
    */}
    <BrowserRouter>
    <Routes>
      {/* inside this we will write the individual things(which we want to display)
      path='/' this slash specifies empty path which means u r in the beginning or initial page tht should be displayed
      element is like when we r in this path , to which component i should show over there?*/}
      <Route exact path='/' element={
        <>
        <Navbar title="Tanmai Tallam" link="Links" mode={btnText} toggleMode={toggleMode} textval={btnText==='light'? "Enable Dark Mode":"Enable Light Mode"}/>

        <Alert alert={alert}/>
        
        <TextForm showalert={showalert} heading="Word counter, character counter, time counter" mode={btnText} />
        </>
        }/>
        
        {/* we shouldnt use separate routes for seperate components, to display two components we should use the concept of fragments or div/p tag to wrap up*/}

      <Route path='/About' element={
        <>

        <Navbar title="Tanmai Tallam" link="Links" mode={btnText} toggleMode={toggleMode} textval={btnText==='light'? "Enable Dark Mode":"Enable Light Mode"}/>
        
        <Alert alert={alert}/>

        <About mode={btnText}/>
        </>
        }/>
      
    
    </Routes> 
    </BrowserRouter>



    {/* <Navbar title="Tanmai Tallam" link="Links" mode={btnText} toggleMode={toggleMode} textval={btnText==='light'? "Enable Dark Mode":"Enable Light Mode"}/> */}

    

    {/* <TextForm showalert={showalert} heading="Enter the text to modify:" mode={btnText} /> */}
    {/* <About/> */}


    {/* this acts like a tag u have defined which contains all the things which are in Navbar.js  and title and link is for passing props */}
    

    {/* bootstrap is a framework of css used for styling the webpages
    its very responsive, no need to add any media queries 
    but this is very huge code(50 lines) so we have component based architecture in react: create a separate file for Navbar.js(not tht first letter should be caps for all the reactjs code) */}

    {/*div.li = this wont give emmet suggestion how we got in html, to get tht emmet feature, go to setting-search for emmet-emmet-include languages-add item=enter "javascript" and value="javascriptreact*/}

    {/* <div className="container">

          <h1>Hello {greet}</h1>
          js specific code should be written inside curly braces , u can add inside any tag
          <p className="bold ">{greet} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt temporibus, deleniti possimus sint nisi aliquid quas pariatur aperiam vero tenetur labore quod, velit sit sapiente. Possimus, iste aut. Nobis possimus dicta quod blanditiis in earum iure officia, mollitia a consequatur, architecto nam minus harum aliquid sunt neque veniam pariatur aliquam!</p>
    </div> */}
    {/* watever u write inside return , will be displayed on ur webpage */}

    </>
  );
}

export default App;

// not exporting will show this error: export 'default' (imported as 'App') was not found in './App' (module has no exports)