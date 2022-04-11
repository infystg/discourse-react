import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUserAvatars } from 'app/shared/model/user-avatars.model';
import { getEntity, updateEntity, createEntity, reset } from './user-avatars.reducer';

export const UserAvatarsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const userAvatarsEntity = useAppSelector(state => state.userAvatars.entity);
  const loading = useAppSelector(state => state.userAvatars.loading);
  const updating = useAppSelector(state => state.userAvatars.updating);
  const updateSuccess = useAppSelector(state => state.userAvatars.updateSuccess);
  const handleClose = () => {
    props.history.push('/user-avatars' + props.location.search);
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
    values.lastGravatarDownloadAttempt = convertDateTimeToServer(values.lastGravatarDownloadAttempt);
    values.updatedAt = convertDateTimeToServer(values.updatedAt);

    const entity = {
      ...userAvatarsEntity,
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
          lastGravatarDownloadAttempt: displayDefaultDateTime(),
          updatedAt: displayDefaultDateTime(),
        }
      : {
          ...userAvatarsEntity,
          lastGravatarDownloadAttempt: convertDateTimeFromServer(userAvatarsEntity.lastGravatarDownloadAttempt),
          updatedAt: convertDateTimeFromServer(userAvatarsEntity.updatedAt),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.userAvatars.home.createOrEditLabel" data-cy="UserAvatarsCreateUpdateHeading">
            Create or edit a UserAvatars
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="user-avatars-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="User Id"
                id="user-avatars-userId"
                name="userId"
                data-cy="userId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Custom Upload Id"
                id="user-avatars-customUploadId"
                name="customUploadId"
                data-cy="customUploadId"
                type="text"
              />
              <ValidatedField
                label="Gravatar Upload Id"
                id="user-avatars-gravatarUploadId"
                name="gravatarUploadId"
                data-cy="gravatarUploadId"
                type="text"
              />
              <ValidatedField
                label="Last Gravatar Download Attempt"
                id="user-avatars-lastGravatarDownloadAttempt"
                name="lastGravatarDownloadAttempt"
                data-cy="lastGravatarDownloadAttempt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Updated At"
                id="user-avatars-updatedAt"
                name="updatedAt"
                data-cy="updatedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/user-avatars" replace color="info">
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

export default UserAvatarsUpdate;
