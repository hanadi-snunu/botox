import React, { useState } from "react";
import "../../../css/behandlingsutbud.css"; // Se till att CSS för prisdesignen finns här.

const PriceSection = ({ title, prices }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="price-section">
      <div className="price-header" onClick={() => setOpen(!open)}>
        <span className="price-title">{title}</span>
        <span className="price-toggle">{open ? "−" : "+"}</span>
      </div>

      {open && (
       <table className="pricing-table">
       <thead>
         <tr>
           <th>Behandling</th>
           <th>Ord. pris</th>
           <th>Årskort</th>
         </tr>
       </thead>
       <tbody>
         {prices.map((item, index) => (
           <tr key={index}>
             <td>{item.name}</td>
             <td>{item.ordPris} kr</td>
             <td>{item.arskort} kr</td>
           </tr>
         ))}
       </tbody>
     </table>
  
      )}
    </div>
  );
};

export default PriceSection;
