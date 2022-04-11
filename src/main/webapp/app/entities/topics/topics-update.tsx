import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ITopics } from 'app/shared/model/topics.model';
import { getEntity, updateEntity, createEntity, reset } from './topics.reducer';

export const TopicsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const topicsEntity = useAppSelector(state => state.topics.entity);
  const loading = useAppSelector(state => state.topics.loading);
  const updating = useAppSelector(state => state.topics.updating);
  const updateSuccess = useAppSelector(state => state.topics.updateSuccess);
  const handleClose = () => {
    props.history.push('/topics' + props.location.search);
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
    values.lastPostedAt = convertDateTimeToServer(values.lastPostedAt);
    values.deletedAt = convertDateTimeToServer(values.deletedAt);
    values.bumpedAt = convertDateTimeToServer(values.bumpedAt);
    values.pinnedAt = convertDateTimeToServer(values.pinnedAt);
    values.pinnedUntil = convertDateTimeToServer(values.pinnedUntil);

    const entity = {
      ...topicsEntity,
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
          lastPostedAt: displayDefaultDateTime(),
          deletedAt: displayDefaultDateTime(),
          bumpedAt: displayDefaultDateTime(),
          pinnedAt: displayDefaultDateTime(),
          pinnedUntil: displayDefaultDateTime(),
        }
      : {
          ...topicsEntity,
          lastPostedAt: convertDateTimeFromServer(topicsEntity.lastPostedAt),
          deletedAt: convertDateTimeFromServer(topicsEntity.deletedAt),
          bumpedAt: convertDateTimeFromServer(topicsEntity.bumpedAt),
          pinnedAt: convertDateTimeFromServer(topicsEntity.pinnedAt),
          pinnedUntil: convertDateTimeFromServer(topicsEntity.pinnedUntil),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.topics.home.createOrEditLabel" data-cy="TopicsCreateUpdateHeading">
            Create or edit a Topics
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="topics-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="Title"
                id="topics-title"
                name="title"
                data-cy="title"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Last Posted At"
                id="topics-lastPostedAt"
                name="lastPostedAt"
                data-cy="lastPostedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Views"
                id="topics-views"
                name="views"
                data-cy="views"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Posts Count"
                id="topics-postsCount"
                name="postsCount"
                data-cy="postsCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="User Id" id="topics-userId" name="userId" data-cy="userId" type="text" />
              <ValidatedField
                label="Last Post User Id"
                id="topics-lastPostUserId"
                name="lastPostUserId"
                data-cy="lastPostUserId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Reply Count"
                id="topics-replyCount"
                name="replyCount"
                data-cy="replyCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Featured User 1 Id"
                id="topics-featuredUser1Id"
                name="featuredUser1Id"
                data-cy="featuredUser1Id"
                type="text"
              />
              <ValidatedField
                label="Featured User 2 Id"
                id="topics-featuredUser2Id"
                name="featuredUser2Id"
                data-cy="featuredUser2Id"
                type="text"
              />
              <ValidatedField
                label="Featured User 3 Id"
                id="topics-featuredUser3Id"
                name="featuredUser3Id"
                data-cy="featuredUser3Id"
                type="text"
              />
              <ValidatedField
                label="Deleted At"
                id="topics-deletedAt"
                name="deletedAt"
                data-cy="deletedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Highest Post Number"
                id="topics-highestPostNumber"
                name="highestPostNumber"
                data-cy="highestPostNumber"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Like Count"
                id="topics-likeCount"
                name="likeCount"
                data-cy="likeCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Incoming Link Count"
                id="topics-incomingLinkCount"
                name="incomingLinkCount"
                data-cy="incomingLinkCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Category Id" id="topics-categoryId" name="categoryId" data-cy="categoryId" type="text" />
              <ValidatedField label="Visible" id="topics-visible" name="visible" data-cy="visible" check type="checkbox" />
              <ValidatedField
                label="Moderator Posts Count"
                id="topics-moderatorPostsCount"
                name="moderatorPostsCount"
                data-cy="moderatorPostsCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Closed" id="topics-closed" name="closed" data-cy="closed" check type="checkbox" />
              <ValidatedField label="Archived" id="topics-archived" name="archived" data-cy="archived" check type="checkbox" />
              <ValidatedField
                label="Bumped At"
                id="topics-bumpedAt"
                name="bumpedAt"
                data-cy="bumpedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Has Summary" id="topics-hasSummary" name="hasSummary" data-cy="hasSummary" check type="checkbox" />
              <ValidatedField
                label="Archetype"
                id="topics-archetype"
                name="archetype"
                data-cy="archetype"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Featured User 4 Id"
                id="topics-featuredUser4Id"
                name="featuredUser4Id"
                data-cy="featuredUser4Id"
                type="text"
              />
              <ValidatedField
                label="Notify Moderators Count"
                id="topics-notifyModeratorsCount"
                name="notifyModeratorsCount"
                data-cy="notifyModeratorsCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Spam Count"
                id="topics-spamCount"
                name="spamCount"
                data-cy="spamCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Pinned At"
                id="topics-pinnedAt"
                name="pinnedAt"
                data-cy="pinnedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField label="Score" id="topics-score" name="score" data-cy="score" type="text" />
              <ValidatedField
                label="Percent Rank"
                id="topics-percentRank"
                name="percentRank"
                data-cy="percentRank"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Subtype" id="topics-subtype" name="subtype" data-cy="subtype" type="text" />
              <ValidatedField label="Slug" id="topics-slug" name="slug" data-cy="slug" type="text" />
              <ValidatedField label="Deleted By Id" id="topics-deletedById" name="deletedById" data-cy="deletedById" type="text" />
              <ValidatedField
                label="Participant Count"
                id="topics-participantCount"
                name="participantCount"
                data-cy="participantCount"
                type="text"
              />
              <ValidatedField label="Word Count" id="topics-wordCount" name="wordCount" data-cy="wordCount" type="text" />
              <ValidatedField label="Excerpt" id="topics-excerpt" name="excerpt" data-cy="excerpt" type="text" />
              <ValidatedField
                label="Pinned Globally"
                id="topics-pinnedGlobally"
                name="pinnedGlobally"
                data-cy="pinnedGlobally"
                check
                type="checkbox"
              />
              <ValidatedField
                label="Pinned Until"
                id="topics-pinnedUntil"
                name="pinnedUntil"
                data-cy="pinnedUntil"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField label="Fancy Title" id="topics-fancyTitle" name="fancyTitle" data-cy="fancyTitle" type="text" />
              <ValidatedField
                label="Highest Staff Post Number"
                id="topics-highestStaffPostNumber"
                name="highestStaffPostNumber"
                data-cy="highestStaffPostNumber"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Featured Link" id="topics-featuredLink" name="featuredLink" data-cy="featuredLink" type="text" />
              <ValidatedField
                label="Reviewable Score"
                id="topics-reviewableScore"
                name="reviewableScore"
                data-cy="reviewableScore"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Image Upload Id" id="topics-imageUploadId" name="imageUploadId" data-cy="imageUploadId" type="text" />
              <ValidatedField
                label="Slow Mode Seconds"
                id="topics-slowModeSeconds"
                name="slowModeSeconds"
                data-cy="slowModeSeconds"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/topics" replace color="info">
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

export default TopicsUpdate;
