import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IApiKeyScopes } from 'app/shared/model/api-key-scopes.model';
import { getEntity, updateEntity, createEntity, reset } from './api-key-scopes.reducer';

export const ApiKeyScopesUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const apiKeyScopesEntity = useAppSelector(state => state.apiKeyScopes.entity);
  const loading = useAppSelector(state => state.apiKeyScopes.loading);
  const updating = useAppSelector(state => state.apiKeyScopes.updating);
  const updateSuccess = useAppSelector(state => state.apiKeyScopes.updateSuccess);
  const handleClose = () => {
    props.history.push('/api-key-scopes' + props.location.search);
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
      ...apiKeyScopesEntity,
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
          ...apiKeyScopesEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.apiKeyScopes.home.createOrEditLabel" data-cy="ApiKeyScopesCreateUpdateHeading">
            Create or edit a ApiKeyScopes
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
                <ValidatedField name="id" required readOnly id="api-key-scopes-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Api Key Id"
                id="api-key-scopes-apiKeyId"
                name="apiKeyId"
                data-cy="apiKeyId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Resource"
                id="api-key-scopes-resource"
                name="resource"
                data-cy="resource"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Action"
                id="api-key-scopes-action"
                name="action"
                data-cy="action"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Allowed Parameters"
                id="api-key-scopes-allowedParameters"
                name="allowedParameters"
                data-cy="allowedParameters"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/api-key-scopes" replace color="info">
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

export default ApiKeyScopesUpdate;
