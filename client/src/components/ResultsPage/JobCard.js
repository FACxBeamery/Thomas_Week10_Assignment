import React from "react";
import styles from "./JobCard.module.css";

const JobCard = ({ jobData }) => {
  return (
    <article className={styles["job-card"]}>
      {jobData.company_logo ? (
        <a href={jobData.company_url}>
          <img
            src={jobData.company_logo}
            className={styles["job-card__company-logo"]}
            alt={`The logo of ${jobData.company}, who are offering the job.`}
          />
        </a>
      ) : (
        <p>No company logo available</p>
      )}

      <div>
        <p>{jobData.title}</p>
        <p>{jobData.location}</p>
        {/* <p>{jobData.company}</p> */}
        <p>{jobData.type}</p>
        {/* <p>{`How to apply: ${jobData.how_to_apply}`}</p> */}
        <a href={jobData.url}>Click to be taken to the original job posting!</a>
        <p>{`Job posting created at: ${jobData.created_at}`}</p>
      </div>
    </article>
  );
};

export default JobCard;
