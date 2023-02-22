import React from 'react';
import './index.css';
class Host extends React.Component {
  render() {
    return (
      <div>
        <div className="hostBox">
          <div id='hostname'>Hostname</div><div id='ip'>100.100.100.100</div>
         </div>
      </div>
    );
  }
}

export default Host;