
import { Component } from "react";


class MappingTable extends Component {
    state = {
        Country : [
            { id: 1, Country: "Brazil", points: 277 },
            { id: 2, Country: "Italy", points : 133 },
            { id: 3, Country: "Germany", points : 124 }
        ]
     } 

     handleDelete = (CountryID) => {
        console.log("Deleting.." + CountryID);

        const filteredData = this.state.Country.filter( CountryData => CountryData.id != CountryID );

        this.setState({
            Country: filteredData
        });

        console.log("Deleted...");

     }

    render() { 
        return (
            <div>
                <h1 style={{marginLeft:"100%"}}>Mens Ranking</h1>
                <table className="table table-bordered"  style={{marginLeft:"100%"}}>
                    <tr>
                        <th>#</th>
                        <th>Country</th>
                        <th>Points</th>
                        <th>Operations</th>

                        
                    </tr>

                    {

                        this.state.Country.map((CountryRecord, key) => (
                          
                            <tr key={CountryRecord.id}>
                                <td><img  src={require('./image1.webp')} alt="" style={{height:"50px",with:"50px"}}/>{CountryRecord.id}</td>
                                <td >{CountryRecord.Country}</td>
                                <td>{CountryRecord.points}</td>
                                <button className="btn btn-danger" onClick={() => this.handleDelete(CountryRecord.id)}>Delete</button>
                            </tr> 
                            
                        ))



                    }


                </table>
            </div>
        );
    }
}
 
export default MappingTable;
