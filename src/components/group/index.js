import React from 'react';
import './index.css';
import Host from '../host';
class Group extends React.Component {

    render() {
        return (
            <div className='group' style={{
                backgroundColor: 'rgba(39,41,83)'
            }}>
                <div className='groupHeader'>
                    <u>MiniBlade - Nahal Oz - Mars</u>
                    <br></br><b>ZD6643GMKSF</b>
                </div>
                <Host></Host>
                <Host></Host>
                <Host></Host>
                <Host></Host>
                <Host></Host>
                <Host></Host>
                <Host></Host>
                <Host></Host>
                <Host></Host>
                <Host></Host>
                <Host></Host>
                <Host></Host>
            </div>
        );
    }
}

export default Group