import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUserSecurityKeys } from 'app/shared/model/user-security-keys.model';
import { getEntity, updateEntity, createEntity, reset } from './user-security-keys.reducer';

export const UserSecurityKeysUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const userSecurityKeysEntity = useAppSelector(state => state.userSecurityKeys.entity);
  const loading = useAppSelector(state => state.userSecurityKeys.loading);
  const updating = useAppSelector(state => state.userSecurityKeys.updating);
  const updateSuccess = useAppSelector(state => state.userSecurityKeys.updateSuccess);
  const handleClose = () => {
    props.history.push('/user-security-keys' + props.location.search);
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
    values.lastUsed = convertDateTimeToServer(values.lastUsed);

    const entity = {
      ...userSecurityKeysEntity,
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
          lastUsed: displayDefaultDateTime(),
        }
      : {
          ...userSecurityKeysEntity,
          lastUsed: convertDateTimeFromServer(userSecurityKeysEntity.lastUsed),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.userSecurityKeys.home.createOrEditLabel" data-cy="UserSecurityKeysCreateUpdateHeading">
            Create or edit a UserSecurityKeys
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
                <ValidatedField name="id" required readOnly id="user-security-keys-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="User Id"
                id="user-security-keys-userId"
                name="userId"
                data-cy="userId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Credential Id"
                id="user-security-keys-credentialId"
                name="credentialId"
                data-cy="credentialId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Public Key"
                id="user-security-keys-publicKey"
                name="publicKey"
                data-cy="publicKey"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Factor Type"
                id="user-security-keys-factorType"
                name="factorType"
                data-cy="factorType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Enabled" id="user-security-keys-enabled" name="enabled" data-cy="enabled" check type="checkbox" />
              <ValidatedField
                label="Name"
                id="user-security-keys-name"
                name="name"
                data-cy="name"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Last Used"
                id="user-security-keys-lastUsed"
                name="lastUsed"
                data-cy="lastUsed"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/user-security-keys" replace color="info">
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

export default UserSecurityKeysUpdate;
