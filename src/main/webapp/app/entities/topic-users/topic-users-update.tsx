import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ITopicUsers } from 'app/shared/model/topic-users.model';
import { getEntity, updateEntity, createEntity, reset } from './topic-users.reducer';

export const TopicUsersUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const topicUsersEntity = useAppSelector(state => state.topicUsers.entity);
  const loading = useAppSelector(state => state.topicUsers.loading);
  const updating = useAppSelector(state => state.topicUsers.updating);
  const updateSuccess = useAppSelector(state => state.topicUsers.updateSuccess);
  const handleClose = () => {
    props.history.push('/topic-users' + props.location.search);
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
    values.lastVisitedAt = convertDateTimeToServer(values.lastVisitedAt);
    values.firstVisitedAt = convertDateTimeToServer(values.firstVisitedAt);
    values.notificationsChangedAt = convertDateTimeToServer(values.notificationsChangedAt);
    values.clearedPinnedAt = convertDateTimeToServer(values.clearedPinnedAt);
    values.lastPostedAt = convertDateTimeToServer(values.lastPostedAt);

    const entity = {
      ...topicUsersEntity,
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
          lastVisitedAt: displayDefaultDateTime(),
          firstVisitedAt: displayDefaultDateTime(),
          notificationsChangedAt: displayDefaultDateTime(),
          clearedPinnedAt: displayDefaultDateTime(),
          lastPostedAt: displayDefaultDateTime(),
        }
      : {
          ...topicUsersEntity,
          lastVisitedAt: convertDateTimeFromServer(topicUsersEntity.lastVisitedAt),
          firstVisitedAt: convertDateTimeFromServer(topicUsersEntity.firstVisitedAt),
          notificationsChangedAt: convertDateTimeFromServer(topicUsersEntity.notificationsChangedAt),
          clearedPinnedAt: convertDateTimeFromServer(topicUsersEntity.clearedPinnedAt),
          lastPostedAt: convertDateTimeFromServer(topicUsersEntity.lastPostedAt),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.topicUsers.home.createOrEditLabel" data-cy="TopicUsersCreateUpdateHeading">
            Create or edit a TopicUsers
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="topic-users-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="User Id"
                id="topic-users-userId"
                name="userId"
                data-cy="userId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Topic Id"
                id="topic-users-topicId"
                name="topicId"
                data-cy="topicId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Posted" id="topic-users-posted" name="posted" data-cy="posted" check type="checkbox" />
              <ValidatedField
                label="Last Read Post Number"
                id="topic-users-lastReadPostNumber"
                name="lastReadPostNumber"
                data-cy="lastReadPostNumber"
                type="text"
              />
              <ValidatedField
                label="Highest Seen Post Number"
                id="topic-users-highestSeenPostNumber"
                name="highestSeenPostNumber"
                data-cy="highestSeenPostNumber"
                type="text"
              />
              <ValidatedField
                label="Last Visited At"
                id="topic-users-lastVisitedAt"
                name="lastVisitedAt"
                data-cy="lastVisitedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="First Visited At"
                id="topic-users-firstVisitedAt"
                name="firstVisitedAt"
                data-cy="firstVisitedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Notification Level"
                id="topic-users-notificationLevel"
                name="notificationLevel"
                data-cy="notificationLevel"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Notifications Changed At"
                id="topic-users-notificationsChangedAt"
                name="notificationsChangedAt"
                data-cy="notificationsChangedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Notifications Reason Id"
                id="topic-users-notificationsReasonId"
                name="notificationsReasonId"
                data-cy="notificationsReasonId"
                type="text"
              />
              <ValidatedField
                label="Total Msecs Viewed"
                id="topic-users-totalMsecsViewed"
                name="totalMsecsViewed"
                data-cy="totalMsecsViewed"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Cleared Pinned At"
                id="topic-users-clearedPinnedAt"
                name="clearedPinnedAt"
                data-cy="clearedPinnedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Last Emailed Post Number"
                id="topic-users-lastEmailedPostNumber"
                name="lastEmailedPostNumber"
                data-cy="lastEmailedPostNumber"
                type="text"
              />
              <ValidatedField label="Liked" id="topic-users-liked" name="liked" data-cy="liked" check type="checkbox" />
              <ValidatedField label="Bookmarked" id="topic-users-bookmarked" name="bookmarked" data-cy="bookmarked" check type="checkbox" />
              <ValidatedField
                label="Last Posted At"
                id="topic-users-lastPostedAt"
                name="lastPostedAt"
                data-cy="lastPostedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/topic-users" replace color="info">
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

export default TopicUsersUpdate;
