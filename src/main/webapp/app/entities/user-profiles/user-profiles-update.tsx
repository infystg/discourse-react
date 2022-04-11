import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUserProfiles } from 'app/shared/model/user-profiles.model';
import { getEntity, updateEntity, createEntity, reset } from './user-profiles.reducer';

export const UserProfilesUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const userProfilesEntity = useAppSelector(state => state.userProfiles.entity);
  const loading = useAppSelector(state => state.userProfiles.loading);
  const updating = useAppSelector(state => state.userProfiles.updating);
  const updateSuccess = useAppSelector(state => state.userProfiles.updateSuccess);
  const handleClose = () => {
    props.history.push('/user-profiles' + props.location.search);
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
      ...userProfilesEntity,
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
          ...userProfilesEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.userProfiles.home.createOrEditLabel" data-cy="UserProfilesCreateUpdateHeading">
            Create or edit a UserProfiles
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
                <ValidatedField name="id" required readOnly id="user-profiles-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="User Id"
                id="user-profiles-userId"
                name="userId"
                data-cy="userId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Location" id="user-profiles-location" name="location" data-cy="location" type="text" />
              <ValidatedField label="Website" id="user-profiles-website" name="website" data-cy="website" type="text" />
              <ValidatedField label="Bio Raw" id="user-profiles-bioRaw" name="bioRaw" data-cy="bioRaw" type="text" />
              <ValidatedField label="Bio Cooked" id="user-profiles-bioCooked" name="bioCooked" data-cy="bioCooked" type="text" />
              <ValidatedField
                label="Dismissed Banner Key"
                id="user-profiles-dismissedBannerKey"
                name="dismissedBannerKey"
                data-cy="dismissedBannerKey"
                type="text"
              />
              <ValidatedField
                label="Bio Cooked Version"
                id="user-profiles-bioCookedVersion"
                name="bioCookedVersion"
                data-cy="bioCookedVersion"
                type="text"
              />
              <ValidatedField
                label="Badge Granted Title"
                id="user-profiles-badgeGrantedTitle"
                name="badgeGrantedTitle"
                data-cy="badgeGrantedTitle"
                check
                type="checkbox"
              />
              <ValidatedField
                label="Views"
                id="user-profiles-views"
                name="views"
                data-cy="views"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Profile Background Upload Id"
                id="user-profiles-profileBackgroundUploadId"
                name="profileBackgroundUploadId"
                data-cy="profileBackgroundUploadId"
                type="text"
              />
              <ValidatedField
                label="Card Background Upload Id"
                id="user-profiles-cardBackgroundUploadId"
                name="cardBackgroundUploadId"
                data-cy="cardBackgroundUploadId"
                type="text"
              />
              <ValidatedField
                label="Granted Title Badge Id"
                id="user-profiles-grantedTitleBadgeId"
                name="grantedTitleBadgeId"
                data-cy="grantedTitleBadgeId"
                type="text"
              />
              <ValidatedField
                label="Featured Topic Id"
                id="user-profiles-featuredTopicId"
                name="featuredTopicId"
                data-cy="featuredTopicId"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/user-profiles" replace color="info">
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

export default UserProfilesUpdate;
