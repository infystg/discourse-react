import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './web-hook-events.reducer';

export const WebHookEventsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const webHookEventsEntity = useAppSelector(state => state.webHookEvents.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="webHookEventsDetailsHeading">WebHookEvents</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{webHookEventsEntity.id}</dd>
          <dt>
            <span id="webHookId">Web Hook Id</span>
          </dt>
          <dd>{webHookEventsEntity.webHookId}</dd>
          <dt>
            <span id="headers">Headers</span>
          </dt>
          <dd>{webHookEventsEntity.headers}</dd>
          <dt>
            <span id="payload">Payload</span>
          </dt>
          <dd>{webHookEventsEntity.payload}</dd>
          <dt>
            <span id="status">Status</span>
          </dt>
          <dd>{webHookEventsEntity.status}</dd>
          <dt>
            <span id="responseHeaders">Response Headers</span>
          </dt>
          <dd>{webHookEventsEntity.responseHeaders}</dd>
          <dt>
            <span id="responseBody">Response Body</span>
          </dt>
          <dd>{webHookEventsEntity.responseBody}</dd>
          <dt>
            <span id="duration">Duration</span>
          </dt>
          <dd>{webHookEventsEntity.duration}</dd>
        </dl>
        <Button tag={Link} to="/web-hook-events" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/web-hook-events/${webHookEventsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default WebHookEventsDetail;
