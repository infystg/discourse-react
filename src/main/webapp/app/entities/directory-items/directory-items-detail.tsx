import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './directory-items.reducer';

export const DirectoryItemsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const directoryItemsEntity = useAppSelector(state => state.directoryItems.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="directoryItemsDetailsHeading">DirectoryItems</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{directoryItemsEntity.id}</dd>
          <dt>
            <span id="periodType">Period Type</span>
          </dt>
          <dd>{directoryItemsEntity.periodType}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{directoryItemsEntity.userId}</dd>
          <dt>
            <span id="likesReceived">Likes Received</span>
          </dt>
          <dd>{directoryItemsEntity.likesReceived}</dd>
          <dt>
            <span id="likesGiven">Likes Given</span>
          </dt>
          <dd>{directoryItemsEntity.likesGiven}</dd>
          <dt>
            <span id="topicsEntered">Topics Entered</span>
          </dt>
          <dd>{directoryItemsEntity.topicsEntered}</dd>
          <dt>
            <span id="topicCount">Topic Count</span>
          </dt>
          <dd>{directoryItemsEntity.topicCount}</dd>
          <dt>
            <span id="postCount">Post Count</span>
          </dt>
          <dd>{directoryItemsEntity.postCount}</dd>
          <dt>
            <span id="daysVisited">Days Visited</span>
          </dt>
          <dd>{directoryItemsEntity.daysVisited}</dd>
          <dt>
            <span id="postsRead">Posts Read</span>
          </dt>
          <dd>{directoryItemsEntity.postsRead}</dd>
        </dl>
        <Button tag={Link} to="/directory-items" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/directory-items/${directoryItemsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default DirectoryItemsDetail;
