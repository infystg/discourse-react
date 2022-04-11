import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IApiKeys } from 'app/shared/model/api-keys.model';
import { getEntity, updateEntity, createEntity, reset } from './api-keys.reducer';

export const ApiKeysUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const apiKeysEntity = useAppSelector(state => state.apiKeys.entity);
  const loading = useAppSelector(state => state.apiKeys.loading);
  const updating = useAppSelector(state => state.apiKeys.updating);
  const updateSuccess = useAppSelector(state => state.apiKeys.updateSuccess);
  const handleClose = () => {
    props.history.push('/api-keys' + props.location.search);
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
    values.lastUsedAt = convertDateTimeToServer(values.lastUsedAt);
    values.revokedAt = convertDateTimeToServer(values.revokedAt);

    const entity = {
      ...apiKeysEntity,
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
          lastUsedAt: displayDefaultDateTime(),
          revokedAt: displayDefaultDateTime(),
        }
      : {
          ...apiKeysEntity,
          lastUsedAt: convertDateTimeFromServer(apiKeysEntity.lastUsedAt),
          revokedAt: convertDateTimeFromServer(apiKeysEntity.revokedAt),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.apiKeys.home.createOrEditLabel" data-cy="ApiKeysCreateUpdateHeading">
            Create or edit a ApiKeys
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="api-keys-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField label="User Id" id="api-keys-userId" name="userId" data-cy="userId" type="text" />
              <ValidatedField label="Allowed Ips" id="api-keys-allowedIps" name="allowedIps" data-cy="allowedIps" type="text" />
              <ValidatedField label="Hidden" id="api-keys-hidden" name="hidden" data-cy="hidden" check type="checkbox" />
              <ValidatedField
                label="Last Used At"
                id="api-keys-lastUsedAt"
                name="lastUsedAt"
                data-cy="lastUsedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Revoked At"
                id="api-keys-revokedAt"
                name="revokedAt"
                data-cy="revokedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField label="Description" id="api-keys-description" name="description" data-cy="description" type="text" />
              <ValidatedField
                label="Key Hash"
                id="api-keys-keyHash"
                name="keyHash"
                data-cy="keyHash"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Truncated Key"
                id="api-keys-truncatedKey"
                name="truncatedKey"
                data-cy="truncatedKey"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/api-keys" replace color="info">
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

export default ApiKeysUpdate;
