import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './message-bus.reducer';

export const MessageBusDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const messageBusEntity = useAppSelector(state => state.messageBus.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="messageBusDetailsHeading">MessageBus</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{messageBusEntity.id}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{messageBusEntity.name}</dd>
          <dt>
            <span id="context">Context</span>
          </dt>
          <dd>{messageBusEntity.context}</dd>
          <dt>
            <span id="data">Data</span>
          </dt>
          <dd>{messageBusEntity.data}</dd>
        </dl>
        <Button tag={Link} to="/message-bus" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/message-bus/${messageBusEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default MessageBusDetail;
