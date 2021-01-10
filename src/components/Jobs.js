import React from "react";
import JobCard from "./jobcard"
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const jobCardState = atom({
  key: "jobCardState",
  default: [
    {
      companyName: "Company 1",
      companyInfo: "Info about job. It's so cool!",
      aboutJob: "About this job",
      technologies: "reactjs",
      jobDescription:
        " Sloop pink chase guns list rigging hulk swing the lead Letter of Marque grog blossom",
      skills: "react",
    },
    {
        companyName: "Company 2",
        companyInfo: "Info about job. It's so cool!",
        aboutJob: "About this job",
        technologies: "reactjs",
        jobDescription:
          " Sloop pink chase guns list rigging hulk swing the lead Letter of Marque grog blossom",
        skills: "react",

    },
    {
        companyName: "Company 1",
        companyInfo: "Info about job. It's so cool!",
        aboutJob: "About this job",
        technologies: "reactjs",
        jobDescription:
          " Sloop pink chase guns list rigging hulk swing the lead Letter of Marque grog blossom",
        skills: "react",
    }
  ],
});

const Jobs = () => {
  const jobCards = useRecoilValue(jobCardState);
  return (
    <div>
               {jobCards.map((jobCard) => (
        <JobCard key={jobCard.id} card={jobCard} />
      ))}
   
      <p>This is a jobs page</p>
    </div>
  );
};

export default Jobs;
