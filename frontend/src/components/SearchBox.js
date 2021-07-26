import React, { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { useHistory } from "react-router-dom";
function SearchBox() {
  const [keyword, setKeyword] = useState("");

  let history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      history.push(`/?keyword=${keyword}&page=1`);
    } else {
      history.push("/");
    }
  };
  return (
    <Form className="d-flex" onSubmit={submitHandler}>
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button type="submit" variant="outline-success">
        Submit
      </Button>
    </Form>
  );
}

export default SearchBox;
