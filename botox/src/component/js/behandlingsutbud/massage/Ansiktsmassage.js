import React from 'react';
import massage1 from '../../../img/massage1.jpg';

import '../../../css/Massage.css';


const AnsiktsMassage = () => {
  return (
    <div>
    <header className="massage-header" style={{ backgroundImage: `url(${massage1})` }}>
      <div className="massage-overlay">
        <h1 className="massage-title">Ansikts Massage</h1>
        <p className="massage-description">
        Ansikts Massage...... .
        </p>
        
      </div>
    </header>
    </div>
 )
}
    export default AnsiktsMassage;