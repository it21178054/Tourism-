import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class TableRow extends Component {
  constructor(props) {
    super(props);

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick(e) {
    e.preventDefault();
    
    axios
      .delete(`http://localhost:8010/Event/delete/${this.props.obj._id}`)
      .then((res) => {
        alert("Are you sure?");
        console.log('Deleted successfully!');
        this.props.onUpdate(); // Call the onUpdate function to refresh the data
      })
      .catch((error) => {
        console.log(error);
    });
  }

  render() {
    
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.telephone}</td>
        <td>{this.props.obj.place}</td>
        <td>{this.props.obj.count}</td>
        <td>{this.props.obj.date}</td>
        <td>{this.props.obj.date}</td>
        <td>{this.props.obj.email}</td>
        
        <td>
          <Link className="btn btn-success" id="edit-btn" to={`/update/${this.props.obj._id}`}>
            <i className="fas fa-edit"></i>&nbsp;Edit
          </Link>
        </td>

        <td>
          <button type="submit" className="btn btn-success" onClick={this.handleDeleteClick} >
          <i className="fas fa-trash-can"></i>&nbsp;Delete
          </button>
        </td>

      </tr>
    );
  }
}

export default TableRow;
