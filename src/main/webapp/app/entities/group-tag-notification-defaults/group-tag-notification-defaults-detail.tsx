import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './group-tag-notification-defaults.reducer';

export const GroupTagNotificationDefaultsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const groupTagNotificationDefaultsEntity = useAppSelector(state => state.groupTagNotificationDefaults.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="groupTagNotificationDefaultsDetailsHeading">GroupTagNotificationDefaults</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{groupTagNotificationDefaultsEntity.id}</dd>
          <dt>
            <span id="groupId">Group Id</span>
          </dt>
          <dd>{groupTagNotificationDefaultsEntity.groupId}</dd>
          <dt>
            <span id="tagId">Tag Id</span>
          </dt>
          <dd>{groupTagNotificationDefaultsEntity.tagId}</dd>
          <dt>
            <span id="notificationLevel">Notification Level</span>
          </dt>
          <dd>{groupTagNotificationDefaultsEntity.notificationLevel}</dd>
        </dl>
        <Button tag={Link} to="/group-tag-notification-defaults" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/group-tag-notification-defaults/${groupTagNotificationDefaultsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default GroupTagNotificationDefaultsDetail;
