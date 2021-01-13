import React, { useState } from "react";
import { Form, FormField, TextInput, Grommet } from 'grommet';

const allJobs = [
  {
    Company: "A",
    Salary: "77,000",
    Title: "Jr. JS Dev",
    Location: "Remote",
  },
  {
    Company: "B",
    Salary: "55,000",
    Title: "Intern",
    Location: "OKC",
  },
  {
    Company: "C",
    Salary: "66,000",
    Title: "Front-End React Dev",
    Location: "Miami, FL",
  },
  {
    Company: "D",
    Salary: "88,000",
    Title: "Jr/Mid Jr Dev",
    Location: "Bar Harbor, ME",
  },
];

const SearchBox = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchInfo = props.name ? props.name : 'searchBox';

  console.log(">>>>>>>>>>>>>>>>>>", searchResults);

  const onChange = (e) => {
    setSearchInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setSearchResults([]);

    const searchMatches = [];
    allJobs.forEach((job) => {
      for (let item in job) {
        if (job[item].toLowerCase().includes(searchInput.toLowerCase())) {
          searchMatches.push(job);
        }
      }
    });
    setSearchResults(searchMatches);
  };

  return (
      <Form onSubmit={onSubmit}>
        <FormField label='Search' htmlFor={searchInfo}>
          <TextInput
            a11yTitle='Search Box Text Field'
            name={searchInfo}
            id={searchInfo}
            type="text"
            placeholder={props.placeholder || "Search"}
            value={searchInput}
            onChange={onChange}
            />
        </FormField>
      </Form>
  );
};

export default SearchBox;
