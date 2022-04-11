import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IInvitedUsers } from 'app/shared/model/invited-users.model';
import { getEntity, updateEntity, createEntity, reset } from './invited-users.reducer';

export const InvitedUsersUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const invitedUsersEntity = useAppSelector(state => state.invitedUsers.entity);
  const loading = useAppSelector(state => state.invitedUsers.loading);
  const updating = useAppSelector(state => state.invitedUsers.updating);
  const updateSuccess = useAppSelector(state => state.invitedUsers.updateSuccess);
  const handleClose = () => {
    props.history.push('/invited-users' + props.location.search);
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
    values.redeemedAt = convertDateTimeToServer(values.redeemedAt);
    values.updatedAt = convertDateTimeToServer(values.updatedAt);

    const entity = {
      ...invitedUsersEntity,
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
          redeemedAt: displayDefaultDateTime(),
          updatedAt: displayDefaultDateTime(),
        }
      : {
          ...invitedUsersEntity,
          redeemedAt: convertDateTimeFromServer(invitedUsersEntity.redeemedAt),
          updatedAt: convertDateTimeFromServer(invitedUsersEntity.updatedAt),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.invitedUsers.home.createOrEditLabel" data-cy="InvitedUsersCreateUpdateHeading">
            Create or edit a InvitedUsers
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
                <ValidatedField name="id" required readOnly id="invited-users-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField label="User Id" id="invited-users-userId" name="userId" data-cy="userId" type="text" />
              <ValidatedField
                label="Invite Id"
                id="invited-users-inviteId"
                name="inviteId"
                data-cy="inviteId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Redeemed At"
                id="invited-users-redeemedAt"
                name="redeemedAt"
                data-cy="redeemedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Updated At"
                id="invited-users-updatedAt"
                name="updatedAt"
                data-cy="updatedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/invited-users" replace color="info">
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

export default InvitedUsersUpdate;
