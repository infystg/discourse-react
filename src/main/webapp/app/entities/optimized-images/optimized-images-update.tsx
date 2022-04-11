import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IOptimizedImages } from 'app/shared/model/optimized-images.model';
import { getEntity, updateEntity, createEntity, reset } from './optimized-images.reducer';

export const OptimizedImagesUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const optimizedImagesEntity = useAppSelector(state => state.optimizedImages.entity);
  const loading = useAppSelector(state => state.optimizedImages.loading);
  const updating = useAppSelector(state => state.optimizedImages.updating);
  const updateSuccess = useAppSelector(state => state.optimizedImages.updateSuccess);
  const handleClose = () => {
    props.history.push('/optimized-images' + props.location.search);
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
      ...optimizedImagesEntity,
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
          ...optimizedImagesEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.optimizedImages.home.createOrEditLabel" data-cy="OptimizedImagesCreateUpdateHeading">
            Create or edit a OptimizedImages
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
                <ValidatedField name="id" required readOnly id="optimized-images-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Sha 1"
                id="optimized-images-sha1"
                name="sha1"
                data-cy="sha1"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Extension"
                id="optimized-images-extension"
                name="extension"
                data-cy="extension"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Width"
                id="optimized-images-width"
                name="width"
                data-cy="width"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Height"
                id="optimized-images-height"
                name="height"
                data-cy="height"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Upload Id"
                id="optimized-images-uploadId"
                name="uploadId"
                data-cy="uploadId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Url"
                id="optimized-images-url"
                name="url"
                data-cy="url"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Filesize" id="optimized-images-filesize" name="filesize" data-cy="filesize" type="text" />
              <ValidatedField label="Etag" id="optimized-images-etag" name="etag" data-cy="etag" type="text" />
              <ValidatedField label="Version" id="optimized-images-version" name="version" data-cy="version" type="text" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/optimized-images" replace color="info">
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

export default OptimizedImagesUpdate;
