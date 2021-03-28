import React from "react";
import { Box, Button, Card, Grommet, Form, Heading } from "grommet";
import { grommet } from "grommet/themes";
import { useRecoilValue, selector } from "recoil";
//import GrommetTheme from "../theme/grommetTheme"

const url = `https://js-jr-dev-board.herokuapp.com/api/v1/jobs`;

//fetch details here
const fetchJobDetails = selector({
  key: "jobDetailsSelector",
  get: async ({ get }) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
});

console.log("fetch job details", fetchJobDetails)

function ApplicationCard({ jobCard }) {
  const jobCards = useRecoilValue(fetchJobDetails);
  console.log("HOOOOOO application data data", jobCards);
  return (
    <Grommet theme={grommet}>
      <Box>
        <div className="card">
          <div>
            {Object.keys(jobCards).map((key) => {
              return (
                <div key={key}>
                  {jobCards[key].map((jobs) => {
                    return (
                      <Form align="center">
                        <Card key={jobs.id} margin="xlarge" pad="large">
                          {" "}
                          <Heading>{jobs.companyName}</Heading>
                          <div>
                            <div>
                              <h3>Position: {jobs.position}</h3>
                            </div>
                            <div>
                              <h3>Salary: {jobs.salary}</h3>
                            </div>
                            <div>
                              <h3> Location: {jobs.location}</h3>
                            </div>
                            <h3>Job Description:</h3>
                            <p>{jobs.description}</p>
                          </div>
                          <div className="JobCardApply">
                            
                            <Button
                            //functioning link to applyUrl
                              href={jobs.applyUrl}
                              focusIndicator="true"
                              type="reset"
                              label="Apply"
                              primary
                            />
                          </div>
                        </Card>
                      </Form>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </Box>
    </Grommet>
  );
}

export default ApplicationCard;
