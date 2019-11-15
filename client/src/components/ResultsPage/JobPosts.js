import React from "react";

const JobPosts = ({ jobsToRender }) => {
  return (
    <>
      {jobsToRender.length === 0 ? (
        <p>
          It seems there are no open jobs in this particular city. Try expanding
          your search area.
        </p>
      ) : (
        [jobsToRender]
      )}
    </>
  );
};

export default JobPosts;
