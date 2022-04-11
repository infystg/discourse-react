import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './user-histories.reducer';

export const UserHistoriesDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const userHistoriesEntity = useAppSelector(state => state.userHistories.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="userHistoriesDetailsHeading">UserHistories</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{userHistoriesEntity.id}</dd>
          <dt>
            <span id="action">Action</span>
          </dt>
          <dd>{userHistoriesEntity.action}</dd>
          <dt>
            <span id="actingUserId">Acting User Id</span>
          </dt>
          <dd>{userHistoriesEntity.actingUserId}</dd>
          <dt>
            <span id="targetUserId">Target User Id</span>
          </dt>
          <dd>{userHistoriesEntity.targetUserId}</dd>
          <dt>
            <span id="details">Details</span>
          </dt>
          <dd>{userHistoriesEntity.details}</dd>
          <dt>
            <span id="context">Context</span>
          </dt>
          <dd>{userHistoriesEntity.context}</dd>
          <dt>
            <span id="ipAddress">Ip Address</span>
          </dt>
          <dd>{userHistoriesEntity.ipAddress}</dd>
          <dt>
            <span id="email">Email</span>
          </dt>
          <dd>{userHistoriesEntity.email}</dd>
          <dt>
            <span id="subject">Subject</span>
          </dt>
          <dd>{userHistoriesEntity.subject}</dd>
          <dt>
            <span id="previousValue">Previous Value</span>
          </dt>
          <dd>{userHistoriesEntity.previousValue}</dd>
          <dt>
            <span id="newValue">New Value</span>
          </dt>
          <dd>{userHistoriesEntity.newValue}</dd>
          <dt>
            <span id="topicId">Topic Id</span>
          </dt>
          <dd>{userHistoriesEntity.topicId}</dd>
          <dt>
            <span id="adminOnly">Admin Only</span>
          </dt>
          <dd>{userHistoriesEntity.adminOnly ? 'true' : 'false'}</dd>
          <dt>
            <span id="postId">Post Id</span>
          </dt>
          <dd>{userHistoriesEntity.postId}</dd>
          <dt>
            <span id="customType">Custom Type</span>
          </dt>
          <dd>{userHistoriesEntity.customType}</dd>
          <dt>
            <span id="categoryId">Category Id</span>
          </dt>
          <dd>{userHistoriesEntity.categoryId}</dd>
        </dl>
        <Button tag={Link} to="/user-histories" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/user-histories/${userHistoriesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default UserHistoriesDetail;
