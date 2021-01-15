import React from "react";
import JobCard from "./jobcard"
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { Grommet,
Box,
Grid,
Heading } from 'grommet'
import { grommet } from "grommet/themes";
import GrommetTheme from "../theme/grommetTheme"

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
        companyName: "Company 3",
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
    <Grommet theme={grommet}>
      <Heading align="center" justify="center"
      textAlign="center">Job Board</Heading>
      <Grid 
      gap="medium"
      pad={{horizontal: "xxlarge" }}
      responsive="true"
      align="center"
      columns="large"
      flex="true"
      // rows="flex"
      // rows="small">
      >
      <Box direction="column" justify="around" margin="medium" pad={{horizontal: "xxlarge"}} responsive="true"
      animation="zoomIn" >
    <div>
               {jobCards.map((jobCard) => (
        <JobCard key={jobCard.id} card={jobCard} />
      ))}
   
      <p>This is a jobs page</p>
    </div>
    </Box>
    </Grid>
    </Grommet>
  );
};

export default Jobs;
