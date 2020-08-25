import React, {Component, Fragment} from "react";
import {Link} from "react-router-dom";
import {Skeleton} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCrown} from "@fortawesome/free-solid-svg-icons/faCrown";
import Image from "./Image";
import Placeholder from "./Placeholder";
import {faClock} from "@fortawesome/free-solid-svg-icons/faClock";
import {faUsers} from "@fortawesome/free-solid-svg-icons/faUsers";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faPlay} from "@fortawesome/free-solid-svg-icons/faPlay";
import {faCommentAlt} from "@fortawesome/free-solid-svg-icons/faCommentAlt";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import parse from "../util/DateParse";

class Project extends Component {
  render() {
    const {
      id, title, imgSrc, pretext, timespan, date, teamSize, links, technologies, keywords, demoSrc, award, article
    } = this.props.item;

    const tech = String(technologies).split(', ');
    const keys = String(keywords).split(', ');
    const loading = this.props.loading;
    let linksP = undefined;
    if (links) {
      const obj = JSON.parse(String(links));
      if (obj.git) {
        linksP = JSON.parse(String(links))
      }
    }

    return (
      <div
        style={{ display: "flex", textAlign: "left" }}
        className="provider-list-card needAjaxFormContainer shadowDiv"
      >
        <Skeleton loading={loading}>
          <div className="provider-left-block textAlignCen">
            <div className="provider-image-block ">
              <Image src={imgSrc}// {cdn.baseURL + cdn.ImgURL + cdn.ImgDir + imgSrc}
                     classes="provider-img"
                     placeholder={<Placeholder/>}/>
              {award !== '-' &&
              <span className="sponsFeaturedTag noselect">
                <FontAwesomeIcon color="#f1b82d" icon={faCrown}/> {' '} {award}
              </span>
              }
            </div>
          </div>
          <div className="provider-list-details pos-rel">
            <div className="row">
              <div className="col-md-6">
                <h5 style={{ margin: '0px 0px 5px 0px' }}>{title}</h5>
              </div>
              <div className="col-md-6 period-holder">
                <span className="period">{parse(String(date)).slice(1).join(' ')}</span>
              </div>
            </div>
            <div className="row-pretext">
              <div className="col-md-10" style={{ marginBottom: '5px', padding: '0' }}>
                {tech.map((tech, key) => {
                  return (
                    <h5 key={key} className="tech">{tech}</h5>
                  )
                })}
                <p className="details-row descPart loud">{pretext}</p>
                <div className="row text-nowrap text-muted" style={{ marginBottom: '5px' }}>
                  <div className="col-md-3">
                    <FontAwesomeIcon style={{ paddingTop: '1px', minWidth: '18px' }} icon={faClock}/> {' '}
                    {timespan}
                  </div>
                  <div className="col-md-3">
                    <FontAwesomeIcon style={{ paddingTop: '1px', minWidth: '18px' }}
                                     icon={teamSize === 1 ? faUser : faUsers}/> {' '}
                    {teamSize === 1 ? 'Individual' : `${teamSize} people`}
                  </div>
                </div>
              </div>
              <div className="col-md-2 project-left">
                {demoSrc !== '-' &&
                <Fragment>
                  <a href={demoSrc}>
                    <button style={{ fontSize: '13px', padding: '2px' }}
                            className="btn btn-success">
                      <FontAwesomeIcon style={{ paddingTop: '1px', minWidth: '20px' }} icon={faPlay}/>
                    </button>
                  </a>
                  <br className="noselect"/>
                </Fragment>
                }
                {article &&
                <Fragment>
                  <Link to={`/projects/${id}`}>
                    <button style={{ fontSize: '13px', padding: '2px' }}
                            className="btn btn-info">
                      <FontAwesomeIcon style={{ paddingTop: '1px', minWidth: '20px' }} icon={faCommentAlt}/>
                    </button>
                  </Link>
                  <br className="noselect"/>
                </Fragment>
                }
                {linksP &&
                <a href={linksP.git} target="_blank" rel="noopener noreferrer">
                  <button style={{ fontSize: '13px', padding: '2px' }}
                          className="btn btn-git"
                  >
                    <FontAwesomeIcon size="lg" style={{ paddingTop: '1px', minWidth: '20px' }} icon={faGithub}/>
                  </button>
                </a>
                }
              </div>
            </div>
            <div className="tags noselect">
              {keys.map((keyword, key) => (
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
