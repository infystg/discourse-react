import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './imap-sync-logs.reducer';

export const ImapSyncLogsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const imapSyncLogsEntity = useAppSelector(state => state.imapSyncLogs.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="imapSyncLogsDetailsHeading">ImapSyncLogs</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{imapSyncLogsEntity.id}</dd>
          <dt>
            <span id="level">Level</span>
          </dt>
          <dd>{imapSyncLogsEntity.level}</dd>
          <dt>
            <span id="message">Message</span>
          </dt>
          <dd>{imapSyncLogsEntity.message}</dd>
          <dt>
            <span id="groupId">Group Id</span>
          </dt>
          <dd>{imapSyncLogsEntity.groupId}</dd>
        </dl>
        <Button tag={Link} to="/imap-sync-logs" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/imap-sync-logs/${imapSyncLogsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default ImapSyncLogsDetail;
