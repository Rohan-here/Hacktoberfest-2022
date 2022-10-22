import React from "react";
import Home from "./Components/Home/Home";
import About from "./Components/AboutUs/about";
import Bookseller from "./Components/Bookseller/Booksellerpage";
import Comparison from "./Components/Comparison/Comparisonpage";
import Bschool from "./Components/Bschool/Bschoolpage";
import Form_switch from "./Components/Auth/form_switch";
import About_school from "./Components/School_info/About_school_flow";
import Admsn_flow from "./Components/School_info/admission_flow";
import Schestore_flow from "./Components/School_info/schoolestore_flow";
import Job_flow from "./Components/School_info/jobs_flow";
import People_flow from "./Components/School_info/people_flow";
function App() {
  return (
    <div>
    {/* <Form_switch/> */}
    {/* <Home/> */}
    {/* <About/> */}
    <About_school/>
    {/* <Admsn_flow/> */}
    {/* <Schestore_flow/> */}
    {/* <Job_flow/> */}
    {/* <People_flow/> */}
     <Bookseller/>
     <Comparison/> 
     <Bschool/> 
    </div>
  );
}
export default App;
