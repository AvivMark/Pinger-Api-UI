import React from 'react';
import './index.css';
class Host extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Hostname: this.props.Hostname,
            ipAddress: this.props.ipAddress,
            alive: this.props.alive,
        }
    }
    render(){
        return(
            <div className='container' style={{backgroundColor: this.props.alive ? "#0FCA54":"#D65365", color: "#22272E"}}>
                <div id='hostname'>{this.state.Hostname}</div> <div id='IP'>{this.state.ipAddress}</div>        
            </div>
        )
    }
}

export default Host;