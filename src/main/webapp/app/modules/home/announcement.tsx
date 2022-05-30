import './home.scss';

import React from 'react';
import parse from 'html-react-parser';

export const Announcement = ({ location }) => {
  return (
    <div className="p-4">
      <h3 className="display-5" style={{ fontWeight: '400' }}>
        {location.state.title}
      </h3>
      <hr />
      <p className="pt-4"> {parse(location.state.raw)}</p>
    </div>
  );
};

export default Announcement;
