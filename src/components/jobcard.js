import React from "react";
import grommet from "grommet";
import axios from "axios";
import styled from "styled-components"

//job card is what shows up nce the user clicks on a specific job from the search results
//job card is what happens once you do an axios call to get that specific job



function JobCard({card}){
 

  return (
      <div className="card">

       <h1>{card.companyName}</h1>
      <p>{card.companyInfo}</p>
      <div classname="JobCardABout">
        <h2>{card.aboutJob}</h2>
        {/* <ul>
          <li>JOb Type: Full-time</li>
          <li>Industry: Financial Services </li>
          <li>Company size: 10k people</li>
          <li>Company type: Public</li>
        </ul> */}
      </div>
      <div className="TechnologyJobCard">
        <h2>{card.technologies}</h2>
        {/* <ul>
          <li>reactjs</li>
          <li>Javascript</li>
        </ul> */}
      </div>
      <div className="DescriptionJobCard">
        <h2>{card.jobDescription}</h2>
        {/* <p>
          Sloop pink chase guns list rigging hulk swing the lead Letter of
          Marque grog blossom yo-ho-ho. Long boat Nelsons folly scurvy smartly
          bilge water hogshead spyglass Sink me Arr driver. Handsomely tender
          rope's end mizzen reef booty draft no prey, no pay Corsair jack.
        </p> */}
      </div>
      <div className="SkillsJobCard">
        <h2>{card.skills}</h2>
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
        <button>Apply</button>
      </div>
    </div>
  );
};

export default JobCard;
