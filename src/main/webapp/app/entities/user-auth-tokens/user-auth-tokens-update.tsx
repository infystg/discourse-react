import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUserAuthTokens } from 'app/shared/model/user-auth-tokens.model';
import { getEntity, updateEntity, createEntity, reset } from './user-auth-tokens.reducer';

export const UserAuthTokensUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const userAuthTokensEntity = useAppSelector(state => state.userAuthTokens.entity);
  const loading = useAppSelector(state => state.userAuthTokens.loading);
  const updating = useAppSelector(state => state.userAuthTokens.updating);
  const updateSuccess = useAppSelector(state => state.userAuthTokens.updateSuccess);
  const handleClose = () => {
    props.history.push('/user-auth-tokens' + props.location.search);
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
    values.rotatedAt = convertDateTimeToServer(values.rotatedAt);
    values.seenAt = convertDateTimeToServer(values.seenAt);

    const entity = {
      ...userAuthTokensEntity,
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
          rotatedAt: displayDefaultDateTime(),
          seenAt: displayDefaultDateTime(),
        }
      : {
          ...userAuthTokensEntity,
          rotatedAt: convertDateTimeFromServer(userAuthTokensEntity.rotatedAt),
          seenAt: convertDateTimeFromServer(userAuthTokensEntity.seenAt),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.userAuthTokens.home.createOrEditLabel" data-cy="UserAuthTokensCreateUpdateHeading">
            Create or edit a UserAuthTokens
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
                <ValidatedField name="id" required readOnly id="user-auth-tokens-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="User Id"
                id="user-auth-tokens-userId"
                name="userId"
                data-cy="userId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Auth Token"
                id="user-auth-tokens-authToken"
                name="authToken"
                data-cy="authToken"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Prev Auth Token"
                id="user-auth-tokens-prevAuthToken"
                name="prevAuthToken"
                data-cy="prevAuthToken"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="User Agent" id="user-auth-tokens-userAgent" name="userAgent" data-cy="userAgent" type="text" />
              <ValidatedField
                label="Auth Token Seen"
                id="user-auth-tokens-authTokenSeen"
                name="authTokenSeen"
                data-cy="authTokenSeen"
                check
                type="checkbox"
              />
              <ValidatedField label="Client Ip" id="user-auth-tokens-clientIp" name="clientIp" data-cy="clientIp" type="text" />
              <ValidatedField
                label="Rotated At"
                id="user-auth-tokens-rotatedAt"
                name="rotatedAt"
                data-cy="rotatedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Seen At"
                id="user-auth-tokens-seenAt"
                name="seenAt"
                data-cy="seenAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/user-auth-tokens" replace color="info">
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

export default UserAuthTokensUpdate;
