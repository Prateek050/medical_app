import React from 'react';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 
function Star({ selected, onClick }) {
  return (
    <span onClick={onClick} style={{ cursor: 'pointer' }}>
        {selected ? <i className="fa fa-star" style={{ cursor: 'pointer', color: "yellow" }}></i> : <i className="fa fa-star-o"></i>}
    </span>
  );
}

export default Star;