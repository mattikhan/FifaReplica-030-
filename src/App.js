import React, { Component } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import MAIN from "./component/mainpage";

function App() {
  return (
    <div>
       <MAIN/>








       
       
{/*       
      <Men/>
      <Women/> */}
      
      {/* <Router>
      <Midsec/>
      <Header title="AboutFifa"/>
      <Footer/>
      
        <Nav/>
        <Routes>
          <Route path="/aboutfifa"element={<AboutFifa/>}/>
          <Route path="/users"element={<FootballDev/>}/>
          <Route path="/setting"element={<Socialimp/>}/>
          <Route path="/aboutus"element={<WorlRank/>}/>
          <Route path="/aboutus"element={<TournOnFifa/>}/>
          <Route path="/aboutus"element={<Technical/>}/>
         
          
          
        </Routes>
      </Router> */}
     
      
    </div>
   
  );
}

export default App;
