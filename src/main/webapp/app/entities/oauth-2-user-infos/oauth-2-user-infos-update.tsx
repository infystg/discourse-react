import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IOauth2UserInfos } from 'app/shared/model/oauth-2-user-infos.model';
import { getEntity, updateEntity, createEntity, reset } from './oauth-2-user-infos.reducer';

export const Oauth2UserInfosUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const oauth2UserInfosEntity = useAppSelector(state => state.oauth2UserInfos.entity);
  const loading = useAppSelector(state => state.oauth2UserInfos.loading);
  const updating = useAppSelector(state => state.oauth2UserInfos.updating);
  const updateSuccess = useAppSelector(state => state.oauth2UserInfos.updateSuccess);
  const handleClose = () => {
    props.history.push('/oauth-2-user-infos' + props.location.search);
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
    values.updatedAt = convertDateTimeToServer(values.updatedAt);

    const entity = {
      ...oauth2UserInfosEntity,
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
          updatedAt: displayDefaultDateTime(),
        }
      : {
          ...oauth2UserInfosEntity,
          updatedAt: convertDateTimeFromServer(oauth2UserInfosEntity.updatedAt),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.oauth2UserInfos.home.createOrEditLabel" data-cy="Oauth2UserInfosCreateUpdateHeading">
            Create or edit a Oauth2UserInfos
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
                <ValidatedField name="id" required readOnly id="oauth-2-user-infos-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="User Id"
                id="oauth-2-user-infos-userId"
                name="userId"
                data-cy="userId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Uid"
                id="oauth-2-user-infos-uid"
                name="uid"
                data-cy="uid"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Provider"
                id="oauth-2-user-infos-provider"
                name="provider"
                data-cy="provider"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Email" id="oauth-2-user-infos-email" name="email" data-cy="email" type="text" />
              <ValidatedField label="Name" id="oauth-2-user-infos-name" name="name" data-cy="name" type="text" />
              <ValidatedField
                label="Updated At"
                id="oauth-2-user-infos-updatedAt"
                name="updatedAt"
                data-cy="updatedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/oauth-2-user-infos" replace color="info">
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

export default Oauth2UserInfosUpdate;
