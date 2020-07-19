import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Skeleton} from "antd";
import cdn from "../assets/images/cdn";

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
          {/*<div className="provider-left-block textAlignCen">*/}
          {/*  <a href="#" className="provider-image-block ">*/}
          {/*    <img src={cdn.baseURL + cdn.ImgURL + cdn.ImgDir + imgSrc}*/}
          {/*         alt="" className="provider-img lazyImage not-loaded-spinner"/>*/}
          {/*  </a>*/}
          {/*  /!*<span className="sponsFeaturedTag">Yolo</span>*!/*/}
          {/*</div>*/}
          <div className="provider-list-details pos-rel ">
            <div className="details-row">
              <Link
                to={`/projects/${id}`}
                className="providerNameLink provider-name loud ellipsis_line fontSize16 "
              >
                <span>{title}</span>
              </Link>
            </div>
            <p className="details-row descPart loud">{pretext}</p>
            {/* <div className="tags">
            {this.props.keywords.map((keyword) => (
              <div className="tag">{keyword}</div>
            ))}
          </div> */}
            {/* <div className="provider-right-block textAlignRit">
              <div className="appendMsgCall">
                <button className="btn btn-info">View</button>
              </div>
            </div> */}
          </div>
        </Skeleton>
      </div>
    );
  }
}

export default Project;
