import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUserApiKeyScopes } from 'app/shared/model/user-api-key-scopes.model';
import { getEntity, updateEntity, createEntity, reset } from './user-api-key-scopes.reducer';

export const UserApiKeyScopesUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const userApiKeyScopesEntity = useAppSelector(state => state.userApiKeyScopes.entity);
  const loading = useAppSelector(state => state.userApiKeyScopes.loading);
  const updating = useAppSelector(state => state.userApiKeyScopes.updating);
  const updateSuccess = useAppSelector(state => state.userApiKeyScopes.updateSuccess);
  const handleClose = () => {
    props.history.push('/user-api-key-scopes' + props.location.search);
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
      ...userApiKeyScopesEntity,
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
          ...userApiKeyScopesEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.userApiKeyScopes.home.createOrEditLabel" data-cy="UserApiKeyScopesCreateUpdateHeading">
            Create or edit a UserApiKeyScopes
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
                <ValidatedField name="id" required readOnly id="user-api-key-scopes-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="User Api Key Id"
                id="user-api-key-scopes-userApiKeyId"
                name="userApiKeyId"
                data-cy="userApiKeyId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Name"
                id="user-api-key-scopes-name"
                name="name"
                data-cy="name"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Allowed Parameters"
                id="user-api-key-scopes-allowedParameters"
                name="allowedParameters"
                data-cy="allowedParameters"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/user-api-key-scopes" replace color="info">
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

export default UserApiKeyScopesUpdate;
