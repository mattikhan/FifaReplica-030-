
import Cards from "./cards";
import Footer from "./footer";
import Header from "./header";
import MappingTable from "./table";
function MAIN() {
    return ( <div>
        



<div class="row" style={{border:"1px solid black"}}>
  
  <Header/>

</div>
<div class="row"style={{}}>
 <div class="col-lg-10"style={{width:"300px"}}>

 <div class="row"style={{height:"73.3%",backgroundColor:"lightblue"}}>
{/* uper bar */}

<h2 style={{marginTop:"-300px",marginLeft:"20%",fontWeight:"bold"}}>FIFA</h2>

<p style={{marginTop:"-700px" ,marginLeft:"5%",fontWeight:"bold"}}>
The 2022 FIFA World Cup is an international football tournament contested by the men's national teams of FIFA's member associations, and the 22nd FIFA World Cup. It is taking place in Qatar from 20 November to 18 December 2022
</p>
 </div>
 <div class="row"style={{height:"40%",backgroundColor:"lightcyan"}}>
{/* lowerbar */}
   

 </div>
 
 </div>
 
 <div class="col-lg">
 <div class="row"style={{backgroundColor:"lightblue"}}>

<Cards/>


 <div>
   {/* <Small/> */}
 </div>
 </div>
 
 <div class="row"style={{backgroundColor:"white"}}>
   <div style={{marginTop:"10%",marginLeft:"-9%" ,display:"flex"}}>

    <MappingTable/>
   {/* <WOMAN val1={count} val2={count1}val3={count2}  point0={points}   point1={points1}  point2={points2}           /> */} 
   </div>
   <div style={{marginTop:"10%"}}>

    
  

   </div>
 </div>

   
 </div>
 {/* <div class="col-lg-10"style={{border:"1px solid black",height:"100vh",width:"300px"}}>
   <h1>Right-side bar</h1>
 </div> */}
</div>
<div class="row"style={{}}>
 <Footer/>
  </div>

  </div>
                                                                                       
        



 );
}

export default MAIN;