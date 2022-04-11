import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './skipped-email-logs.reducer';

export const SkippedEmailLogsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const skippedEmailLogsEntity = useAppSelector(state => state.skippedEmailLogs.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="skippedEmailLogsDetailsHeading">SkippedEmailLogs</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{skippedEmailLogsEntity.id}</dd>
          <dt>
            <span id="emailType">Email Type</span>
          </dt>
          <dd>{skippedEmailLogsEntity.emailType}</dd>
          <dt>
            <span id="toAddress">To Address</span>
          </dt>
          <dd>{skippedEmailLogsEntity.toAddress}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{skippedEmailLogsEntity.userId}</dd>
          <dt>
            <span id="postId">Post Id</span>
          </dt>
          <dd>{skippedEmailLogsEntity.postId}</dd>
          <dt>
            <span id="reasonType">Reason Type</span>
          </dt>
          <dd>{skippedEmailLogsEntity.reasonType}</dd>
          <dt>
            <span id="customReason">Custom Reason</span>
          </dt>
          <dd>{skippedEmailLogsEntity.customReason}</dd>
        </dl>
        <Button tag={Link} to="/skipped-email-logs" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/skipped-email-logs/${skippedEmailLogsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default SkippedEmailLogsDetail;
