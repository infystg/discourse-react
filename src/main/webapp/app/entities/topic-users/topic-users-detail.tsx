import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './topic-users.reducer';

export const TopicUsersDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const topicUsersEntity = useAppSelector(state => state.topicUsers.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="topicUsersDetailsHeading">TopicUsers</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{topicUsersEntity.id}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{topicUsersEntity.userId}</dd>
          <dt>
            <span id="topicId">Topic Id</span>
          </dt>
          <dd>{topicUsersEntity.topicId}</dd>
          <dt>
            <span id="posted">Posted</span>
          </dt>
          <dd>{topicUsersEntity.posted ? 'true' : 'false'}</dd>
          <dt>
            <span id="lastReadPostNumber">Last Read Post Number</span>
          </dt>
          <dd>{topicUsersEntity.lastReadPostNumber}</dd>
          <dt>
            <span id="highestSeenPostNumber">Highest Seen Post Number</span>
          </dt>
          <dd>{topicUsersEntity.highestSeenPostNumber}</dd>
          <dt>
            <span id="lastVisitedAt">Last Visited At</span>
          </dt>
          <dd>
            {topicUsersEntity.lastVisitedAt ? (
              <TextFormat value={topicUsersEntity.lastVisitedAt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="firstVisitedAt">First Visited At</span>
          </dt>
          <dd>
            {topicUsersEntity.firstVisitedAt ? (
              <TextFormat value={topicUsersEntity.firstVisitedAt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="notificationLevel">Notification Level</span>
          </dt>
          <dd>{topicUsersEntity.notificationLevel}</dd>
          <dt>
            <span id="notificationsChangedAt">Notifications Changed At</span>
          </dt>
          <dd>
            {topicUsersEntity.notificationsChangedAt ? (
              <TextFormat value={topicUsersEntity.notificationsChangedAt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="notificationsReasonId">Notifications Reason Id</span>
          </dt>
          <dd>{topicUsersEntity.notificationsReasonId}</dd>
          <dt>
            <span id="totalMsecsViewed">Total Msecs Viewed</span>
          </dt>
          <dd>{topicUsersEntity.totalMsecsViewed}</dd>
          <dt>
            <span id="clearedPinnedAt">Cleared Pinned At</span>
          </dt>
          <dd>
            {topicUsersEntity.clearedPinnedAt ? (
              <TextFormat value={topicUsersEntity.clearedPinnedAt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="lastEmailedPostNumber">Last Emailed Post Number</span>
          </dt>
          <dd>{topicUsersEntity.lastEmailedPostNumber}</dd>
          <dt>
            <span id="liked">Liked</span>
          </dt>
          <dd>{topicUsersEntity.liked ? 'true' : 'false'}</dd>
          <dt>
            <span id="bookmarked">Bookmarked</span>
          </dt>
          <dd>{topicUsersEntity.bookmarked ? 'true' : 'false'}</dd>
          <dt>
            <span id="lastPostedAt">Last Posted At</span>
          </dt>
          <dd>
            {topicUsersEntity.lastPostedAt ? (
              <TextFormat value={topicUsersEntity.lastPostedAt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
        </dl>
        <Button tag={Link} to="/topic-users" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/topic-users/${topicUsersEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default TopicUsersDetail;
