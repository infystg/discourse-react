import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ITopicThumbnails } from 'app/shared/model/topic-thumbnails.model';
import { getEntity, updateEntity, createEntity, reset } from './topic-thumbnails.reducer';

export const TopicThumbnailsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const topicThumbnailsEntity = useAppSelector(state => state.topicThumbnails.entity);
  const loading = useAppSelector(state => state.topicThumbnails.loading);
  const updating = useAppSelector(state => state.topicThumbnails.updating);
  const updateSuccess = useAppSelector(state => state.topicThumbnails.updateSuccess);
  const handleClose = () => {
    props.history.push('/topic-thumbnails' + props.location.search);
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
      ...topicThumbnailsEntity,
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
          ...topicThumbnailsEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.topicThumbnails.home.createOrEditLabel" data-cy="TopicThumbnailsCreateUpdateHeading">
            Create or edit a TopicThumbnails
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
                <ValidatedField name="id" required readOnly id="topic-thumbnails-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Upload Id"
                id="topic-thumbnails-uploadId"
                name="uploadId"
                data-cy="uploadId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Optimized Image Id"
                id="topic-thumbnails-optimizedImageId"
                name="optimizedImageId"
                data-cy="optimizedImageId"
                type="text"
              />
              <ValidatedField
                label="Max Width"
                id="topic-thumbnails-maxWidth"
                name="maxWidth"
                data-cy="maxWidth"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Max Height"
                id="topic-thumbnails-maxHeight"
                name="maxHeight"
                data-cy="maxHeight"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/topic-thumbnails" replace color="info">
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

export default TopicThumbnailsUpdate;
