import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Skeleton} from "antd";
import cdn from "../assets/images/cdn";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCrown} from "@fortawesome/free-solid-svg-icons/faCrown";
import Image from "./Image";
import Placeholder from "./Placeholder";
import {faClock} from "@fortawesome/free-solid-svg-icons/faClock";
import {faUsers} from "@fortawesome/free-solid-svg-icons/faUsers";


function parse(date) {
  let year = date.slice(0, 4);
  let month = parseInt(date.slice(5, 7));
  let monthName;
  switch (month) {
    case 1:
      monthName = "January";
      break;
    case 2:
      monthName = "February";
      break;
    case 3:
      monthName = "March";
      break;
    case 4:
      monthName = "April";
      break;
    case 5:
      monthName = "May";
      break;
    case 6:
      monthName = "June";
      break;
    case 7:
      monthName = "July";
      break;
    case 8:
      monthName = "August";
      break;
    case 9:
      monthName = "September";
      break;
    case 10:
      monthName = "October";
      break;
    case 11:
      monthName = "November";
      break;
    case 12:
      monthName = "December";
      break;
    default:
      monthName = "";
  }
  return [monthName, year].join(' ');
}

class Project extends Component {
  render() {
    const { id, title, imgSrc, pretext, timespan, date, content } = this.props.item;
    const loading = this.props.loading;

    return (
      <div
        style={{ display: "flex", textAlign: "left" }}
        className="provider-list-card needAjaxFormContainer shadowDiv"
      >
        <Skeleton loading={loading}>
          <div className="provider-left-block textAlignCen">
            <div className="provider-image-block ">
              <Image src={imgSrc}// {cdn.baseURL + cdn.ImgURL + cdn.ImgDir + imgSrc}
                     classes="provider-img lazyImage not-loaded-spinner"
                     placeholder={<Placeholder/>} delay={200}/>
              {/*<span className="sponsFeaturedTag"><FontAwesomeIcon icon={faCrown}/></span>*/}
            </div>
          </div>
          <div className="provider-list-details pos-rel">
            <div className="row">
              <div className="col-md-6">
                <h5 style={{ margin: '0px 0px 5px 0px' }}>{title}</h5>
              </div>
              <div className="col-md-6 period-holder">
                <span className="period">{parse(date + '')}</span>
              </div>
            </div>
            <div className="row-pretext">
              <div className="col-md-10" style={{ marginBottom: '5px', padding: '0' }}>
                {['Typescript', 'React'].map((tech, key) => {
                  return (
                    <h5 key={key} className="tech noselect">{tech}</h5>
                  )
                })}
                <p className="details-row descPart loud">{pretext}</p>
                <div className="row text-nowrap text-muted" style={{ marginBottom: '5px' }}>
                  <div className="col-md-3">
                    <FontAwesomeIcon style={{ paddingTop: '1px', minWidth: '20px' }} icon={faClock}/> {timespan}
                  </div>
                  <div className="col-md-3">
                    <FontAwesomeIcon style={{ paddingTop: '1px', minWidth: '20px' }} icon={faUsers}/> {4} people
                  </div>
                  <div className="col-md-3">
                    <FontAwesomeIcon style={{ paddingTop: '1px', minWidth: '20px' }} icon={faCrown}/> {'Some hack'}
                  </div>
                </div>
              </div>
              <div className="col-md-2 project-left">
                <button style={{ fontSize: '13px', padding: '2px' }}
                        className="btn btn-info">
                  Demo
                </button>
                <br className="noselect"/>
                <Link to={`/projects/${id}`}>
                  <button style={{ fontSize: '13px', padding: '2px' }}
                          className="btn btn-info">
                    Article
                  </button>
                </Link>
              </div>
            </div>
            {/*<div style={{overflow: 'hidden', margin: '-10px 0 10px -2px'}}>*/}
            {/*  <div className="text-muted project-info text-nowrap">*/}
            {/*    <FontAwesomeIcon style={{paddingTop: '1px', minWidth: '30px'}} icon={faClock}/>*/}
            {/*    <span style={{marginRight: '20px'}}>{timespan}</span>*/}
            {/*    <FontAwesomeIcon style={{paddingTop: '1px', minWidth: '30px'}} icon={faUsers}/>*/}
            {/*    <span style={{marginRight: '20px'}}>{4}</span>*/}
            {/*    <FontAwesomeIcon style={{paddingTop: '1px', minWidth: '30px'}} icon={faCrown}/>*/}
            {/*    <span style={{marginRight: '20px'}}>{'ICHack19'}</span>*/}
            {/*  </div>*/}
            {/*</div>*/}
            <div className="tags noselect">
              {['Roguelike', 'Game'].map((keyword, key) => (
                <div key={key} className="tag">{keyword}</div>
              ))}
            </div>
          </div>
        </Skeleton>
      </div>
    );
  }
}

export default Project;
