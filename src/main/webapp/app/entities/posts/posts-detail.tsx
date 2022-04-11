import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './posts.reducer';

export const PostsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const postsEntity = useAppSelector(state => state.posts.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="postsDetailsHeading">Posts</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{postsEntity.id}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{postsEntity.userId}</dd>
          <dt>
            <span id="topicId">Topic Id</span>
          </dt>
          <dd>{postsEntity.topicId}</dd>
          <dt>
            <span id="postNumber">Post Number</span>
          </dt>
          <dd>{postsEntity.postNumber}</dd>
          <dt>
            <span id="raw">Raw</span>
          </dt>
          <dd>{postsEntity.raw}</dd>
          <dt>
            <span id="cooked">Cooked</span>
          </dt>
          <dd>{postsEntity.cooked}</dd>
          <dt>
            <span id="replyToPostNumber">Reply To Post Number</span>
          </dt>
          <dd>{postsEntity.replyToPostNumber}</dd>
          <dt>
            <span id="replyCount">Reply Count</span>
          </dt>
          <dd>{postsEntity.replyCount}</dd>
          <dt>
            <span id="quoteCount">Quote Count</span>
          </dt>
          <dd>{postsEntity.quoteCount}</dd>
          <dt>
            <span id="deletedAt">Deleted At</span>
          </dt>
          <dd>{postsEntity.deletedAt ? <TextFormat value={postsEntity.deletedAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="offTopicCount">Off Topic Count</span>
          </dt>
          <dd>{postsEntity.offTopicCount}</dd>
          <dt>
            <span id="likeCount">Like Count</span>
          </dt>
          <dd>{postsEntity.likeCount}</dd>
          <dt>
            <span id="incomingLinkCount">Incoming Link Count</span>
          </dt>
          <dd>{postsEntity.incomingLinkCount}</dd>
          <dt>
            <span id="bookmarkCount">Bookmark Count</span>
          </dt>
          <dd>{postsEntity.bookmarkCount}</dd>
          <dt>
            <span id="score">Score</span>
          </dt>
          <dd>{postsEntity.score}</dd>
          <dt>
            <span id="reads">Reads</span>
          </dt>
          <dd>{postsEntity.reads}</dd>
          <dt>
            <span id="postType">Post Type</span>
          </dt>
          <dd>{postsEntity.postType}</dd>
          <dt>
            <span id="sortOrder">Sort Order</span>
          </dt>
          <dd>{postsEntity.sortOrder}</dd>
          <dt>
            <span id="lastEditorId">Last Editor Id</span>
          </dt>
          <dd>{postsEntity.lastEditorId}</dd>
          <dt>
            <span id="hidden">Hidden</span>
          </dt>
          <dd>{postsEntity.hidden ? 'true' : 'false'}</dd>
          <dt>
            <span id="hiddenReasonId">Hidden Reason Id</span>
          </dt>
          <dd>{postsEntity.hiddenReasonId}</dd>
          <dt>
            <span id="notifyModeratorsCount">Notify Moderators Count</span>
          </dt>
          <dd>{postsEntity.notifyModeratorsCount}</dd>
          <dt>
            <span id="spamCount">Spam Count</span>
          </dt>
          <dd>{postsEntity.spamCount}</dd>
          <dt>
            <span id="illegalCount">Illegal Count</span>
          </dt>
          <dd>{postsEntity.illegalCount}</dd>
          <dt>
            <span id="inappropriateCount">Inappropriate Count</span>
          </dt>
          <dd>{postsEntity.inappropriateCount}</dd>
          <dt>
            <span id="lastVersionAt">Last Version At</span>
          </dt>
          <dd>
            {postsEntity.lastVersionAt ? <TextFormat value={postsEntity.lastVersionAt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="userDeleted">User Deleted</span>
          </dt>
          <dd>{postsEntity.userDeleted ? 'true' : 'false'}</dd>
          <dt>
            <span id="replyToUserId">Reply To User Id</span>
          </dt>
          <dd>{postsEntity.replyToUserId}</dd>
          <dt>
            <span id="percentRank">Percent Rank</span>
          </dt>
          <dd>{postsEntity.percentRank}</dd>
          <dt>
            <span id="notifyUserCount">Notify User Count</span>
          </dt>
          <dd>{postsEntity.notifyUserCount}</dd>
          <dt>
            <span id="likeScore">Like Score</span>
          </dt>
          <dd>{postsEntity.likeScore}</dd>
          <dt>
            <span id="deletedById">Deleted By Id</span>
          </dt>
          <dd>{postsEntity.deletedById}</dd>
          <dt>
            <span id="editReason">Edit Reason</span>
          </dt>
          <dd>{postsEntity.editReason}</dd>
          <dt>
            <span id="wordCount">Word Count</span>
          </dt>
          <dd>{postsEntity.wordCount}</dd>
          <dt>
            <span id="version">Version</span>
          </dt>
          <dd>{postsEntity.version}</dd>
          <dt>
            <span id="cookMethod">Cook Method</span>
          </dt>
          <dd>{postsEntity.cookMethod}</dd>
          <dt>
            <span id="wiki">Wiki</span>
          </dt>
          <dd>{postsEntity.wiki ? 'true' : 'false'}</dd>
          <dt>
            <span id="bakedAt">Baked At</span>
          </dt>
          <dd>{postsEntity.bakedAt ? <TextFormat value={postsEntity.bakedAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="bakedVersion">Baked Version</span>
          </dt>
          <dd>{postsEntity.bakedVersion}</dd>
          <dt>
            <span id="hiddenAt">Hidden At</span>
          </dt>
          <dd>{postsEntity.hiddenAt ? <TextFormat value={postsEntity.hiddenAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="selfEdits">Self Edits</span>
          </dt>
          <dd>{postsEntity.selfEdits}</dd>
          <dt>
            <span id="replyQuoted">Reply Quoted</span>
          </dt>
          <dd>{postsEntity.replyQuoted ? 'true' : 'false'}</dd>
          <dt>
            <span id="viaEmail">Via Email</span>
          </dt>
          <dd>{postsEntity.viaEmail ? 'true' : 'false'}</dd>
          <dt>
            <span id="rawEmail">Raw Email</span>
          </dt>
          <dd>{postsEntity.rawEmail}</dd>
          <dt>
            <span id="publicVersion">Public Version</span>
          </dt>
          <dd>{postsEntity.publicVersion}</dd>
          <dt>
            <span id="actionCode">Action Code</span>
          </dt>
          <dd>{postsEntity.actionCode}</dd>
          <dt>
            <span id="lockedById">Locked By Id</span>
          </dt>
          <dd>{postsEntity.lockedById}</dd>
          <dt>
            <span id="imageUploadId">Image Upload Id</span>
          </dt>
          <dd>{postsEntity.imageUploadId}</dd>
          <dt>Polls</dt>
          <dd>{postsEntity.polls ? postsEntity.polls.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/posts" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/posts/${postsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default PostsDetail;
