import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUserApiKeys } from 'app/shared/model/user-api-keys.model';
import { getEntity, updateEntity, createEntity, reset } from './user-api-keys.reducer';

export const UserApiKeysUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const userApiKeysEntity = useAppSelector(state => state.userApiKeys.entity);
  const loading = useAppSelector(state => state.userApiKeys.loading);
  const updating = useAppSelector(state => state.userApiKeys.updating);
  const updateSuccess = useAppSelector(state => state.userApiKeys.updateSuccess);
  const handleClose = () => {
    props.history.push('/user-api-keys' + props.location.search);
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
    values.revokedAt = convertDateTimeToServer(values.revokedAt);
    values.lastUsedAt = convertDateTimeToServer(values.lastUsedAt);

    const entity = {
      ...userApiKeysEntity,
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
          revokedAt: displayDefaultDateTime(),
          lastUsedAt: displayDefaultDateTime(),
        }
      : {
          ...userApiKeysEntity,
          revokedAt: convertDateTimeFromServer(userApiKeysEntity.revokedAt),
          lastUsedAt: convertDateTimeFromServer(userApiKeysEntity.lastUsedAt),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.userApiKeys.home.createOrEditLabel" data-cy="UserApiKeysCreateUpdateHeading">
            Create or edit a UserApiKeys
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
                <ValidatedField name="id" required readOnly id="user-api-keys-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="User Id"
                id="user-api-keys-userId"
                name="userId"
                data-cy="userId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Client Id"
                id="user-api-keys-clientId"
                name="clientId"
                data-cy="clientId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Application Name"
                id="user-api-keys-applicationName"
                name="applicationName"
                data-cy="applicationName"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Push Url" id="user-api-keys-pushUrl" name="pushUrl" data-cy="pushUrl" type="text" />
              <ValidatedField
                label="Revoked At"
                id="user-api-keys-revokedAt"
                name="revokedAt"
                data-cy="revokedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField label="Scopes" id="user-api-keys-scopes" name="scopes" data-cy="scopes" type="text" />
              <ValidatedField
                label="Last Used At"
                id="user-api-keys-lastUsedAt"
                name="lastUsedAt"
                data-cy="lastUsedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Key Hash"
                id="user-api-keys-keyHash"
                name="keyHash"
                data-cy="keyHash"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/user-api-keys" replace color="info">
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

export default UserApiKeysUpdate;
