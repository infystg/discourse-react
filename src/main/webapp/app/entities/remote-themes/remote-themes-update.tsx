import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IRemoteThemes } from 'app/shared/model/remote-themes.model';
import { getEntity, updateEntity, createEntity, reset } from './remote-themes.reducer';

export const RemoteThemesUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const remoteThemesEntity = useAppSelector(state => state.remoteThemes.entity);
  const loading = useAppSelector(state => state.remoteThemes.loading);
  const updating = useAppSelector(state => state.remoteThemes.updating);
  const updateSuccess = useAppSelector(state => state.remoteThemes.updateSuccess);
  const handleClose = () => {
    props.history.push('/remote-themes' + props.location.search);
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
    values.remoteUpdatedAt = convertDateTimeToServer(values.remoteUpdatedAt);

    const entity = {
      ...remoteThemesEntity,
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
          remoteUpdatedAt: displayDefaultDateTime(),
        }
      : {
          ...remoteThemesEntity,
          remoteUpdatedAt: convertDateTimeFromServer(remoteThemesEntity.remoteUpdatedAt),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.remoteThemes.home.createOrEditLabel" data-cy="RemoteThemesCreateUpdateHeading">
            Create or edit a RemoteThemes
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
                <ValidatedField name="id" required readOnly id="remote-themes-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Remote Url"
                id="remote-themes-remoteUrl"
                name="remoteUrl"
                data-cy="remoteUrl"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Remote Version"
                id="remote-themes-remoteVersion"
                name="remoteVersion"
                data-cy="remoteVersion"
                type="text"
              />
              <ValidatedField
                label="Local Version"
                id="remote-themes-localVersion"
                name="localVersion"
                data-cy="localVersion"
                type="text"
              />
              <ValidatedField label="About Url" id="remote-themes-aboutUrl" name="aboutUrl" data-cy="aboutUrl" type="text" />
              <ValidatedField label="License Url" id="remote-themes-licenseUrl" name="licenseUrl" data-cy="licenseUrl" type="text" />
              <ValidatedField
                label="Commits Behind"
                id="remote-themes-commitsBehind"
                name="commitsBehind"
                data-cy="commitsBehind"
                type="text"
              />
              <ValidatedField
                label="Remote Updated At"
                id="remote-themes-remoteUpdatedAt"
                name="remoteUpdatedAt"
                data-cy="remoteUpdatedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField label="Private Key" id="remote-themes-privateKey" name="privateKey" data-cy="privateKey" type="text" />
              <ValidatedField label="Branch" id="remote-themes-branch" name="branch" data-cy="branch" type="text" />
              <ValidatedField
                label="Last Error Text"
                id="remote-themes-lastErrorText"
                name="lastErrorText"
                data-cy="lastErrorText"
                type="text"
              />
              <ValidatedField label="Authors" id="remote-themes-authors" name="authors" data-cy="authors" type="text" />
              <ValidatedField
                label="Theme Version"
                id="remote-themes-themeVersion"
                name="themeVersion"
                data-cy="themeVersion"
                type="text"
              />
              <ValidatedField
                label="Minimum Discourse Version"
                id="remote-themes-minimumDiscourseVersion"
                name="minimumDiscourseVersion"
                data-cy="minimumDiscourseVersion"
                type="text"
              />
              <ValidatedField
                label="Maximum Discourse Version"
                id="remote-themes-maximumDiscourseVersion"
                name="maximumDiscourseVersion"
                data-cy="maximumDiscourseVersion"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/remote-themes" replace color="info">
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

export default RemoteThemesUpdate;
