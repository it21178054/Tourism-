import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
//import 'C:/Users/januk/Desktop/zip/page/client/src/css/Admin.css'
import 'C:/Users/januk/Desktop/Fullstack/event management/frontend/src/Style/search.css'


export default class Admin extends Component{

    constructor(props){
        super(props);
        this.state = {Event : [],
          searchQuery:'',
        };
    }

    componentDidMount() {
      this.fetchData();
    }
  
    componentDidUpdate(prevProps, prevState){
      if (prevState.Event !== this.state.Event) {
        this.fetchData();
      }
    }
    fetchData = () => {
        axios.get(`http://localhost:8010/Event/get`)
        .then((Response)=> {
            this.setState({ Event : Response.data });
        })
        .catch(function   (error) {
            console.log(error);
         });

    };
    handleInputChange = (event) => {
      this.setState({
        searchQuery: event.target.value,
      });
    };

    filteredRows = () => {
      return this.state.Event.filter((row) =>
        Object.values(row)
          .join('')
          .toLowerCase()
          .includes(this.state.searchQuery.toLowerCase())
      );
    };

    tabRow() {
      return this.filteredRows().map(function (object, i) {
        return <TableRow obj={object} key={i} />;
      });
    }
  





    render(){
        return(

            

            <div>


            
         

                <h1 align="center">Event List</h1>
                <div id="admin-search" style={{ marginBottom: 20 }}>
                <input
                   type="text"
                   placeholder="Search here"
                   value={this.state.searchQuery}
                   onChange={this.handleInputChange}
                 />
                 </div>
                 <table className="table table-stripped table " style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>date</th>
                            <th>place</th>
                            <th>count</th>
                            <th>email </th>
                            <th>telephone </th>

                            <th colSpan="2">Acttion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>


                </table>

                
            </div>

            
        );
    }
}