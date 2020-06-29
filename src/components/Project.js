import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Skeleton } from "antd";

class Project extends Component {
  render() {
    const item = this.props.item;
    const loading = this.props.loading;

    return (
      <div
        style={{ display: "flex", textAlign: "left" }}
        className="provider-list-card needAjaxFormContainer shadowDiv"
      >
        <Skeleton loading={loading}>
          <div className="provider-list-details pos-rel ">
            <div className="details-row">
              <Link
                to={`/projects/${item.id}`}
                className="providerNameLink provider-name loud ellipsis_line fontSize16 "
              >
                <span>{item.title}</span>
              </Link>
            </div>
            <p className="details-row descPart loud">{item.content}</p>
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
