import React, { useEffect, useState, Fragment } from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import { useAppSelector } from 'app/config/store';
import { hasAnyAuthority } from 'app/shared/auth/private-route';
import { AUTHORITIES } from 'app/config/constants';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import AddForm from './AddForm';
import AllTopicsList from './allTopicsList';
import AllTopicsCategory from './allTopicsCategory';
import AllTopicsAnnouncement from './allTopicsAnnouncement';

export const AllTopics = () => {
  const [topics, setTopics] = useState([]);
  const [sort, setSort] = useState('lastPostedAt');
  const [categories, setCategories] = useState([]);
  const [dropdown, setDropdown] = useState(false);
  const [selectedCat, setSelectedCat] = useState([null, 'All Categories']);
  const [dropdownAdd, setDropdownAdd] = useState(false);
  const [formType, setFormType] = useState(['REGULAR', 'Topic']);
  const account = useAppSelector(state => state.authentication.account);

  useEffect(() => {
    axios
      .get('/api/categories')
      .then(res => setCategories(res.data.categoryResponses))
      .catch(err => setCategories([]));
  }, []);

  useEffect(() => {
    if (selectedCat[0] === null) {
      axios
        .get(`/api/topics?sort=${sort},desc`)
        .then(res => {
          setTopics(res.data);
        })
        .catch(err => setTopics([]));
    } else {
      axios
        .get(`/api/topicsByCategory?categoryId=${selectedCat[0]}&sort=${sort},desc`)
        .then(res => setTopics(res.data))
        .catch(err => setTopics([]));
    }
  }, [sort, selectedCat]);

  const toggleTopicInput = e => {
    e.preventDefault();
    const topicBox = document.getElementById('topicBox');
    topicBox.classList.toggle('show-form');
  };

  return (
    <Fragment>
      <Router>
        <Row>
          <Col sm="6" md="8">
            <Dropdown style={{ display: 'inline-block' }} isOpen={dropdown} toggle={() => setDropdown(!dropdown)}>
              <DropdownToggle caret className="filter-btn shadow">
                {selectedCat[1]}
              </DropdownToggle>
              <Link to="/allTopics">
                <DropdownMenu>
                  <DropdownItem className="btn-font" onClick={() => setSelectedCat([null, 'All Categories'])}>
                    All Categories
                  </DropdownItem>
                  {categories.length !== 0
                    ? categories.map(element => (
                        <DropdownItem key={element.id} className="btn-font" onClick={() => setSelectedCat([element.id, element.name])}>
                          {element.name}
                        </DropdownItem>
                      ))
                    : ''}
                </DropdownMenu>
              </Link>
            </Dropdown>
            <Link
              to="/allTopics"
              className="filter-btn shadow"
              onClick={e => {
                setSort('lastPostedAt');
              }}
            >
              Latest
            </Link>
            <Link
              to="/allTopics"
              className="filter-btn shadow"
              onClick={e => {
                setSort('postsCount');
              }}
            >
              Top
            </Link>
            <Link to="/allTopics/category" className="filter-btn shadow">
              Categories
            </Link>
            <Link to="/allTopics/announcement" className="filter-btn shadow">
              Announcement
            </Link>
          </Col>
          <Col sm="6" md="4" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Dropdown style={{ display: 'inline-block' }} isOpen={dropdownAdd} toggle={() => setDropdownAdd(!dropdownAdd)}>
              <DropdownToggle caret className="filter-btn shadow">
                {formType[1]}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => setFormType(['REGULAR', 'Topic'])} className="">
                  Topic
                </DropdownItem>
                {hasAnyAuthority(account.authorities, [AUTHORITIES.ADMIN]) ? (
                  <DropdownItem onClick={() => setFormType(['ANNOUNCEMENT', 'Announcement'])} className="">
                    Announcement
                  </DropdownItem>
                ) : (
                  ''
                )}
                <DropdownItem onClick={() => setFormType(['PRIVATE_MESSAGE', 'Private'])} className="">
                  Private Message
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <a className="filter-btn shadow primary-btn" href="#" onClick={toggleTopicInput}>
              <FontAwesomeIcon icon={faPlus} style={{ fontSize: '1rem' }}></FontAwesomeIcon> Add
            </a>
          </Col>
        </Row>

        <AddForm categories={categories} formType={formType[0]}></AddForm>

        <div className="my-3">
          <Switch>
            <Route exact path="/allTopics" component={() => <AllTopicsList categories={categories} topics={topics} />}></Route>
            <Route
              exact
              path="/allTopics/category"
              component={() => <AllTopicsCategory setCategory={(id, name) => setSelectedCat([id, name])} categories={categories} />}
            ></Route>
            <Route exact path="/allTopics/announcement" component={AllTopicsAnnouncement}></Route>
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
};

export default AllTopics;
