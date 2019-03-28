import React from 'react';
import { Button } from 'react-bootstrap';

import {Link} from 'react-router-dom';

class Home extends React.Component {
    render() {
        return(
              
            <ul className="home">
            <li><Link to="/classlist/MATH1010"><Button className="btn_class" variant="light">Math 1010</Button></Link></li>
            <li><Link to="/classlist/ENG2010"><Button className="btn_class" variant="light">English 2010</Button></Link></li>
            <li><Link to="/classlist/BIO2020"><Button className="btn_class" variant="light">Biology 2020</Button></Link></li>
            </ul>
          
        );
    }
}

export default Home;