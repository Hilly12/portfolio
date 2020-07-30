import React, { Component } from 'react';

export default class Placeholder extends Component {
  render() {
    return (
      <div className="placeholder border-bottom" style={{width: '100%'}}>
        <div className="spinner" style={{margin: '23% auto auto'}}>
          <div className="rect1"/>
          <div className="rect2"/>
          <div className="rect3"/>
          <div className="rect4"/>
          <div className="rect5"/>
        </div>
      </div>
    );
  }
}