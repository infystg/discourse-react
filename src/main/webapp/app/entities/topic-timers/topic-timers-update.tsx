import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ITopicTimers } from 'app/shared/model/topic-timers.model';
import { getEntity, updateEntity, createEntity, reset } from './topic-timers.reducer';

export const TopicTimersUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const topicTimersEntity = useAppSelector(state => state.topicTimers.entity);
  const loading = useAppSelector(state => state.topicTimers.loading);
  const updating = useAppSelector(state => state.topicTimers.updating);
  const updateSuccess = useAppSelector(state => state.topicTimers.updateSuccess);
  const handleClose = () => {
    props.history.push('/topic-timers' + props.location.search);
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
    values.executeAt = convertDateTimeToServer(values.executeAt);
    values.deletedAt = convertDateTimeToServer(values.deletedAt);

    const entity = {
      ...topicTimersEntity,
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
          executeAt: displayDefaultDateTime(),
          deletedAt: displayDefaultDateTime(),
        }
      : {
          ...topicTimersEntity,
          executeAt: convertDateTimeFromServer(topicTimersEntity.executeAt),
          deletedAt: convertDateTimeFromServer(topicTimersEntity.deletedAt),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.topicTimers.home.createOrEditLabel" data-cy="TopicTimersCreateUpdateHeading">
            Create or edit a TopicTimers
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="topic-timers-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="Execute At"
                id="topic-timers-executeAt"
                name="executeAt"
                data-cy="executeAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Status Type"
                id="topic-timers-statusType"
                name="statusType"
                data-cy="statusType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="User Id"
                id="topic-timers-userId"
                name="userId"
                data-cy="userId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Topic Id"
                id="topic-timers-topicId"
                name="topicId"
                data-cy="topicId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Based On Last Post"
                id="topic-timers-basedOnLastPost"
                name="basedOnLastPost"
                data-cy="basedOnLastPost"
                check
                type="checkbox"
              />
              <ValidatedField
                label="Deleted At"
                id="topic-timers-deletedAt"
                name="deletedAt"
                data-cy="deletedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField label="Deleted By Id" id="topic-timers-deletedById" name="deletedById" data-cy="deletedById" type="text" />
              <ValidatedField label="Category Id" id="topic-timers-categoryId" name="categoryId" data-cy="categoryId" type="text" />
              <ValidatedField
                label="Public Type"
                id="topic-timers-publicType"
                name="publicType"
                data-cy="publicType"
                check
                type="checkbox"
              />
              <ValidatedField label="Duration" id="topic-timers-duration" name="duration" data-cy="duration" type="text" />
              <ValidatedField
                label="Duration Minutes"
                id="topic-timers-durationMinutes"
                name="durationMinutes"
                data-cy="durationMinutes"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/topic-timers" replace color="info">
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

export default TopicTimersUpdate;
