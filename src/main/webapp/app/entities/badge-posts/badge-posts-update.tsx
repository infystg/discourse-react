import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IBadgePosts } from 'app/shared/model/badge-posts.model';
import { getEntity, updateEntity, createEntity, reset } from './badge-posts.reducer';

export const BadgePostsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const badgePostsEntity = useAppSelector(state => state.badgePosts.entity);
  const loading = useAppSelector(state => state.badgePosts.loading);
  const updating = useAppSelector(state => state.badgePosts.updating);
  const updateSuccess = useAppSelector(state => state.badgePosts.updateSuccess);
  const handleClose = () => {
    props.history.push('/badge-posts' + props.location.search);
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
    values.lastVersionAt = convertDateTimeToServer(values.lastVersionAt);
    values.bakedAt = convertDateTimeToServer(values.bakedAt);
    values.hiddenAt = convertDateTimeToServer(values.hiddenAt);

    const entity = {
      ...badgePostsEntity,
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
          lastVersionAt: displayDefaultDateTime(),
          bakedAt: displayDefaultDateTime(),
          hiddenAt: displayDefaultDateTime(),
        }
      : {
          ...badgePostsEntity,
          deletedAt: convertDateTimeFromServer(badgePostsEntity.deletedAt),
          lastVersionAt: convertDateTimeFromServer(badgePostsEntity.lastVersionAt),
          bakedAt: convertDateTimeFromServer(badgePostsEntity.bakedAt),
          hiddenAt: convertDateTimeFromServer(badgePostsEntity.hiddenAt),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.badgePosts.home.createOrEditLabel" data-cy="BadgePostsCreateUpdateHeading">
            Create or edit a BadgePosts
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="badge-posts-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField label="User Id" id="badge-posts-userId" name="userId" data-cy="userId" type="text" />
              <ValidatedField label="Topic Id" id="badge-posts-topicId" name="topicId" data-cy="topicId" type="text" />
              <ValidatedField label="Post Number" id="badge-posts-postNumber" name="postNumber" data-cy="postNumber" type="text" />
              <ValidatedField label="Raw" id="badge-posts-raw" name="raw" data-cy="raw" type="textarea" />
              <ValidatedField label="Cooked" id="badge-posts-cooked" name="cooked" data-cy="cooked" type="text" />
              <ValidatedField
                label="Reply To Post Number"
                id="badge-posts-replyToPostNumber"
                name="replyToPostNumber"
                data-cy="replyToPostNumber"
                type="text"
              />
              <ValidatedField label="Reply Count" id="badge-posts-replyCount" name="replyCount" data-cy="replyCount" type="text" />
              <ValidatedField label="Quote Count" id="badge-posts-quoteCount" name="quoteCount" data-cy="quoteCount" type="text" />
              <ValidatedField
                label="Deleted At"
                id="badge-posts-deletedAt"
                name="deletedAt"
                data-cy="deletedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Off Topic Count"
                id="badge-posts-offTopicCount"
                name="offTopicCount"
                data-cy="offTopicCount"
                type="text"
              />
              <ValidatedField label="Like Count" id="badge-posts-likeCount" name="likeCount" data-cy="likeCount" type="text" />
              <ValidatedField
                label="Incoming Link Count"
                id="badge-posts-incomingLinkCount"
                name="incomingLinkCount"
                data-cy="incomingLinkCount"
                type="text"
              />
              <ValidatedField
                label="Bookmark Count"
                id="badge-posts-bookmarkCount"
                name="bookmarkCount"
                data-cy="bookmarkCount"
                type="text"
              />
              <ValidatedField label="Score" id="badge-posts-score" name="score" data-cy="score" type="text" />
              <ValidatedField label="Reads" id="badge-posts-reads" name="reads" data-cy="reads" type="text" />
              <ValidatedField label="Post Type" id="badge-posts-postType" name="postType" data-cy="postType" type="text" />
              <ValidatedField label="Sort Order" id="badge-posts-sortOrder" name="sortOrder" data-cy="sortOrder" type="text" />
              <ValidatedField label="Last Editor Id" id="badge-posts-lastEditorId" name="lastEditorId" data-cy="lastEditorId" type="text" />
              <ValidatedField label="Hidden" id="badge-posts-hidden" name="hidden" data-cy="hidden" check type="checkbox" />
              <ValidatedField
                label="Hidden Reason Id"
                id="badge-posts-hiddenReasonId"
                name="hiddenReasonId"
                data-cy="hiddenReasonId"
                type="text"
              />
              <ValidatedField
                label="Notify Moderators Count"
                id="badge-posts-notifyModeratorsCount"
                name="notifyModeratorsCount"
                data-cy="notifyModeratorsCount"
                type="text"
              />
              <ValidatedField label="Spam Count" id="badge-posts-spamCount" name="spamCount" data-cy="spamCount" type="text" />
              <ValidatedField label="Illegal Count" id="badge-posts-illegalCount" name="illegalCount" data-cy="illegalCount" type="text" />
              <ValidatedField
                label="Inappropriate Count"
                id="badge-posts-inappropriateCount"
                name="inappropriateCount"
                data-cy="inappropriateCount"
                type="text"
              />
              <ValidatedField
                label="Last Version At"
                id="badge-posts-lastVersionAt"
                name="lastVersionAt"
                data-cy="lastVersionAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="User Deleted"
                id="badge-posts-userDeleted"
                name="userDeleted"
                data-cy="userDeleted"
                check
                type="checkbox"
              />
              <ValidatedField
                label="Reply To User Id"
                id="badge-posts-replyToUserId"
                name="replyToUserId"
                data-cy="replyToUserId"
                type="text"
              />
              <ValidatedField label="Percent Rank" id="badge-posts-percentRank" name="percentRank" data-cy="percentRank" type="text" />
              <ValidatedField
                label="Notify User Count"
                id="badge-posts-notifyUserCount"
                name="notifyUserCount"
                data-cy="notifyUserCount"
                type="text"
              />
              <ValidatedField label="Like Score" id="badge-posts-likeScore" name="likeScore" data-cy="likeScore" type="text" />
              <ValidatedField label="Deleted By Id" id="badge-posts-deletedById" name="deletedById" data-cy="deletedById" type="text" />
              <ValidatedField label="Edit Reason" id="badge-posts-editReason" name="editReason" data-cy="editReason" type="text" />
              <ValidatedField label="Word Count" id="badge-posts-wordCount" name="wordCount" data-cy="wordCount" type="text" />
              <ValidatedField label="Version" id="badge-posts-version" name="version" data-cy="version" type="text" />
              <ValidatedField label="Cook Method" id="badge-posts-cookMethod" name="cookMethod" data-cy="cookMethod" type="text" />
              <ValidatedField label="Wiki" id="badge-posts-wiki" name="wiki" data-cy="wiki" check type="checkbox" />
              <ValidatedField
                label="Baked At"
                id="badge-posts-bakedAt"
                name="bakedAt"
                data-cy="bakedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField label="Baked Version" id="badge-posts-bakedVersion" name="bakedVersion" data-cy="bakedVersion" type="text" />
              <ValidatedField
                label="Hidden At"
                id="badge-posts-hiddenAt"
                name="hiddenAt"
                data-cy="hiddenAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField label="Self Edits" id="badge-posts-selfEdits" name="selfEdits" data-cy="selfEdits" type="text" />
              <ValidatedField
                label="Reply Quoted"
                id="badge-posts-replyQuoted"
                name="replyQuoted"
                data-cy="replyQuoted"
                check
                type="checkbox"
              />
              <ValidatedField label="Via Email" id="badge-posts-viaEmail" name="viaEmail" data-cy="viaEmail" check type="checkbox" />
              <ValidatedField label="Raw Email" id="badge-posts-rawEmail" name="rawEmail" data-cy="rawEmail" type="text" />
              <ValidatedField
                label="Public Version"
                id="badge-posts-publicVersion"
                name="publicVersion"
                data-cy="publicVersion"
                type="text"
              />
              <ValidatedField label="Action Code" id="badge-posts-actionCode" name="actionCode" data-cy="actionCode" type="text" />
              <ValidatedField label="Locked By Id" id="badge-posts-lockedById" name="lockedById" data-cy="lockedById" type="text" />
              <ValidatedField
                label="Image Upload Id"
                id="badge-posts-imageUploadId"
                name="imageUploadId"
                data-cy="imageUploadId"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/badge-posts" replace color="info">
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

export default BadgePostsUpdate;
