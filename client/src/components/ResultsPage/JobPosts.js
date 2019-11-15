import React from "react";

const JobPosts = ({ jobsToRender }) => {
  return (
    <>
      <div>
        {jobsToRender === [] ? (
          <p>
            It seems there are no open jobs in this particular city. Try
            expanding your search area.
          </p>
        ) : (
          [jobsToRender]
        )}
      </div>
    </>
  );
};

export default JobPosts;
