import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './email-logs.reducer';

export const EmailLogsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const emailLogsEntity = useAppSelector(state => state.emailLogs.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="emailLogsDetailsHeading">EmailLogs</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{emailLogsEntity.id}</dd>
          <dt>
            <span id="toAddress">To Address</span>
          </dt>
          <dd>{emailLogsEntity.toAddress}</dd>
          <dt>
            <span id="emailType">Email Type</span>
          </dt>
          <dd>{emailLogsEntity.emailType}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{emailLogsEntity.userId}</dd>
          <dt>
            <span id="postId">Post Id</span>
          </dt>
          <dd>{emailLogsEntity.postId}</dd>
          <dt>
            <span id="bounceKey">Bounce Key</span>
          </dt>
          <dd>{emailLogsEntity.bounceKey}</dd>
          <dt>
            <span id="bounced">Bounced</span>
          </dt>
          <dd>{emailLogsEntity.bounced ? 'true' : 'false'}</dd>
          <dt>
            <span id="messageId">Message Id</span>
          </dt>
          <dd>{emailLogsEntity.messageId}</dd>
        </dl>
        <Button tag={Link} to="/email-logs" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/email-logs/${emailLogsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default EmailLogsDetail;
