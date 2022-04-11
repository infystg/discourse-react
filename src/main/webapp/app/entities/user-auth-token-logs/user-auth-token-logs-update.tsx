import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUserAuthTokenLogs } from 'app/shared/model/user-auth-token-logs.model';
import { getEntity, updateEntity, createEntity, reset } from './user-auth-token-logs.reducer';

export const UserAuthTokenLogsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const userAuthTokenLogsEntity = useAppSelector(state => state.userAuthTokenLogs.entity);
  const loading = useAppSelector(state => state.userAuthTokenLogs.loading);
  const updating = useAppSelector(state => state.userAuthTokenLogs.updating);
  const updateSuccess = useAppSelector(state => state.userAuthTokenLogs.updateSuccess);
  const handleClose = () => {
    props.history.push('/user-auth-token-logs' + props.location.search);
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
      ...userAuthTokenLogsEntity,
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
          ...userAuthTokenLogsEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.userAuthTokenLogs.home.createOrEditLabel" data-cy="UserAuthTokenLogsCreateUpdateHeading">
            Create or edit a UserAuthTokenLogs
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
                <ValidatedField name="id" required readOnly id="user-auth-token-logs-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Action"
                id="user-auth-token-logs-action"
                name="action"
                data-cy="action"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="User Auth Token Id"
                id="user-auth-token-logs-userAuthTokenId"
                name="userAuthTokenId"
                data-cy="userAuthTokenId"
                type="text"
              />
              <ValidatedField label="User Id" id="user-auth-token-logs-userId" name="userId" data-cy="userId" type="text" />
              <ValidatedField label="Client Ip" id="user-auth-token-logs-clientIp" name="clientIp" data-cy="clientIp" type="text" />
              <ValidatedField label="User Agent" id="user-auth-token-logs-userAgent" name="userAgent" data-cy="userAgent" type="text" />
              <ValidatedField label="Auth Token" id="user-auth-token-logs-authToken" name="authToken" data-cy="authToken" type="text" />
              <ValidatedField label="Path" id="user-auth-token-logs-path" name="path" data-cy="path" type="text" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/user-auth-token-logs" replace color="info">
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

export default UserAuthTokenLogsUpdate;
