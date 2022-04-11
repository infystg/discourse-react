import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './anonymous-users.reducer';

export const AnonymousUsersDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const anonymousUsersEntity = useAppSelector(state => state.anonymousUsers.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="anonymousUsersDetailsHeading">AnonymousUsers</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{anonymousUsersEntity.id}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{anonymousUsersEntity.userId}</dd>
          <dt>
            <span id="masterUserId">Master User Id</span>
          </dt>
          <dd>{anonymousUsersEntity.masterUserId}</dd>
          <dt>
            <span id="active">Active</span>
          </dt>
          <dd>{anonymousUsersEntity.active ? 'true' : 'false'}</dd>
        </dl>
        <Button tag={Link} to="/anonymous-users" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/anonymous-users/${anonymousUsersEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default AnonymousUsersDetail;
