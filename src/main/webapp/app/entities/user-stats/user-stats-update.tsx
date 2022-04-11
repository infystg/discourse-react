import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUserStats } from 'app/shared/model/user-stats.model';
import { getEntity, updateEntity, createEntity, reset } from './user-stats.reducer';

export const UserStatsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const userStatsEntity = useAppSelector(state => state.userStats.entity);
  const loading = useAppSelector(state => state.userStats.loading);
  const updating = useAppSelector(state => state.userStats.updating);
  const updateSuccess = useAppSelector(state => state.userStats.updateSuccess);
  const handleClose = () => {
    props.history.push('/user-stats' + props.location.search);
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
    values.newSince = convertDateTimeToServer(values.newSince);
    values.readFaq = convertDateTimeToServer(values.readFaq);
    values.firstPostCreatedAt = convertDateTimeToServer(values.firstPostCreatedAt);
    values.resetBounceScoreAfter = convertDateTimeToServer(values.resetBounceScoreAfter);
    values.firstUnreadAt = convertDateTimeToServer(values.firstUnreadAt);
    values.firstUnreadPmAt = convertDateTimeToServer(values.firstUnreadPmAt);
    values.digestAttemptedAt = convertDateTimeToServer(values.digestAttemptedAt);

    const entity = {
      ...userStatsEntity,
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
          newSince: displayDefaultDateTime(),
          readFaq: displayDefaultDateTime(),
          firstPostCreatedAt: displayDefaultDateTime(),
          resetBounceScoreAfter: displayDefaultDateTime(),
          firstUnreadAt: displayDefaultDateTime(),
          firstUnreadPmAt: displayDefaultDateTime(),
          digestAttemptedAt: displayDefaultDateTime(),
        }
      : {
          ...userStatsEntity,
          newSince: convertDateTimeFromServer(userStatsEntity.newSince),
          readFaq: convertDateTimeFromServer(userStatsEntity.readFaq),
          firstPostCreatedAt: convertDateTimeFromServer(userStatsEntity.firstPostCreatedAt),
          resetBounceScoreAfter: convertDateTimeFromServer(userStatsEntity.resetBounceScoreAfter),
          firstUnreadAt: convertDateTimeFromServer(userStatsEntity.firstUnreadAt),
          firstUnreadPmAt: convertDateTimeFromServer(userStatsEntity.firstUnreadPmAt),
          digestAttemptedAt: convertDateTimeFromServer(userStatsEntity.digestAttemptedAt),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.userStats.home.createOrEditLabel" data-cy="UserStatsCreateUpdateHeading">
            Create or edit a UserStats
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="user-stats-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="User Id"
                id="user-stats-userId"
                name="userId"
                data-cy="userId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Topics Entered"
                id="user-stats-topicsEntered"
                name="topicsEntered"
                data-cy="topicsEntered"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Time Read"
                id="user-stats-timeRead"
                name="timeRead"
                data-cy="timeRead"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Days Visited"
                id="user-stats-daysVisited"
                name="daysVisited"
                data-cy="daysVisited"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Posts Read Count"
                id="user-stats-postsReadCount"
                name="postsReadCount"
                data-cy="postsReadCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Likes Given"
                id="user-stats-likesGiven"
                name="likesGiven"
                data-cy="likesGiven"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Likes Received"
                id="user-stats-likesReceived"
                name="likesReceived"
                data-cy="likesReceived"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="New Since"
                id="user-stats-newSince"
                name="newSince"
                data-cy="newSince"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Read Faq"
                id="user-stats-readFaq"
                name="readFaq"
                data-cy="readFaq"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="First Post Created At"
                id="user-stats-firstPostCreatedAt"
                name="firstPostCreatedAt"
                data-cy="firstPostCreatedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Post Count"
                id="user-stats-postCount"
                name="postCount"
                data-cy="postCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Topic Count"
                id="user-stats-topicCount"
                name="topicCount"
                data-cy="topicCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Bounce Score"
                id="user-stats-bounceScore"
                name="bounceScore"
                data-cy="bounceScore"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Reset Bounce Score After"
                id="user-stats-resetBounceScoreAfter"
                name="resetBounceScoreAfter"
                data-cy="resetBounceScoreAfter"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Flags Agreed"
                id="user-stats-flagsAgreed"
                name="flagsAgreed"
                data-cy="flagsAgreed"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Flags Disagreed"
                id="user-stats-flagsDisagreed"
                name="flagsDisagreed"
                data-cy="flagsDisagreed"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Flags Ignored"
                id="user-stats-flagsIgnored"
                name="flagsIgnored"
                data-cy="flagsIgnored"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="First Unread At"
                id="user-stats-firstUnreadAt"
                name="firstUnreadAt"
                data-cy="firstUnreadAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Distinct Badge Count"
                id="user-stats-distinctBadgeCount"
                name="distinctBadgeCount"
                data-cy="distinctBadgeCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="First Unread Pm At"
                id="user-stats-firstUnreadPmAt"
                name="firstUnreadPmAt"
                data-cy="firstUnreadPmAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Digest Attempted At"
                id="user-stats-digestAttemptedAt"
                name="digestAttemptedAt"
                data-cy="digestAttemptedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/user-stats" replace color="info">
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

export default UserStatsUpdate;
