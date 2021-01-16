import React from "react";
import {
  Box,
  Button,
  Card,
  Grommet,
  Form,
  Heading
 
  
} from "grommet";
import { grommet } from "grommet/themes";
// import GrommetTheme from "../theme/grommetTheme"

//job card is what shows up nce the user clicks on a specific job from the search results
//job card is what happens once you do an axios call to get that specific job



function JobCard({card}){
 

  return (
    <Grommet theme={grommet} >
    <Card 
    pad="large"
    margin="large"
    responsive="true"
    align="center"
  >
      <Box>
      <div className="card">
     
          <Form
          align="center">

       <Heading>{card.companyName}</Heading>
      <p>{card.companyInfo}</p>
      <div classname="JobCardABout">
        <h3>{card.aboutJob}</h3>
        {/* <ul>
          <li>JOb Type: Full-time</li>
          <li>Industry: Financial Services </li>
          <li>Company size: 10k people</li>
          <li>Company type: Public</li>
        </ul> */}
      </div>
      <div className="TechnologyJobCard">
        <h4>{card.technologies}</h4>
        {/* <ul>
          <li>reactjs</li>
          <li>Javascript</li>
        </ul> */}
      </div>
      <div className="DescriptionJobCard">
        <h4>{card.jobDescription}</h4>
        {/* <p>
          Sloop pink chase guns list rigging hulk swing the lead Letter of
          Marque grog blossom yo-ho-ho. Long boat Nelsons folly scurvy smartly
          bilge water hogshead spyglass Sink me Arr driver. Handsomely tender
          rope's end mizzen reef booty draft no prey, no pay Corsair jack.
        </p> */}
      </div>
      <div className="SkillsJobCard">
        <p>{card.skills}</p>
        {/* <p>Should be fully knowledgable of</p>
        <ul>
          <li>React</li>
          <li>HTML 5/CSS 3</li>
          <li>ECMAScript 5, 6, & 7</li>
          <li>Javascript Transpilation</li>
          <li>Browser Support</li>
          <li>Javascript Transpilation</li>
          <li>Javascript Transpilation</li>
        </ul> */}
      </div> 
      <div className="JobCardApply">
      
       
        <Button focusIndicator="true" type="reset" label="Apply" primary />
  
      </div>
      </Form>


    </div>
    </Box>
    </Card>
    </Grommet>
  );
};

export default JobCard;
