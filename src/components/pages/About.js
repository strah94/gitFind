import React, { Fragment } from 'react';

const About = (props) => {
  console.log(props.match.params);
  return (
    <Fragment>
      <h1>About this app</h1>
      <p>App to search Github users</p>
      <p>Version:1.0.0</p>
    </Fragment>
  );
};

export default About;
