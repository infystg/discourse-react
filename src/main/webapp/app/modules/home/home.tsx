import './home.scss';
import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight, faArrowRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import parse from 'html-react-parser';

import { getLoginUrl, REDIRECT_URL } from 'app/shared/util/url-utils';
import { useAppSelector } from 'app/config/store';
import axios from 'axios';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);
  const isAuthenticated = useAppSelector(state => state.authentication.isAuthenticated);
  const defaultAnnouncement = [{ title: 'No Announcement Found', raw: 'Not Found', id: 0 }];

  const [announcement, setAnnouncement] = useState(defaultAnnouncement);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    axios
      .get('/public/announcements')
      .then(res => setAnnouncement(res.data.length === 0 ? defaultAnnouncement : res.data))
      .catch(err => setAnnouncement([{ id: 0, title: 'Unable to load Public Announcements', raw: '<p>Please Reload the page' }]));
  }, []);

  useEffect(() => {
    const redirectURL = localStorage.getItem(REDIRECT_URL);
    if (redirectURL) {
      localStorage.removeItem(REDIRECT_URL);
      location.href = `${location.origin}${redirectURL}`;
    }
  });

  return (
    <Fragment>
      <div className="background background-home"></div>
      <Row className="homepage-flex">
        <Col sm="12" md="4" lg="6" className="py-3">
          <Row>
            <Col sm="12">
              <h3 className="display-4 login-heading">
                Infosys | <span className="display-6">Forums</span>
                {isAuthenticated ? <p style={{ fontSize: '1.5rem' }}>Hi {account.firstName}.</p> : ''}
              </h3>

              {isAuthenticated ? (
                <Link to="/allTopics" className="btn btn-dark p-2 px-5 login-btn">
                  All Topics <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              ) : (
                <a href={getLoginUrl()} className="btn btn-dark p-2 px-5 login-btn">
                  Log In / Register
                </a>
              )}
            </Col>
          </Row>
        </Col>
        <Col sm="12" md="8" lg="6" style={{ height: '100%' }}>
          <div className="card p-4" style={{ height: '100%' }}>
            <div id="cardContent" className="card-body p-0" style={{ overflowX: 'scroll', overflowY: 'hidden' }}>
              <h4 className="card-title header">{announcement[current].title}</h4>
              <hr />
              {parse(announcement[current].raw)}
            </div>
            <hr />
            <div style={{ marginLeft: 'auto', padding: '0.5rem 0' }}>
              {
                <Fragment>
                  <a
                    href="#"
                    style={{ color: '#8626c3' }}
                    onClick={e => {
                      document.getElementById('cardContent').style.overflowY = 'scroll';
                      document.getElementById('annoucementPage').style.display = 'inline';
                      e.currentTarget.style.display = 'none';
                    }}
                  >
                    See More {'  '}
                    <FontAwesomeIcon icon={faAngleDown} />
                  </a>
                  <Link
                    to={{ pathname: '/announcement', state: { element: announcement[current] } }}
                    id="annoucementPage"
                    className="btn btn-outline-dark"
                    style={{ display: 'none' }}
                  >
                    View
                  </Link>
                </Fragment>
              }
            </div>
            <a href="#" className="next-slide" onClick={() => setCurrent((current + 1) % announcement.length)}>
              <FontAwesomeIcon icon={faAngleRight} />
            </a>
            <a
              href="#"
              className="prev-slide"
              onClick={() => (current === 0 ? setCurrent(announcement.length - 1) : setCurrent(current - 1))}
            >
              <FontAwesomeIcon icon={faAngleLeft} />
            </a>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Home;
