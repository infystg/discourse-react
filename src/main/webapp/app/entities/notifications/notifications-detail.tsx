import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './notifications.reducer';

export const NotificationsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const notificationsEntity = useAppSelector(state => state.notifications.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="notificationsDetailsHeading">Notifications</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{notificationsEntity.id}</dd>
          <dt>
            <span id="notificationType">Notification Type</span>
          </dt>
          <dd>{notificationsEntity.notificationType}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{notificationsEntity.userId}</dd>
          <dt>
            <span id="data">Data</span>
          </dt>
          <dd>{notificationsEntity.data}</dd>
          <dt>
            <span id="read">Read</span>
          </dt>
          <dd>{notificationsEntity.read ? 'true' : 'false'}</dd>
          <dt>
            <span id="topicId">Topic Id</span>
          </dt>
          <dd>{notificationsEntity.topicId}</dd>
          <dt>
            <span id="postNumber">Post Number</span>
          </dt>
          <dd>{notificationsEntity.postNumber}</dd>
          <dt>
            <span id="postActionId">Post Action Id</span>
          </dt>
          <dd>{notificationsEntity.postActionId}</dd>
          <dt>
            <span id="highPriority">High Priority</span>
          </dt>
          <dd>{notificationsEntity.highPriority ? 'true' : 'false'}</dd>
        </dl>
        <Button tag={Link} to="/notifications" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/notifications/${notificationsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default NotificationsDetail;
