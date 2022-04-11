import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './top-topics.reducer';

export const TopTopicsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const topTopicsEntity = useAppSelector(state => state.topTopics.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="topTopicsDetailsHeading">TopTopics</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{topTopicsEntity.id}</dd>
          <dt>
            <span id="topicId">Topic Id</span>
          </dt>
          <dd>{topTopicsEntity.topicId}</dd>
          <dt>
            <span id="yearlyPostsCount">Yearly Posts Count</span>
          </dt>
          <dd>{topTopicsEntity.yearlyPostsCount}</dd>
          <dt>
            <span id="yearlyViewsCount">Yearly Views Count</span>
          </dt>
          <dd>{topTopicsEntity.yearlyViewsCount}</dd>
          <dt>
            <span id="yearlyLikesCount">Yearly Likes Count</span>
          </dt>
          <dd>{topTopicsEntity.yearlyLikesCount}</dd>
          <dt>
            <span id="monthlyPostsCount">Monthly Posts Count</span>
          </dt>
          <dd>{topTopicsEntity.monthlyPostsCount}</dd>
          <dt>
            <span id="monthlyViewsCount">Monthly Views Count</span>
          </dt>
          <dd>{topTopicsEntity.monthlyViewsCount}</dd>
          <dt>
            <span id="monthlyLikesCount">Monthly Likes Count</span>
          </dt>
          <dd>{topTopicsEntity.monthlyLikesCount}</dd>
          <dt>
            <span id="weeklyPostsCount">Weekly Posts Count</span>
          </dt>
          <dd>{topTopicsEntity.weeklyPostsCount}</dd>
          <dt>
            <span id="weeklyViewsCount">Weekly Views Count</span>
          </dt>
          <dd>{topTopicsEntity.weeklyViewsCount}</dd>
          <dt>
            <span id="weeklyLikesCount">Weekly Likes Count</span>
          </dt>
          <dd>{topTopicsEntity.weeklyLikesCount}</dd>
          <dt>
            <span id="dailyPostsCount">Daily Posts Count</span>
          </dt>
          <dd>{topTopicsEntity.dailyPostsCount}</dd>
          <dt>
            <span id="dailyViewsCount">Daily Views Count</span>
          </dt>
          <dd>{topTopicsEntity.dailyViewsCount}</dd>
          <dt>
            <span id="dailyLikesCount">Daily Likes Count</span>
          </dt>
          <dd>{topTopicsEntity.dailyLikesCount}</dd>
          <dt>
            <span id="dailyScore">Daily Score</span>
          </dt>
          <dd>{topTopicsEntity.dailyScore}</dd>
          <dt>
            <span id="weeklyScore">Weekly Score</span>
          </dt>
          <dd>{topTopicsEntity.weeklyScore}</dd>
          <dt>
            <span id="monthlyScore">Monthly Score</span>
          </dt>
          <dd>{topTopicsEntity.monthlyScore}</dd>
          <dt>
            <span id="yearlyScore">Yearly Score</span>
          </dt>
          <dd>{topTopicsEntity.yearlyScore}</dd>
          <dt>
            <span id="allScore">All Score</span>
          </dt>
          <dd>{topTopicsEntity.allScore}</dd>
          <dt>
            <span id="dailyOpLikesCount">Daily Op Likes Count</span>
          </dt>
          <dd>{topTopicsEntity.dailyOpLikesCount}</dd>
          <dt>
            <span id="weeklyOpLikesCount">Weekly Op Likes Count</span>
          </dt>
          <dd>{topTopicsEntity.weeklyOpLikesCount}</dd>
          <dt>
            <span id="monthlyOpLikesCount">Monthly Op Likes Count</span>
          </dt>
          <dd>{topTopicsEntity.monthlyOpLikesCount}</dd>
          <dt>
            <span id="yearlyOpLikesCount">Yearly Op Likes Count</span>
          </dt>
          <dd>{topTopicsEntity.yearlyOpLikesCount}</dd>
          <dt>
            <span id="quarterlyPostsCount">Quarterly Posts Count</span>
          </dt>
          <dd>{topTopicsEntity.quarterlyPostsCount}</dd>
          <dt>
            <span id="quarterlyViewsCount">Quarterly Views Count</span>
          </dt>
          <dd>{topTopicsEntity.quarterlyViewsCount}</dd>
          <dt>
            <span id="quarterlyLikesCount">Quarterly Likes Count</span>
          </dt>
          <dd>{topTopicsEntity.quarterlyLikesCount}</dd>
          <dt>
            <span id="quarterlyScore">Quarterly Score</span>
          </dt>
          <dd>{topTopicsEntity.quarterlyScore}</dd>
          <dt>
            <span id="quarterlyOpLikesCount">Quarterly Op Likes Count</span>
          </dt>
          <dd>{topTopicsEntity.quarterlyOpLikesCount}</dd>
        </dl>
        <Button tag={Link} to="/top-topics" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/top-topics/${topTopicsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default TopTopicsDetail;
