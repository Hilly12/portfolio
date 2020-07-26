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
      zIndex: 2,
      display: "inline-flex"
    }}>
      <button className="btn-xxs btn-danger btn-popup-close" onClick={props.toggle}>x</button>
      <div style={{textAlign: "left", marginRight: "20px"}}>
        <h6 style={{ lineHeight: "10px"}}>Cookie Consent</h6>
        <p style={{fontSize: '12px'}}>
          By continuing to browse or clicking 'Accept', you agree to the storing of cookies on your device to enhance
          your site experience.
        </p>
      </div>
      <div style={{justifyContent: "centser"}}>
        <Button onClick={props.toggle} size="sm" color="primary" className="text-nowrap" style={{marginTop: "5%"}}>
          Accept and close
        </Button>
      </div>
    </div>
  );
}

export default CookieBanner;