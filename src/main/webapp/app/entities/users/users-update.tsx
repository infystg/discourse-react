import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUserSecurityKeys } from 'app/shared/model/user-security-keys.model';
import { getEntities as getUserSecurityKeys } from 'app/entities/user-security-keys/user-security-keys.reducer';
import { IUsers } from 'app/shared/model/users.model';
import { getEntity, updateEntity, createEntity, reset } from './users.reducer';

export const UsersUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const userSecurityKeys = useAppSelector(state => state.userSecurityKeys.entities);
  const usersEntity = useAppSelector(state => state.users.entity);
  const loading = useAppSelector(state => state.users.loading);
  const updating = useAppSelector(state => state.users.updating);
  const updateSuccess = useAppSelector(state => state.users.updateSuccess);
  const handleClose = () => {
    props.history.push('/users' + props.location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(props.match.params.id));
    }

    dispatch(getUserSecurityKeys({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    values.lastPostedAt = convertDateTimeToServer(values.lastPostedAt);
    values.lastSeenAt = convertDateTimeToServer(values.lastSeenAt);
    values.lastEmailedAt = convertDateTimeToServer(values.lastEmailedAt);
    values.approvedAt = convertDateTimeToServer(values.approvedAt);
    values.previousVisitAt = convertDateTimeToServer(values.previousVisitAt);
    values.suspendedAt = convertDateTimeToServer(values.suspendedAt);
    values.suspendedTill = convertDateTimeToServer(values.suspendedTill);
    values.firstSeenAt = convertDateTimeToServer(values.firstSeenAt);
    values.silencedTill = convertDateTimeToServer(values.silencedTill);

    const entity = {
      ...usersEntity,
      ...values,
      userSecurityKeys: userSecurityKeys.find(it => it.id.toString() === values.userSecurityKeys.toString()),
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
          lastPostedAt: displayDefaultDateTime(),
          lastSeenAt: displayDefaultDateTime(),
          lastEmailedAt: displayDefaultDateTime(),
          approvedAt: displayDefaultDateTime(),
          previousVisitAt: displayDefaultDateTime(),
          suspendedAt: displayDefaultDateTime(),
          suspendedTill: displayDefaultDateTime(),
          firstSeenAt: displayDefaultDateTime(),
          silencedTill: displayDefaultDateTime(),
        }
      : {
          ...usersEntity,
          lastPostedAt: convertDateTimeFromServer(usersEntity.lastPostedAt),
          lastSeenAt: convertDateTimeFromServer(usersEntity.lastSeenAt),
          lastEmailedAt: convertDateTimeFromServer(usersEntity.lastEmailedAt),
          approvedAt: convertDateTimeFromServer(usersEntity.approvedAt),
          previousVisitAt: convertDateTimeFromServer(usersEntity.previousVisitAt),
          suspendedAt: convertDateTimeFromServer(usersEntity.suspendedAt),
          suspendedTill: convertDateTimeFromServer(usersEntity.suspendedTill),
          firstSeenAt: convertDateTimeFromServer(usersEntity.firstSeenAt),
          silencedTill: convertDateTimeFromServer(usersEntity.silencedTill),
          userSecurityKeys: usersEntity?.userSecurityKeys?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.users.home.createOrEditLabel" data-cy="UsersCreateUpdateHeading">
            Create or edit a Users
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="users-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="Username"
                id="users-username"
                name="username"
                data-cy="username"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Name" id="users-name" name="name" data-cy="name" type="text" />
              <ValidatedField
                label="Seen Notification Id"
                id="users-seenNotificationId"
                name="seenNotificationId"
                data-cy="seenNotificationId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Last Posted At"
                id="users-lastPostedAt"
                name="lastPostedAt"
                data-cy="lastPostedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField label="Password Hash" id="users-passwordHash" name="passwordHash" data-cy="passwordHash" type="text" />
              <ValidatedField label="Salt" id="users-salt" name="salt" data-cy="salt" type="text" />
              <ValidatedField label="Active" id="users-active" name="active" data-cy="active" check type="checkbox" />
              <ValidatedField
                label="Username Lower"
                id="users-usernameLower"
                name="usernameLower"
                data-cy="usernameLower"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Last Seen At"
                id="users-lastSeenAt"
                name="lastSeenAt"
                data-cy="lastSeenAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField label="Admin" id="users-admin" name="admin" data-cy="admin" check type="checkbox" />
              <ValidatedField
                label="Last Emailed At"
                id="users-lastEmailedAt"
                name="lastEmailedAt"
                data-cy="lastEmailedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Trust Level"
                id="users-trustLevel"
                name="trustLevel"
                data-cy="trustLevel"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Approved" id="users-approved" name="approved" data-cy="approved" check type="checkbox" />
              <ValidatedField label="Approved By Id" id="users-approvedById" name="approvedById" data-cy="approvedById" type="text" />
              <ValidatedField
                label="Approved At"
                id="users-approvedAt"
                name="approvedAt"
                data-cy="approvedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Previous Visit At"
                id="users-previousVisitAt"
                name="previousVisitAt"
                data-cy="previousVisitAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Suspended At"
                id="users-suspendedAt"
                name="suspendedAt"
                data-cy="suspendedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Suspended Till"
                id="users-suspendedTill"
                name="suspendedTill"
                data-cy="suspendedTill"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField label="Date Of Birth" id="users-dateOfBirth" name="dateOfBirth" data-cy="dateOfBirth" type="date" />
              <ValidatedField
                label="Views"
                id="users-views"
                name="views"
                data-cy="views"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Flag Level"
                id="users-flagLevel"
                name="flagLevel"
                data-cy="flagLevel"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Ip Address" id="users-ipAddress" name="ipAddress" data-cy="ipAddress" type="text" />
              <ValidatedField label="Moderator" id="users-moderator" name="moderator" data-cy="moderator" check type="checkbox" />
              <ValidatedField label="Title" id="users-title" name="title" data-cy="title" type="text" />
              <ValidatedField
                label="Uploaded Avatar Id"
                id="users-uploadedAvatarId"
                name="uploadedAvatarId"
                data-cy="uploadedAvatarId"
                type="text"
              />
              <ValidatedField label="Locale" id="users-locale" name="locale" data-cy="locale" type="text" />
              <ValidatedField
                label="Primary Group Id"
                id="users-primaryGroupId"
                name="primaryGroupId"
                data-cy="primaryGroupId"
                type="text"
              />
              <ValidatedField
                label="Registration Ip Address"
                id="users-registrationIpAddress"
                name="registrationIpAddress"
                data-cy="registrationIpAddress"
                type="text"
              />
              <ValidatedField label="Staged" id="users-staged" name="staged" data-cy="staged" check type="checkbox" />
              <ValidatedField
                label="First Seen At"
                id="users-firstSeenAt"
                name="firstSeenAt"
                data-cy="firstSeenAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Silenced Till"
                id="users-silencedTill"
                name="silencedTill"
                data-cy="silencedTill"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Group Locked Trust Level"
                id="users-groupLockedTrustLevel"
                name="groupLockedTrustLevel"
                data-cy="groupLockedTrustLevel"
                type="text"
              />
              <ValidatedField
                label="Manual Locked Trust Level"
                id="users-manualLockedTrustLevel"
                name="manualLockedTrustLevel"
                data-cy="manualLockedTrustLevel"
                type="text"
              />
              <ValidatedField
                label="Secure Identifier"
                id="users-secureIdentifier"
                name="secureIdentifier"
                data-cy="secureIdentifier"
                type="text"
              />
              <ValidatedField
                id="users-userSecurityKeys"
                name="userSecurityKeys"
                data-cy="userSecurityKeys"
                label="User Security Keys"
                type="select"
              >
                <option value="" key="0" />
                {userSecurityKeys
                  ? userSecurityKeys.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/users" replace color="info">
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

export default UsersUpdate;
