import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './topics.reducer';

export const TopicsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const topicsEntity = useAppSelector(state => state.topics.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="topicsDetailsHeading">Topics</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{topicsEntity.id}</dd>
          <dt>
            <span id="title">Title</span>
          </dt>
          <dd>{topicsEntity.title}</dd>
          <dt>
            <span id="lastPostedAt">Last Posted At</span>
          </dt>
          <dd>
            {topicsEntity.lastPostedAt ? <TextFormat value={topicsEntity.lastPostedAt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="views">Views</span>
          </dt>
          <dd>{topicsEntity.views}</dd>
          <dt>
            <span id="postsCount">Posts Count</span>
          </dt>
          <dd>{topicsEntity.postsCount}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{topicsEntity.userId}</dd>
          <dt>
            <span id="lastPostUserId">Last Post User Id</span>
          </dt>
          <dd>{topicsEntity.lastPostUserId}</dd>
          <dt>
            <span id="replyCount">Reply Count</span>
          </dt>
          <dd>{topicsEntity.replyCount}</dd>
          <dt>
            <span id="featuredUser1Id">Featured User 1 Id</span>
          </dt>
          <dd>{topicsEntity.featuredUser1Id}</dd>
          <dt>
            <span id="featuredUser2Id">Featured User 2 Id</span>
          </dt>
          <dd>{topicsEntity.featuredUser2Id}</dd>
          <dt>
            <span id="featuredUser3Id">Featured User 3 Id</span>
          </dt>
          <dd>{topicsEntity.featuredUser3Id}</dd>
          <dt>
            <span id="deletedAt">Deleted At</span>
          </dt>
          <dd>{topicsEntity.deletedAt ? <TextFormat value={topicsEntity.deletedAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="highestPostNumber">Highest Post Number</span>
          </dt>
          <dd>{topicsEntity.highestPostNumber}</dd>
          <dt>
            <span id="likeCount">Like Count</span>
          </dt>
          <dd>{topicsEntity.likeCount}</dd>
          <dt>
            <span id="incomingLinkCount">Incoming Link Count</span>
          </dt>
          <dd>{topicsEntity.incomingLinkCount}</dd>
          <dt>
            <span id="categoryId">Category Id</span>
          </dt>
          <dd>{topicsEntity.categoryId}</dd>
          <dt>
            <span id="visible">Visible</span>
          </dt>
          <dd>{topicsEntity.visible ? 'true' : 'false'}</dd>
          <dt>
            <span id="moderatorPostsCount">Moderator Posts Count</span>
          </dt>
          <dd>{topicsEntity.moderatorPostsCount}</dd>
          <dt>
            <span id="closed">Closed</span>
          </dt>
          <dd>{topicsEntity.closed ? 'true' : 'false'}</dd>
          <dt>
            <span id="archived">Archived</span>
          </dt>
          <dd>{topicsEntity.archived ? 'true' : 'false'}</dd>
          <dt>
            <span id="bumpedAt">Bumped At</span>
          </dt>
          <dd>{topicsEntity.bumpedAt ? <TextFormat value={topicsEntity.bumpedAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="hasSummary">Has Summary</span>
          </dt>
          <dd>{topicsEntity.hasSummary ? 'true' : 'false'}</dd>
          <dt>
            <span id="archetype">Archetype</span>
          </dt>
          <dd>{topicsEntity.archetype}</dd>
          <dt>
            <span id="featuredUser4Id">Featured User 4 Id</span>
          </dt>
          <dd>{topicsEntity.featuredUser4Id}</dd>
          <dt>
            <span id="notifyModeratorsCount">Notify Moderators Count</span>
          </dt>
          <dd>{topicsEntity.notifyModeratorsCount}</dd>
          <dt>
            <span id="spamCount">Spam Count</span>
          </dt>
          <dd>{topicsEntity.spamCount}</dd>
          <dt>
            <span id="pinnedAt">Pinned At</span>
          </dt>
          <dd>{topicsEntity.pinnedAt ? <TextFormat value={topicsEntity.pinnedAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="score">Score</span>
          </dt>
          <dd>{topicsEntity.score}</dd>
          <dt>
            <span id="percentRank">Percent Rank</span>
          </dt>
          <dd>{topicsEntity.percentRank}</dd>
          <dt>
            <span id="subtype">Subtype</span>
          </dt>
          <dd>{topicsEntity.subtype}</dd>
          <dt>
            <span id="slug">Slug</span>
          </dt>
          <dd>{topicsEntity.slug}</dd>
          <dt>
            <span id="deletedById">Deleted By Id</span>
          </dt>
          <dd>{topicsEntity.deletedById}</dd>
          <dt>
            <span id="participantCount">Participant Count</span>
          </dt>
          <dd>{topicsEntity.participantCount}</dd>
          <dt>
            <span id="wordCount">Word Count</span>
          </dt>
          <dd>{topicsEntity.wordCount}</dd>
          <dt>
            <span id="excerpt">Excerpt</span>
          </dt>
          <dd>{topicsEntity.excerpt}</dd>
          <dt>
            <span id="pinnedGlobally">Pinned Globally</span>
          </dt>
          <dd>{topicsEntity.pinnedGlobally ? 'true' : 'false'}</dd>
          <dt>
            <span id="pinnedUntil">Pinned Until</span>
          </dt>
          <dd>{topicsEntity.pinnedUntil ? <TextFormat value={topicsEntity.pinnedUntil} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="fancyTitle">Fancy Title</span>
          </dt>
          <dd>{topicsEntity.fancyTitle}</dd>
          <dt>
            <span id="highestStaffPostNumber">Highest Staff Post Number</span>
          </dt>
          <dd>{topicsEntity.highestStaffPostNumber}</dd>
          <dt>
            <span id="featuredLink">Featured Link</span>
          </dt>
          <dd>{topicsEntity.featuredLink}</dd>
          <dt>
            <span id="reviewableScore">Reviewable Score</span>
          </dt>
          <dd>{topicsEntity.reviewableScore}</dd>
          <dt>
            <span id="imageUploadId">Image Upload Id</span>
          </dt>
          <dd>{topicsEntity.imageUploadId}</dd>
          <dt>
            <span id="slowModeSeconds">Slow Mode Seconds</span>
          </dt>
          <dd>{topicsEntity.slowModeSeconds}</dd>
        </dl>
        <Button tag={Link} to="/topics" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/topics/${topicsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default TopicsDetail;
