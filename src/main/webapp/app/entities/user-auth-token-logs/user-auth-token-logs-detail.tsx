import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './user-auth-token-logs.reducer';

export const UserAuthTokenLogsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const userAuthTokenLogsEntity = useAppSelector(state => state.userAuthTokenLogs.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="userAuthTokenLogsDetailsHeading">UserAuthTokenLogs</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{userAuthTokenLogsEntity.id}</dd>
          <dt>
            <span id="action">Action</span>
          </dt>
          <dd>{userAuthTokenLogsEntity.action}</dd>
          <dt>
            <span id="userAuthTokenId">User Auth Token Id</span>
          </dt>
          <dd>{userAuthTokenLogsEntity.userAuthTokenId}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{userAuthTokenLogsEntity.userId}</dd>
          <dt>
            <span id="clientIp">Client Ip</span>
          </dt>
          <dd>{userAuthTokenLogsEntity.clientIp}</dd>
          <dt>
            <span id="userAgent">User Agent</span>
          </dt>
          <dd>{userAuthTokenLogsEntity.userAgent}</dd>
          <dt>
            <span id="authToken">Auth Token</span>
          </dt>
          <dd>{userAuthTokenLogsEntity.authToken}</dd>
          <dt>
            <span id="path">Path</span>
          </dt>
          <dd>{userAuthTokenLogsEntity.path}</dd>
        </dl>
        <Button tag={Link} to="/user-auth-token-logs" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/user-auth-token-logs/${userAuthTokenLogsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default UserAuthTokenLogsDetail;
