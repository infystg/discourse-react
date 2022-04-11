import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './user-actions.reducer';

export const UserActionsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const userActionsEntity = useAppSelector(state => state.userActions.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="userActionsDetailsHeading">UserActions</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{userActionsEntity.id}</dd>
          <dt>
            <span id="actionType">Action Type</span>
          </dt>
          <dd>{userActionsEntity.actionType}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{userActionsEntity.userId}</dd>
          <dt>
            <span id="targetTopicId">Target Topic Id</span>
          </dt>
          <dd>{userActionsEntity.targetTopicId}</dd>
          <dt>
            <span id="targetPostId">Target Post Id</span>
          </dt>
          <dd>{userActionsEntity.targetPostId}</dd>
          <dt>
            <span id="targetUserId">Target User Id</span>
          </dt>
          <dd>{userActionsEntity.targetUserId}</dd>
          <dt>
            <span id="actingUserId">Acting User Id</span>
          </dt>
          <dd>{userActionsEntity.actingUserId}</dd>
        </dl>
        <Button tag={Link} to="/user-actions" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/user-actions/${userActionsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default UserActionsDetail;
