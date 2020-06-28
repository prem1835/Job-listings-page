import React from "react";

const Card = ({ jsonData, addToFilter }) => {
  return (
    <React.Fragment>
      {jsonData.map(
        ({
          id,
          logo,
          company,
          location,
          contract,
          postedAt,
          role,
          level,
          tools,
          newJ,
          featured,
          languages,
          position,
        }) => {
          return (
            <div
              className="single-job row mx-auto mt-5 featured-border"
              key={id}
            >
              <div className="job-logo col-12 col-lg-1 pb-3 pb-lg-0 p-0 ">
                <img src={`.${logo}`} alt="company-logo" />
              </div>
              <div className="about col-12 col-lg-5 p-0 pl-0 pl-lg-5 pb-3 pb-lg-0">
                <div className="pb-2">
                  <span className="company">{company}</span>
                  {newJ && <span className="new mx-2">New!</span>}
                  {featured && <span className="featured">Featured</span>}
                </div>
                <div className="pb-2 level">{position}</div>
                <div className="details">
                  {postedAt}.{contract}.{location}
                </div>
              </div>
              <div className="row justify-content-start justify-content-lg-end col-12 col-lg-6 p-0 my-auto mr-auto pt-2 pt-lg-0">
                <button
                  className="btn custom-btn mt-3 mt-xl-auto languages"
                  onClick={() => addToFilter(role)}
                >
                  {role}
                </button>
                <button
                  className="btn custom-btn mt-3 mt-xl-auto languages"
                  onClick={() => addToFilter(level)}
                >
                  {level}
                </button>
                {languages.map((lang) => {
                  return (
                    <button
                      key={lang}
                      className="btn custom-btn mt-3 mt-xl-auto languages"
                      onClick={() => addToFilter(lang)}
                    >
                      {lang}
                    </button>
                  );
                })}
                {tools.length > 0 &&
                  tools.map((tool) => {
                    return (
                      <button
                        key={tool}
                        className="btn custom-btn mt-3 mt-xl-auto languages"
                        onClick={() => addToFilter(tool)}
                      >
                        {tool}
                      </button>
                    );
                  })}
              </div>
            </div>
          );
        }
      )}
    </React.Fragment>
  );
};

export default Card;
