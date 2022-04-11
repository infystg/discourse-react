import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './user-notification-schedules.reducer';

export const UserNotificationSchedulesDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const userNotificationSchedulesEntity = useAppSelector(state => state.userNotificationSchedules.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="userNotificationSchedulesDetailsHeading">UserNotificationSchedules</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{userNotificationSchedulesEntity.id}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{userNotificationSchedulesEntity.userId}</dd>
          <dt>
            <span id="enabled">Enabled</span>
          </dt>
          <dd>{userNotificationSchedulesEntity.enabled ? 'true' : 'false'}</dd>
          <dt>
            <span id="day0StartTime">Day 0 Start Time</span>
          </dt>
          <dd>{userNotificationSchedulesEntity.day0StartTime}</dd>
          <dt>
            <span id="day0EndTime">Day 0 End Time</span>
          </dt>
          <dd>{userNotificationSchedulesEntity.day0EndTime}</dd>
          <dt>
            <span id="day1StartTime">Day 1 Start Time</span>
          </dt>
          <dd>{userNotificationSchedulesEntity.day1StartTime}</dd>
          <dt>
            <span id="day1EndTime">Day 1 End Time</span>
          </dt>
          <dd>{userNotificationSchedulesEntity.day1EndTime}</dd>
          <dt>
            <span id="day2StartTime">Day 2 Start Time</span>
          </dt>
          <dd>{userNotificationSchedulesEntity.day2StartTime}</dd>
          <dt>
            <span id="day2EndTime">Day 2 End Time</span>
          </dt>
          <dd>{userNotificationSchedulesEntity.day2EndTime}</dd>
          <dt>
            <span id="day3StartTime">Day 3 Start Time</span>
          </dt>
          <dd>{userNotificationSchedulesEntity.day3StartTime}</dd>
          <dt>
            <span id="day3EndTime">Day 3 End Time</span>
          </dt>
          <dd>{userNotificationSchedulesEntity.day3EndTime}</dd>
          <dt>
            <span id="day4StartTime">Day 4 Start Time</span>
          </dt>
          <dd>{userNotificationSchedulesEntity.day4StartTime}</dd>
          <dt>
            <span id="day4EndTime">Day 4 End Time</span>
          </dt>
          <dd>{userNotificationSchedulesEntity.day4EndTime}</dd>
          <dt>
            <span id="day5StartTime">Day 5 Start Time</span>
          </dt>
          <dd>{userNotificationSchedulesEntity.day5StartTime}</dd>
          <dt>
            <span id="day5EndTime">Day 5 End Time</span>
          </dt>
          <dd>{userNotificationSchedulesEntity.day5EndTime}</dd>
          <dt>
            <span id="day6StartTime">Day 6 Start Time</span>
          </dt>
          <dd>{userNotificationSchedulesEntity.day6StartTime}</dd>
          <dt>
            <span id="day6EndTime">Day 6 End Time</span>
          </dt>
          <dd>{userNotificationSchedulesEntity.day6EndTime}</dd>
        </dl>
        <Button tag={Link} to="/user-notification-schedules" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/user-notification-schedules/${userNotificationSchedulesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default UserNotificationSchedulesDetail;
