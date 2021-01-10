import React from "react";
import grommet from "grommet";
import axios from "axios";
//job card is what shows up nce the user clicks on a specific job from the search results
//job card is what happens once you do an axios call to get that specific job

const JobCard = () => {
  return (
    <div>
      <h1>Company 1</h1>
      <p>Info about job. It's so cool!</p>
      <div>
        <h2>About this job</h2>
        <ul>
          <li>JOb Type: Full-time</li>
          <li>Industry: Financial Services </li>
          <li>Company size: 10k people</li>
          <li>Company type: Public</li>
        </ul>
      </div>
      <div>
        <h2>Technologies</h2>
        <ul>
          <li>reactjs</li>
          <li>Javascript</li>
        </ul>
      </div>
      <div>
        <h2>Job Descripts</h2>
        <p>
          Sloop pink chase guns list rigging hulk swing the lead Letter of
          Marque grog blossom yo-ho-ho. Long boat Nelsons folly scurvy smartly
          bilge water hogshead spyglass Sink me Arr driver. Handsomely tender
          rope's end mizzen reef booty draft no prey, no pay Corsair jack.
        </p>
      </div>
      <div>
        <h2>Skills and Experience</h2>
        <p>Should be fully knowledgable of</p>
        <ul>
          <li>React</li>
          <li>HTML 5/CSS 3</li>
          <li>ECMAScript 5, 6, & 7</li>
          <li>Javascript Transpilation</li>
          <li>Browser Support</li>
          <li>Javascript Transpilation</li>
          <li>Javascript Transpilation</li>
        </ul>
      </div>
      <button>Apply</button>
    </div>
  );
};

export default JobCard;
