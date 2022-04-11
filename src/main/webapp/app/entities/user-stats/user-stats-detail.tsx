import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './user-stats.reducer';

export const UserStatsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const userStatsEntity = useAppSelector(state => state.userStats.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="userStatsDetailsHeading">UserStats</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{userStatsEntity.id}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{userStatsEntity.userId}</dd>
          <dt>
            <span id="topicsEntered">Topics Entered</span>
          </dt>
          <dd>{userStatsEntity.topicsEntered}</dd>
          <dt>
            <span id="timeRead">Time Read</span>
          </dt>
          <dd>{userStatsEntity.timeRead}</dd>
          <dt>
            <span id="daysVisited">Days Visited</span>
          </dt>
          <dd>{userStatsEntity.daysVisited}</dd>
          <dt>
            <span id="postsReadCount">Posts Read Count</span>
          </dt>
          <dd>{userStatsEntity.postsReadCount}</dd>
          <dt>
            <span id="likesGiven">Likes Given</span>
          </dt>
          <dd>{userStatsEntity.likesGiven}</dd>
          <dt>
            <span id="likesReceived">Likes Received</span>
          </dt>
          <dd>{userStatsEntity.likesReceived}</dd>
          <dt>
            <span id="newSince">New Since</span>
          </dt>
          <dd>{userStatsEntity.newSince ? <TextFormat value={userStatsEntity.newSince} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="readFaq">Read Faq</span>
          </dt>
          <dd>{userStatsEntity.readFaq ? <TextFormat value={userStatsEntity.readFaq} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="firstPostCreatedAt">First Post Created At</span>
          </dt>
          <dd>
            {userStatsEntity.firstPostCreatedAt ? (
              <TextFormat value={userStatsEntity.firstPostCreatedAt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="postCount">Post Count</span>
          </dt>
          <dd>{userStatsEntity.postCount}</dd>
          <dt>
            <span id="topicCount">Topic Count</span>
          </dt>
          <dd>{userStatsEntity.topicCount}</dd>
          <dt>
            <span id="bounceScore">Bounce Score</span>
          </dt>
          <dd>{userStatsEntity.bounceScore}</dd>
          <dt>
            <span id="resetBounceScoreAfter">Reset Bounce Score After</span>
          </dt>
          <dd>
            {userStatsEntity.resetBounceScoreAfter ? (
              <TextFormat value={userStatsEntity.resetBounceScoreAfter} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="flagsAgreed">Flags Agreed</span>
          </dt>
          <dd>{userStatsEntity.flagsAgreed}</dd>
          <dt>
            <span id="flagsDisagreed">Flags Disagreed</span>
          </dt>
          <dd>{userStatsEntity.flagsDisagreed}</dd>
          <dt>
            <span id="flagsIgnored">Flags Ignored</span>
          </dt>
          <dd>{userStatsEntity.flagsIgnored}</dd>
          <dt>
            <span id="firstUnreadAt">First Unread At</span>
          </dt>
          <dd>
            {userStatsEntity.firstUnreadAt ? (
              <TextFormat value={userStatsEntity.firstUnreadAt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="distinctBadgeCount">Distinct Badge Count</span>
          </dt>
          <dd>{userStatsEntity.distinctBadgeCount}</dd>
          <dt>
            <span id="firstUnreadPmAt">First Unread Pm At</span>
          </dt>
          <dd>
            {userStatsEntity.firstUnreadPmAt ? (
              <TextFormat value={userStatsEntity.firstUnreadPmAt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="digestAttemptedAt">Digest Attempted At</span>
          </dt>
          <dd>
            {userStatsEntity.digestAttemptedAt ? (
              <TextFormat value={userStatsEntity.digestAttemptedAt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
        </dl>
        <Button tag={Link} to="/user-stats" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/user-stats/${userStatsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default UserStatsDetail;
