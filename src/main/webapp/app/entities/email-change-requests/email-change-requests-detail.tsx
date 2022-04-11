import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './email-change-requests.reducer';

export const EmailChangeRequestsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const emailChangeRequestsEntity = useAppSelector(state => state.emailChangeRequests.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="emailChangeRequestsDetailsHeading">EmailChangeRequests</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{emailChangeRequestsEntity.id}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{emailChangeRequestsEntity.userId}</dd>
          <dt>
            <span id="oldEmail">Old Email</span>
          </dt>
          <dd>{emailChangeRequestsEntity.oldEmail}</dd>
          <dt>
            <span id="newEmail">New Email</span>
          </dt>
          <dd>{emailChangeRequestsEntity.newEmail}</dd>
          <dt>
            <span id="oldEmailTokenId">Old Email Token Id</span>
          </dt>
          <dd>{emailChangeRequestsEntity.oldEmailTokenId}</dd>
          <dt>
            <span id="newEmailTokenId">New Email Token Id</span>
          </dt>
          <dd>{emailChangeRequestsEntity.newEmailTokenId}</dd>
          <dt>
            <span id="changeState">Change State</span>
          </dt>
          <dd>{emailChangeRequestsEntity.changeState}</dd>
          <dt>
            <span id="requestedByUserId">Requested By User Id</span>
          </dt>
          <dd>{emailChangeRequestsEntity.requestedByUserId}</dd>
        </dl>
        <Button tag={Link} to="/email-change-requests" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/email-change-requests/${emailChangeRequestsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default EmailChangeRequestsDetail;
