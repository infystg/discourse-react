import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUserNotificationSchedules } from 'app/shared/model/user-notification-schedules.model';
import { getEntity, updateEntity, createEntity, reset } from './user-notification-schedules.reducer';

export const UserNotificationSchedulesUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const userNotificationSchedulesEntity = useAppSelector(state => state.userNotificationSchedules.entity);
  const loading = useAppSelector(state => state.userNotificationSchedules.loading);
  const updating = useAppSelector(state => state.userNotificationSchedules.updating);
  const updateSuccess = useAppSelector(state => state.userNotificationSchedules.updateSuccess);
  const handleClose = () => {
    props.history.push('/user-notification-schedules' + props.location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(props.match.params.id));
    }
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...userNotificationSchedulesEntity,
      ...values,
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          ...userNotificationSchedulesEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2
            id="discourseReactApp.userNotificationSchedules.home.createOrEditLabel"
            data-cy="UserNotificationSchedulesCreateUpdateHeading"
          >
            Create or edit a UserNotificationSchedules
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? (
                <ValidatedField name="id" required readOnly id="user-notification-schedules-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="User Id"
                id="user-notification-schedules-userId"
                name="userId"
                data-cy="userId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Enabled"
                id="user-notification-schedules-enabled"
                name="enabled"
                data-cy="enabled"
                check
                type="checkbox"
              />
              <ValidatedField
                label="Day 0 Start Time"
                id="user-notification-schedules-day0StartTime"
                name="day0StartTime"
                data-cy="day0StartTime"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Day 0 End Time"
                id="user-notification-schedules-day0EndTime"
                name="day0EndTime"
                data-cy="day0EndTime"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Day 1 Start Time"
                id="user-notification-schedules-day1StartTime"
                name="day1StartTime"
                data-cy="day1StartTime"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Day 1 End Time"
                id="user-notification-schedules-day1EndTime"
                name="day1EndTime"
                data-cy="day1EndTime"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Day 2 Start Time"
                id="user-notification-schedules-day2StartTime"
                name="day2StartTime"
                data-cy="day2StartTime"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Day 2 End Time"
                id="user-notification-schedules-day2EndTime"
                name="day2EndTime"
                data-cy="day2EndTime"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Day 3 Start Time"
                id="user-notification-schedules-day3StartTime"
                name="day3StartTime"
                data-cy="day3StartTime"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Day 3 End Time"
                id="user-notification-schedules-day3EndTime"
                name="day3EndTime"
                data-cy="day3EndTime"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Day 4 Start Time"
                id="user-notification-schedules-day4StartTime"
                name="day4StartTime"
                data-cy="day4StartTime"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Day 4 End Time"
                id="user-notification-schedules-day4EndTime"
                name="day4EndTime"
                data-cy="day4EndTime"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Day 5 Start Time"
                id="user-notification-schedules-day5StartTime"
                name="day5StartTime"
                data-cy="day5StartTime"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Day 5 End Time"
                id="user-notification-schedules-day5EndTime"
                name="day5EndTime"
                data-cy="day5EndTime"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Day 6 Start Time"
                id="user-notification-schedules-day6StartTime"
                name="day6StartTime"
                data-cy="day6StartTime"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Day 6 End Time"
                id="user-notification-schedules-day6EndTime"
                name="day6EndTime"
                data-cy="day6EndTime"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/user-notification-schedules" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">Back</span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp; Save
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default UserNotificationSchedulesUpdate;
