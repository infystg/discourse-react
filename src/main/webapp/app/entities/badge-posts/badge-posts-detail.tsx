import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './badge-posts.reducer';

export const BadgePostsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const badgePostsEntity = useAppSelector(state => state.badgePosts.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="badgePostsDetailsHeading">BadgePosts</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{badgePostsEntity.id}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{badgePostsEntity.userId}</dd>
          <dt>
            <span id="topicId">Topic Id</span>
          </dt>
          <dd>{badgePostsEntity.topicId}</dd>
          <dt>
            <span id="postNumber">Post Number</span>
          </dt>
          <dd>{badgePostsEntity.postNumber}</dd>
          <dt>
            <span id="raw">Raw</span>
          </dt>
          <dd>{badgePostsEntity.raw}</dd>
          <dt>
            <span id="cooked">Cooked</span>
          </dt>
          <dd>{badgePostsEntity.cooked}</dd>
          <dt>
            <span id="replyToPostNumber">Reply To Post Number</span>
          </dt>
          <dd>{badgePostsEntity.replyToPostNumber}</dd>
          <dt>
            <span id="replyCount">Reply Count</span>
          </dt>
          <dd>{badgePostsEntity.replyCount}</dd>
          <dt>
            <span id="quoteCount">Quote Count</span>
          </dt>
          <dd>{badgePostsEntity.quoteCount}</dd>
          <dt>
            <span id="deletedAt">Deleted At</span>
          </dt>
          <dd>
            {badgePostsEntity.deletedAt ? <TextFormat value={badgePostsEntity.deletedAt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="offTopicCount">Off Topic Count</span>
          </dt>
          <dd>{badgePostsEntity.offTopicCount}</dd>
          <dt>
            <span id="likeCount">Like Count</span>
          </dt>
          <dd>{badgePostsEntity.likeCount}</dd>
          <dt>
            <span id="incomingLinkCount">Incoming Link Count</span>
          </dt>
          <dd>{badgePostsEntity.incomingLinkCount}</dd>
          <dt>
            <span id="bookmarkCount">Bookmark Count</span>
          </dt>
          <dd>{badgePostsEntity.bookmarkCount}</dd>
          <dt>
            <span id="score">Score</span>
          </dt>
          <dd>{badgePostsEntity.score}</dd>
          <dt>
            <span id="reads">Reads</span>
          </dt>
          <dd>{badgePostsEntity.reads}</dd>
          <dt>
            <span id="postType">Post Type</span>
          </dt>
          <dd>{badgePostsEntity.postType}</dd>
          <dt>
            <span id="sortOrder">Sort Order</span>
          </dt>
          <dd>{badgePostsEntity.sortOrder}</dd>
          <dt>
            <span id="lastEditorId">Last Editor Id</span>
          </dt>
          <dd>{badgePostsEntity.lastEditorId}</dd>
          <dt>
            <span id="hidden">Hidden</span>
          </dt>
          <dd>{badgePostsEntity.hidden ? 'true' : 'false'}</dd>
          <dt>
            <span id="hiddenReasonId">Hidden Reason Id</span>
          </dt>
          <dd>{badgePostsEntity.hiddenReasonId}</dd>
          <dt>
            <span id="notifyModeratorsCount">Notify Moderators Count</span>
          </dt>
          <dd>{badgePostsEntity.notifyModeratorsCount}</dd>
          <dt>
            <span id="spamCount">Spam Count</span>
          </dt>
          <dd>{badgePostsEntity.spamCount}</dd>
          <dt>
            <span id="illegalCount">Illegal Count</span>
          </dt>
          <dd>{badgePostsEntity.illegalCount}</dd>
          <dt>
            <span id="inappropriateCount">Inappropriate Count</span>
          </dt>
          <dd>{badgePostsEntity.inappropriateCount}</dd>
          <dt>
            <span id="lastVersionAt">Last Version At</span>
          </dt>
          <dd>
            {badgePostsEntity.lastVersionAt ? (
              <TextFormat value={badgePostsEntity.lastVersionAt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="userDeleted">User Deleted</span>
          </dt>
          <dd>{badgePostsEntity.userDeleted ? 'true' : 'false'}</dd>
          <dt>
            <span id="replyToUserId">Reply To User Id</span>
          </dt>
          <dd>{badgePostsEntity.replyToUserId}</dd>
          <dt>
            <span id="percentRank">Percent Rank</span>
          </dt>
          <dd>{badgePostsEntity.percentRank}</dd>
          <dt>
            <span id="notifyUserCount">Notify User Count</span>
          </dt>
          <dd>{badgePostsEntity.notifyUserCount}</dd>
          <dt>
            <span id="likeScore">Like Score</span>
          </dt>
          <dd>{badgePostsEntity.likeScore}</dd>
          <dt>
            <span id="deletedById">Deleted By Id</span>
          </dt>
          <dd>{badgePostsEntity.deletedById}</dd>
          <dt>
            <span id="editReason">Edit Reason</span>
          </dt>
          <dd>{badgePostsEntity.editReason}</dd>
          <dt>
            <span id="wordCount">Word Count</span>
          </dt>
          <dd>{badgePostsEntity.wordCount}</dd>
          <dt>
            <span id="version">Version</span>
          </dt>
          <dd>{badgePostsEntity.version}</dd>
          <dt>
            <span id="cookMethod">Cook Method</span>
          </dt>
          <dd>{badgePostsEntity.cookMethod}</dd>
          <dt>
            <span id="wiki">Wiki</span>
          </dt>
          <dd>{badgePostsEntity.wiki ? 'true' : 'false'}</dd>
          <dt>
            <span id="bakedAt">Baked At</span>
          </dt>
          <dd>{badgePostsEntity.bakedAt ? <TextFormat value={badgePostsEntity.bakedAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="bakedVersion">Baked Version</span>
          </dt>
          <dd>{badgePostsEntity.bakedVersion}</dd>
          <dt>
            <span id="hiddenAt">Hidden At</span>
          </dt>
          <dd>
            {badgePostsEntity.hiddenAt ? <TextFormat value={badgePostsEntity.hiddenAt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="selfEdits">Self Edits</span>
          </dt>
          <dd>{badgePostsEntity.selfEdits}</dd>
          <dt>
            <span id="replyQuoted">Reply Quoted</span>
          </dt>
          <dd>{badgePostsEntity.replyQuoted ? 'true' : 'false'}</dd>
          <dt>
            <span id="viaEmail">Via Email</span>
          </dt>
          <dd>{badgePostsEntity.viaEmail ? 'true' : 'false'}</dd>
          <dt>
            <span id="rawEmail">Raw Email</span>
          </dt>
          <dd>{badgePostsEntity.rawEmail}</dd>
          <dt>
            <span id="publicVersion">Public Version</span>
          </dt>
          <dd>{badgePostsEntity.publicVersion}</dd>
          <dt>
            <span id="actionCode">Action Code</span>
          </dt>
          <dd>{badgePostsEntity.actionCode}</dd>
          <dt>
            <span id="lockedById">Locked By Id</span>
          </dt>
          <dd>{badgePostsEntity.lockedById}</dd>
          <dt>
            <span id="imageUploadId">Image Upload Id</span>
          </dt>
          <dd>{badgePostsEntity.imageUploadId}</dd>
        </dl>
        <Button tag={Link} to="/badge-posts" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/badge-posts/${badgePostsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default BadgePostsDetail;
