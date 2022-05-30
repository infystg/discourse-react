import React from 'react';
import parse from 'html-react-parser';

export const Announcement = ({ location }) => {
  const announcement = location.state.element;
  return (
    <div className="p-4">
      <h3 className="display-5" style={{ fontWeight: '400' }}>
        {announcement.title}
      </h3>
      <hr />
      <div className="pt-4"> {parse(announcement.raw)}</div>
    </div>
  );
};

export default Announcement;
