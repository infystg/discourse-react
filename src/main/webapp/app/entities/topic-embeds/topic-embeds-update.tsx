import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ITopicEmbeds } from 'app/shared/model/topic-embeds.model';
import { getEntity, updateEntity, createEntity, reset } from './topic-embeds.reducer';

export const TopicEmbedsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const topicEmbedsEntity = useAppSelector(state => state.topicEmbeds.entity);
  const loading = useAppSelector(state => state.topicEmbeds.loading);
  const updating = useAppSelector(state => state.topicEmbeds.updating);
  const updateSuccess = useAppSelector(state => state.topicEmbeds.updateSuccess);
  const handleClose = () => {
    props.history.push('/topic-embeds' + props.location.search);
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
    values.deletedAt = convertDateTimeToServer(values.deletedAt);

    const entity = {
      ...topicEmbedsEntity,
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
          deletedAt: displayDefaultDateTime(),
        }
      : {
          ...topicEmbedsEntity,
          deletedAt: convertDateTimeFromServer(topicEmbedsEntity.deletedAt),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.topicEmbeds.home.createOrEditLabel" data-cy="TopicEmbedsCreateUpdateHeading">
            Create or edit a TopicEmbeds
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="topic-embeds-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="Topic Id"
                id="topic-embeds-topicId"
                name="topicId"
                data-cy="topicId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Post Id"
                id="topic-embeds-postId"
                name="postId"
                data-cy="postId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Embed Url"
                id="topic-embeds-embedUrl"
                name="embedUrl"
                data-cy="embedUrl"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Content Sha 1" id="topic-embeds-contentSha1" name="contentSha1" data-cy="contentSha1" type="text" />
              <ValidatedField
                label="Deleted At"
                id="topic-embeds-deletedAt"
                name="deletedAt"
                data-cy="deletedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField label="Deleted By Id" id="topic-embeds-deletedById" name="deletedById" data-cy="deletedById" type="text" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/topic-embeds" replace color="info">
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

export default TopicEmbedsUpdate;
