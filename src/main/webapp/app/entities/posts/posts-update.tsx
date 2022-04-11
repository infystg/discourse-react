import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IPolls } from 'app/shared/model/polls.model';
import { getEntities as getPolls } from 'app/entities/polls/polls.reducer';
import { IPosts } from 'app/shared/model/posts.model';
import { getEntity, updateEntity, createEntity, reset } from './posts.reducer';

export const PostsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const polls = useAppSelector(state => state.polls.entities);
  const postsEntity = useAppSelector(state => state.posts.entity);
  const loading = useAppSelector(state => state.posts.loading);
  const updating = useAppSelector(state => state.posts.updating);
  const updateSuccess = useAppSelector(state => state.posts.updateSuccess);
  const handleClose = () => {
    props.history.push('/posts' + props.location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(props.match.params.id));
    }

    dispatch(getPolls({}));
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
      ...postsEntity,
      ...values,
      polls: polls.find(it => it.id.toString() === values.polls.toString()),
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
          ...postsEntity,
          deletedAt: convertDateTimeFromServer(postsEntity.deletedAt),
          lastVersionAt: convertDateTimeFromServer(postsEntity.lastVersionAt),
          bakedAt: convertDateTimeFromServer(postsEntity.bakedAt),
          hiddenAt: convertDateTimeFromServer(postsEntity.hiddenAt),
          polls: postsEntity?.polls?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.posts.home.createOrEditLabel" data-cy="PostsCreateUpdateHeading">
            Create or edit a Posts
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="posts-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField label="User Id" id="posts-userId" name="userId" data-cy="userId" type="text" />
              <ValidatedField
                label="Topic Id"
                id="posts-topicId"
                name="topicId"
                data-cy="topicId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Post Number"
                id="posts-postNumber"
                name="postNumber"
                data-cy="postNumber"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Raw"
                id="posts-raw"
                name="raw"
                data-cy="raw"
                type="textarea"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Cooked"
                id="posts-cooked"
                name="cooked"
                data-cy="cooked"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Reply To Post Number"
                id="posts-replyToPostNumber"
                name="replyToPostNumber"
                data-cy="replyToPostNumber"
                type="text"
              />
              <ValidatedField
                label="Reply Count"
                id="posts-replyCount"
                name="replyCount"
                data-cy="replyCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Quote Count"
                id="posts-quoteCount"
                name="quoteCount"
                data-cy="quoteCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Deleted At"
                id="posts-deletedAt"
                name="deletedAt"
                data-cy="deletedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Off Topic Count"
                id="posts-offTopicCount"
                name="offTopicCount"
                data-cy="offTopicCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Like Count"
                id="posts-likeCount"
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
                id="posts-incomingLinkCount"
                name="incomingLinkCount"
                data-cy="incomingLinkCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Bookmark Count"
                id="posts-bookmarkCount"
                name="bookmarkCount"
                data-cy="bookmarkCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Score" id="posts-score" name="score" data-cy="score" type="text" />
              <ValidatedField
                label="Reads"
                id="posts-reads"
                name="reads"
                data-cy="reads"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Post Type"
                id="posts-postType"
                name="postType"
                data-cy="postType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Sort Order" id="posts-sortOrder" name="sortOrder" data-cy="sortOrder" type="text" />
              <ValidatedField label="Last Editor Id" id="posts-lastEditorId" name="lastEditorId" data-cy="lastEditorId" type="text" />
              <ValidatedField label="Hidden" id="posts-hidden" name="hidden" data-cy="hidden" check type="checkbox" />
              <ValidatedField
                label="Hidden Reason Id"
                id="posts-hiddenReasonId"
                name="hiddenReasonId"
                data-cy="hiddenReasonId"
                type="text"
              />
              <ValidatedField
                label="Notify Moderators Count"
                id="posts-notifyModeratorsCount"
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
                id="posts-spamCount"
                name="spamCount"
                data-cy="spamCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Illegal Count"
                id="posts-illegalCount"
                name="illegalCount"
                data-cy="illegalCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Inappropriate Count"
                id="posts-inappropriateCount"
                name="inappropriateCount"
                data-cy="inappropriateCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Last Version At"
                id="posts-lastVersionAt"
                name="lastVersionAt"
                data-cy="lastVersionAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="User Deleted" id="posts-userDeleted" name="userDeleted" data-cy="userDeleted" check type="checkbox" />
              <ValidatedField label="Reply To User Id" id="posts-replyToUserId" name="replyToUserId" data-cy="replyToUserId" type="text" />
              <ValidatedField label="Percent Rank" id="posts-percentRank" name="percentRank" data-cy="percentRank" type="text" />
              <ValidatedField
                label="Notify User Count"
                id="posts-notifyUserCount"
                name="notifyUserCount"
                data-cy="notifyUserCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Like Score"
                id="posts-likeScore"
                name="likeScore"
                data-cy="likeScore"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Deleted By Id" id="posts-deletedById" name="deletedById" data-cy="deletedById" type="text" />
              <ValidatedField label="Edit Reason" id="posts-editReason" name="editReason" data-cy="editReason" type="text" />
              <ValidatedField label="Word Count" id="posts-wordCount" name="wordCount" data-cy="wordCount" type="text" />
              <ValidatedField
                label="Version"
                id="posts-version"
                name="version"
                data-cy="version"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Cook Method"
                id="posts-cookMethod"
                name="cookMethod"
                data-cy="cookMethod"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Wiki" id="posts-wiki" name="wiki" data-cy="wiki" check type="checkbox" />
              <ValidatedField
                label="Baked At"
                id="posts-bakedAt"
                name="bakedAt"
                data-cy="bakedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField label="Baked Version" id="posts-bakedVersion" name="bakedVersion" data-cy="bakedVersion" type="text" />
              <ValidatedField
                label="Hidden At"
                id="posts-hiddenAt"
                name="hiddenAt"
                data-cy="hiddenAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Self Edits"
                id="posts-selfEdits"
                name="selfEdits"
                data-cy="selfEdits"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Reply Quoted" id="posts-replyQuoted" name="replyQuoted" data-cy="replyQuoted" check type="checkbox" />
              <ValidatedField label="Via Email" id="posts-viaEmail" name="viaEmail" data-cy="viaEmail" check type="checkbox" />
              <ValidatedField label="Raw Email" id="posts-rawEmail" name="rawEmail" data-cy="rawEmail" type="text" />
              <ValidatedField
                label="Public Version"
                id="posts-publicVersion"
                name="publicVersion"
                data-cy="publicVersion"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Action Code" id="posts-actionCode" name="actionCode" data-cy="actionCode" type="text" />
              <ValidatedField label="Locked By Id" id="posts-lockedById" name="lockedById" data-cy="lockedById" type="text" />
              <ValidatedField label="Image Upload Id" id="posts-imageUploadId" name="imageUploadId" data-cy="imageUploadId" type="text" />
              <ValidatedField id="posts-polls" name="polls" data-cy="polls" label="Polls" type="select">
                <option value="" key="0" />
                {polls
                  ? polls.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/posts" replace color="info">
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

export default PostsUpdate;
