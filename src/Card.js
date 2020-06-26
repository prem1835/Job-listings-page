import React from "react";

const Card = ({ jsonData }) => {
  return (
    <React.Fragment>
      {jsonData.map((data) => {
        return (
          <div
            className="single-job row mx-auto mt-5 featured-border"
            key={data.id}
          >
            <div className="job-logo col-12 col-lg-1 pb-3 pb-lg-0 p-0 ">
              <img src={data.logo} alt="company-logo" />
            </div>
            <div className="about col-12 col-lg-5 p-0 pl-0 pl-lg-5 pb-3 pb-lg-0">
              <div className="pb-2">
                <span className="company">{data.company}</span>
                {data.new && <span className="new mx-2">New!</span>}
                {data.featured && <span className="featured">Featured</span>}
              </div>
              <div className="pb-2 level">{data.position}</div>
              <div className="details">
                {data.postedAt} . {data.contract} . {data.location}
              </div>
            </div>
            <div className="row justify-content-start justify-content-lg-end col-12 col-lg-6 p-0 my-auto mr-auto pt-2 pt-lg-0">
              <button className="btn custom-btn mt-3 mt-xl-auto languages">
                {data.role}
              </button>
              <button className="btn custom-btn mt-3 mt-xl-auto languages">
                {data.level}
              </button>
              {data.languages.map((lang) => {
                return (
                  <button
                    key={lang}
                    className="btn custom-btn mt-3 mt-xl-auto languages"
                  >
                    {lang}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Card;
