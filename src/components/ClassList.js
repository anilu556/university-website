import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class ClassList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            students: []
        }
    }

    componentDidMount() {
       
        fetch(`https://protected-fjord-38824.herokuapp.com/api/v1/classes/${this.props.match.params.class}`, {
            method: 'GET'
          })
        .then( response => response.json())
        .then( data =>{
          console.log(data)
          this.setState({
            students: data.data
          })
        })
        .catch(e => alert(e))
    }
              

    render() {
        console.log(this.props);
        console.log(this.state.students);
        return(
            <div className="classlist">
                
                <h1>{this.props.match.params.class}</h1>
                <h2>ClassList:</h2>
                {this.state.students.map(student => 
                <Link className="links" key={student._id} to={`/${this.props.match.params.class}/student/${student._id}`}>
                <ListGroup className="list">
                    <ListGroup.Item>{student.first_name} {student.last_name}</ListGroup.Item>
                </ListGroup>
                </Link>)}
                <Link to="/"><Button className="btn_back" variant="light">Back</Button></Link>
            </div>
        );
    }
}

export default ClassList;