import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './user-emails.reducer';

export const UserEmailsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const userEmailsEntity = useAppSelector(state => state.userEmails.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="userEmailsDetailsHeading">UserEmails</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{userEmailsEntity.id}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{userEmailsEntity.userId}</dd>
          <dt>
            <span id="email">Email</span>
          </dt>
          <dd>{userEmailsEntity.email}</dd>
          <dt>
            <span id="primary">Primary</span>
          </dt>
          <dd>{userEmailsEntity.primary ? 'true' : 'false'}</dd>
        </dl>
        <Button tag={Link} to="/user-emails" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/user-emails/${userEmailsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default UserEmailsDetail;
