import React, { useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllTopicsAnnouncement = () => {
  const defaultAnnouncement = [{ title: 'No Announcement Found', raw: 'Not Found', id: 0 }];
  const [announcement, setAnnouncement] = useState(defaultAnnouncement);

  useEffect(() => {
    axios
      .get('/public/announcements')
      .then(res => setAnnouncement(res.data.length === 0 ? defaultAnnouncement : res.data))
      .catch(err => setAnnouncement([{ id: 0, title: 'Unable to load Public Announcements', raw: '<p>Please Reload the page' }]));
  }, []);

  return (
    <Row>
      <Col sm="0" md="3"></Col>
      <Col sm="12" md="6">
        <div className="card" style={{ zIndex: '1' }}>
          <div className="card-body">
            <div className="list-group">
              {announcement.length === 0
                ? ''
                : announcement.map((element, ind) => (
                    // Link Not redirecting everything else working
                    <Link
                      to={{ pathname: '/announcement', state: { element } }}
                      key={ind}
                      className="text-primary my-2 list-group-item list-group-item-action"
                    >
                      {element.title}
                    </Link>
                  ))}
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default AllTopicsAnnouncement;
