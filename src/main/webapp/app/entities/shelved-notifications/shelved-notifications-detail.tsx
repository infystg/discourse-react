import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './shelved-notifications.reducer';

export const ShelvedNotificationsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const shelvedNotificationsEntity = useAppSelector(state => state.shelvedNotifications.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="shelvedNotificationsDetailsHeading">ShelvedNotifications</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{shelvedNotificationsEntity.id}</dd>
          <dt>
            <span id="notificationId">Notification Id</span>
          </dt>
          <dd>{shelvedNotificationsEntity.notificationId}</dd>
        </dl>
        <Button tag={Link} to="/shelved-notifications" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/shelved-notifications/${shelvedNotificationsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default ShelvedNotificationsDetail;
