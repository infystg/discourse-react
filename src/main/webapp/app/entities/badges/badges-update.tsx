import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUserProfiles } from 'app/shared/model/user-profiles.model';
import { getEntities as getUserProfiles } from 'app/entities/user-profiles/user-profiles.reducer';
import { IBadges } from 'app/shared/model/badges.model';
import { getEntity, updateEntity, createEntity, reset } from './badges.reducer';

export const BadgesUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const userProfiles = useAppSelector(state => state.userProfiles.entities);
  const badgesEntity = useAppSelector(state => state.badges.entity);
  const loading = useAppSelector(state => state.badges.loading);
  const updating = useAppSelector(state => state.badges.updating);
  const updateSuccess = useAppSelector(state => state.badges.updateSuccess);
  const handleClose = () => {
    props.history.push('/badges' + props.location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(props.match.params.id));
    }

    dispatch(getUserProfiles({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...badgesEntity,
      ...values,
      userProfiles: userProfiles.find(it => it.id.toString() === values.userProfiles.toString()),
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
          ...badgesEntity,
          userProfiles: badgesEntity?.userProfiles?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.badges.home.createOrEditLabel" data-cy="BadgesCreateUpdateHeading">
            Create or edit a Badges
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="badges-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="Name"
                id="badges-name"
                name="name"
                data-cy="name"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Description" id="badges-description" name="description" data-cy="description" type="text" />
              <ValidatedField
                label="Badge Type Id"
                id="badges-badgeTypeId"
                name="badgeTypeId"
                data-cy="badgeTypeId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Grant Count"
                id="badges-grantCount"
                name="grantCount"
                data-cy="grantCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Allow Title" id="badges-allowTitle" name="allowTitle" data-cy="allowTitle" check type="checkbox" />
              <ValidatedField
                label="Multiple Grant"
                id="badges-multipleGrant"
                name="multipleGrant"
                data-cy="multipleGrant"
                check
                type="checkbox"
              />
              <ValidatedField label="Icon" id="badges-icon" name="icon" data-cy="icon" type="text" />
              <ValidatedField label="Listable" id="badges-listable" name="listable" data-cy="listable" check type="checkbox" />
              <ValidatedField label="Target Posts" id="badges-targetPosts" name="targetPosts" data-cy="targetPosts" check type="checkbox" />
              <ValidatedField label="Query" id="badges-query" name="query" data-cy="query" type="text" />
              <ValidatedField label="Enabled" id="badges-enabled" name="enabled" data-cy="enabled" check type="checkbox" />
              <ValidatedField label="Auto Revoke" id="badges-autoRevoke" name="autoRevoke" data-cy="autoRevoke" check type="checkbox" />
              <ValidatedField
                label="Badge Grouping Id"
                id="badges-badgeGroupingId"
                name="badgeGroupingId"
                data-cy="badgeGroupingId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Trigger" id="badges-trigger" name="trigger" data-cy="trigger" type="text" />
              <ValidatedField label="Show Posts" id="badges-showPosts" name="showPosts" data-cy="showPosts" check type="checkbox" />
              <ValidatedField label="System" id="badges-system" name="system" data-cy="system" check type="checkbox" />
              <ValidatedField label="Image" id="badges-image" name="image" data-cy="image" type="text" />
              <ValidatedField
                label="Long Description"
                id="badges-longDescription"
                name="longDescription"
                data-cy="longDescription"
                type="text"
              />
              <ValidatedField label="Image Upload Id" id="badges-imageUploadId" name="imageUploadId" data-cy="imageUploadId" type="text" />
              <ValidatedField id="badges-userProfiles" name="userProfiles" data-cy="userProfiles" label="User Profiles" type="select">
                <option value="" key="0" />
                {userProfiles
                  ? userProfiles.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/badges" replace color="info">
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

export default BadgesUpdate;
