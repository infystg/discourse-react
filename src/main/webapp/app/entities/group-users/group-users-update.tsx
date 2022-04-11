import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IGroupUsers } from 'app/shared/model/group-users.model';
import { getEntity, updateEntity, createEntity, reset } from './group-users.reducer';

export const GroupUsersUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const groupUsersEntity = useAppSelector(state => state.groupUsers.entity);
  const loading = useAppSelector(state => state.groupUsers.loading);
  const updating = useAppSelector(state => state.groupUsers.updating);
  const updateSuccess = useAppSelector(state => state.groupUsers.updateSuccess);
  const handleClose = () => {
    props.history.push('/group-users' + props.location.search);
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
    values.firstUnreadPmAt = convertDateTimeToServer(values.firstUnreadPmAt);

    const entity = {
      ...groupUsersEntity,
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
      ? {
          firstUnreadPmAt: displayDefaultDateTime(),
        }
      : {
          ...groupUsersEntity,
          firstUnreadPmAt: convertDateTimeFromServer(groupUsersEntity.firstUnreadPmAt),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.groupUsers.home.createOrEditLabel" data-cy="GroupUsersCreateUpdateHeading">
            Create or edit a GroupUsers
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="group-users-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="Group Id"
                id="group-users-groupId"
                name="groupId"
                data-cy="groupId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="User Id"
                id="group-users-userId"
                name="userId"
                data-cy="userId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Owner" id="group-users-owner" name="owner" data-cy="owner" check type="checkbox" />
              <ValidatedField
                label="Notification Level"
                id="group-users-notificationLevel"
                name="notificationLevel"
                data-cy="notificationLevel"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="First Unread Pm At"
                id="group-users-firstUnreadPmAt"
                name="firstUnreadPmAt"
                data-cy="firstUnreadPmAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/group-users" replace color="info">
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

export default GroupUsersUpdate;
