import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { INotifications } from 'app/shared/model/notifications.model';
import { getEntity, updateEntity, createEntity, reset } from './notifications.reducer';

export const NotificationsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const notificationsEntity = useAppSelector(state => state.notifications.entity);
  const loading = useAppSelector(state => state.notifications.loading);
  const updating = useAppSelector(state => state.notifications.updating);
  const updateSuccess = useAppSelector(state => state.notifications.updateSuccess);
  const handleClose = () => {
    props.history.push('/notifications' + props.location.search);
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
      ...notificationsEntity,
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
          ...notificationsEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.notifications.home.createOrEditLabel" data-cy="NotificationsCreateUpdateHeading">
            Create or edit a Notifications
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
                <ValidatedField name="id" required readOnly id="notifications-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Notification Type"
                id="notifications-notificationType"
                name="notificationType"
                data-cy="notificationType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="User Id"
                id="notifications-userId"
                name="userId"
                data-cy="userId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Data"
                id="notifications-data"
                name="data"
                data-cy="data"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Read" id="notifications-read" name="read" data-cy="read" check type="checkbox" />
              <ValidatedField label="Topic Id" id="notifications-topicId" name="topicId" data-cy="topicId" type="text" />
              <ValidatedField label="Post Number" id="notifications-postNumber" name="postNumber" data-cy="postNumber" type="text" />
              <ValidatedField
                label="Post Action Id"
                id="notifications-postActionId"
                name="postActionId"
                data-cy="postActionId"
                type="text"
              />
              <ValidatedField
                label="High Priority"
                id="notifications-highPriority"
                name="highPriority"
                data-cy="highPriority"
                check
                type="checkbox"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/notifications" replace color="info">
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

export default NotificationsUpdate;
