import React from "react";

function Midsec() {
    return ( 
        
        <div className="container">
        <div className="row">
          <div className="col-sm">
          <div class="card" style="width: 18rem;">
             <img class="card-img-top" src="iamges" alt="Card image cap"/>
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
          </div>
          <div className="col-sm">
          <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="image2" alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        <div className="col-sm">
            <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="image1" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
          </div>
        </div>
      </div>
      

     );
}

export default Midsec;