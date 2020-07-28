import React from "react";
import {Button} from "reactstrap";

function CookieBanner(props) {
  return (
    <div style={{
      backgroundColor: "#eeeeee",
      borderTop: "1px solid #c7c7c7",
      padding: "10px",
      paddingTop: "20px",
      justifyContent: "center",
      position: "fixed",
      left: "0",
      bottom: "0",
      width: "100%",
      zIndex: '2',
      display: "inline-flex",
      paddingBottom: '20px'
    }}>
      <button className="btn-xxs btn-danger btn-popup-close" onClick={props.toggle}>x</button>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "left",
        marginRight: "30px"
      }}>
        This website uses cookies to improve your experience.
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button onClick={props.toggle} size="sm" color="primary" className="text-nowrap" style={{ minWidth: '100px' }}>
          Got it!
        </Button>
      </div>
    </div>
  );
}

export default CookieBanner;