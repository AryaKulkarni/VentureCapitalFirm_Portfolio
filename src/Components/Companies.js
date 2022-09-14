import CompaniesData from "./CompaniesData"
import {useState} from "react"



export default function Companies(props) {
// const [clicked,setClicked]=useState(false)
// console.log(clicked)

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        // reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


// function buttonClick() {
//     setClicked((prevClicked)=> !prevClicked)
// }


    // if(!clicked) {
    // // return (
    // //     <div className="companiesList">
    // //     <img src={props.company.imageURL} className="companyImage"/>
    // //     <h1>{props.company.name}</h1>
    // //     <h1>{props.company.category}</h1>
    // //     <button onClick={buttonClick} className="companyButton" >&#9660;</button>
    // //     </div>
    // // )
    // }
    // else {
        console.log(props.company.imageURL)
        return (
            <div className="companiesList" style={{height:"100vw"}}>
            <h1 className="companyName">{props.company.name} ({props.company.category})</h1>
                    <img src={props.company.imageURL} className="companyImage" style={{marginBottom:"10%",marginTop:"1.5%",marginRight:"10%"}}/>
                    <img src={props.company.imageURL2} className="companyImage" style={{clear:"left",marginTop:"50px",marginRight:"10%",marginBottom:"30px"}}/>
                    <div>
                    {/* <button onClick={buttonClick} className="companyButton" style={{float:"right"}}>&#9650;</button> */}
                    <p style={{marginTop:"5%"}}>{props.company.description}</p>
                    </div>
                    <div className="GreenStyle" style={{textAlign:"right"}}>
                    <p><a href={props.company.website}>Visit Company Site</a></p>
                    </div>

            </div>
        )
    // }

}