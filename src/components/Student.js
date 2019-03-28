import React from 'react';
import { Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Student extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            studentInfo: []
        }
    }

    componentDidMount() {
        console.log(this.props)
        fetch(`https://protected-fjord-38824.herokuapp.com/api/v1/students/${this.props.match.params.studentId}`, {
            method: 'GET'
          })
        .then( response => response.json())
        .then( data =>{
            console.log(data)
          this.setState({
            studentInfo: data.data
          })
        })
        .catch(e => alert(e))
    }    

    render() {
        console.log(this.state.studentInfo)
        var classList = this.props.match.params.class;
        return(
            <React.Fragment>
            <div className="student">   
            {this.state.studentInfo.map(student =>        
                <Card key={student._id} className="student_card" bg="light" style={{ width: '18rem' }}>
                    <Card.Header>
                        <h3>{student.first_name} {student.last_name}</h3>
                    </Card.Header>
                    <Card.Body>
                    <Card.Text>
                        <h6>Grade: {student.grade}</h6>
                        <h6>Email: {student.email}</h6>
                    </Card.Text>
                    </Card.Body>                             
                </Card>)}
                <Link className="link_back" to={"/classlist/" + classList}><Button className="btn_back" variant="light">Back</Button></Link>
            </div>
            </React.Fragment>
        );
    }
}

export default Student;