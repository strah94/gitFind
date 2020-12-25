import React, { Fragment } from 'react';

//we can import spinner image directly cause of webpeck under the hood
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: '200px', margin: 'auto', display: 'block' }}
      />
    </Fragment>
  );
};

export default Spinner;
