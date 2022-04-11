import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUserProfileViews } from 'app/shared/model/user-profile-views.model';
import { getEntity, updateEntity, createEntity, reset } from './user-profile-views.reducer';

export const UserProfileViewsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const userProfileViewsEntity = useAppSelector(state => state.userProfileViews.entity);
  const loading = useAppSelector(state => state.userProfileViews.loading);
  const updating = useAppSelector(state => state.userProfileViews.updating);
  const updateSuccess = useAppSelector(state => state.userProfileViews.updateSuccess);
  const handleClose = () => {
    props.history.push('/user-profile-views' + props.location.search);
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
    values.viewedAt = convertDateTimeToServer(values.viewedAt);

    const entity = {
      ...userProfileViewsEntity,
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
          viewedAt: displayDefaultDateTime(),
        }
      : {
          ...userProfileViewsEntity,
          viewedAt: convertDateTimeFromServer(userProfileViewsEntity.viewedAt),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.userProfileViews.home.createOrEditLabel" data-cy="UserProfileViewsCreateUpdateHeading">
            Create or edit a UserProfileViews
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
                <ValidatedField name="id" required readOnly id="user-profile-views-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="User Profile Id"
                id="user-profile-views-userProfileId"
                name="userProfileId"
                data-cy="userProfileId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Viewed At"
                id="user-profile-views-viewedAt"
                name="viewedAt"
                data-cy="viewedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Ip Address" id="user-profile-views-ipAddress" name="ipAddress" data-cy="ipAddress" type="text" />
              <ValidatedField label="User Id" id="user-profile-views-userId" name="userId" data-cy="userId" type="text" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/user-profile-views" replace color="info">
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

export default UserProfileViewsUpdate;
