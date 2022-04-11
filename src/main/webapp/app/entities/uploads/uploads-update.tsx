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
import { IUploads } from 'app/shared/model/uploads.model';
import { getEntity, updateEntity, createEntity, reset } from './uploads.reducer';

export const UploadsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const userProfiles = useAppSelector(state => state.userProfiles.entities);
  const uploadsEntity = useAppSelector(state => state.uploads.entity);
  const loading = useAppSelector(state => state.uploads.loading);
  const updating = useAppSelector(state => state.uploads.updating);
  const updateSuccess = useAppSelector(state => state.uploads.updateSuccess);
  const handleClose = () => {
    props.history.push('/uploads' + props.location.search);
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
    values.securityLastChangedAt = convertDateTimeToServer(values.securityLastChangedAt);

    const entity = {
      ...uploadsEntity,
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
      ? {
          securityLastChangedAt: displayDefaultDateTime(),
        }
      : {
          ...uploadsEntity,
          securityLastChangedAt: convertDateTimeFromServer(uploadsEntity.securityLastChangedAt),
          userProfiles: uploadsEntity?.userProfiles?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.uploads.home.createOrEditLabel" data-cy="UploadsCreateUpdateHeading">
            Create or edit a Uploads
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="uploads-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="User Id"
                id="uploads-userId"
                name="userId"
                data-cy="userId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Original Filename"
                id="uploads-originalFilename"
                name="originalFilename"
                data-cy="originalFilename"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Filesize"
                id="uploads-filesize"
                name="filesize"
                data-cy="filesize"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Width" id="uploads-width" name="width" data-cy="width" type="text" />
              <ValidatedField label="Height" id="uploads-height" name="height" data-cy="height" type="text" />
              <ValidatedField
                label="Url"
                id="uploads-url"
                name="url"
                data-cy="url"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Sha 1" id="uploads-sha1" name="sha1" data-cy="sha1" type="text" />
              <ValidatedField label="Origin" id="uploads-origin" name="origin" data-cy="origin" type="text" />
              <ValidatedField label="Retain Hours" id="uploads-retainHours" name="retainHours" data-cy="retainHours" type="text" />
              <ValidatedField label="Extension" id="uploads-extension" name="extension" data-cy="extension" type="text" />
              <ValidatedField
                label="Thumbnail Width"
                id="uploads-thumbnailWidth"
                name="thumbnailWidth"
                data-cy="thumbnailWidth"
                type="text"
              />
              <ValidatedField
                label="Thumbnail Height"
                id="uploads-thumbnailHeight"
                name="thumbnailHeight"
                data-cy="thumbnailHeight"
                type="text"
              />
              <ValidatedField label="Etag" id="uploads-etag" name="etag" data-cy="etag" type="text" />
              <ValidatedField label="Secure" id="uploads-secure" name="secure" data-cy="secure" check type="checkbox" />
              <ValidatedField
                label="Access Control Post Id"
                id="uploads-accessControlPostId"
                name="accessControlPostId"
                data-cy="accessControlPostId"
                type="text"
              />
              <ValidatedField label="Original Sha 1" id="uploads-originalSha1" name="originalSha1" data-cy="originalSha1" type="text" />
              <ValidatedField label="Animated" id="uploads-animated" name="animated" data-cy="animated" check type="checkbox" />
              <ValidatedField label="Verified" id="uploads-verified" name="verified" data-cy="verified" check type="checkbox" />
              <ValidatedField
                label="Verification Status"
                id="uploads-verificationStatus"
                name="verificationStatus"
                data-cy="verificationStatus"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Security Last Changed At"
                id="uploads-securityLastChangedAt"
                name="securityLastChangedAt"
                data-cy="securityLastChangedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Security Last Changed Reason"
                id="uploads-securityLastChangedReason"
                name="securityLastChangedReason"
                data-cy="securityLastChangedReason"
                type="text"
              />
              <ValidatedField id="uploads-userProfiles" name="userProfiles" data-cy="userProfiles" label="User Profiles" type="select">
                <option value="" key="0" />
                {userProfiles
                  ? userProfiles.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/uploads" replace color="info">
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

export default UploadsUpdate;
