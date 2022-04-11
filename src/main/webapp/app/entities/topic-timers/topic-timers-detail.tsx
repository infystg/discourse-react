import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './topic-timers.reducer';

export const TopicTimersDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const topicTimersEntity = useAppSelector(state => state.topicTimers.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="topicTimersDetailsHeading">TopicTimers</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{topicTimersEntity.id}</dd>
          <dt>
            <span id="executeAt">Execute At</span>
          </dt>
          <dd>
            {topicTimersEntity.executeAt ? <TextFormat value={topicTimersEntity.executeAt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="statusType">Status Type</span>
          </dt>
          <dd>{topicTimersEntity.statusType}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{topicTimersEntity.userId}</dd>
          <dt>
            <span id="topicId">Topic Id</span>
          </dt>
          <dd>{topicTimersEntity.topicId}</dd>
          <dt>
            <span id="basedOnLastPost">Based On Last Post</span>
          </dt>
          <dd>{topicTimersEntity.basedOnLastPost ? 'true' : 'false'}</dd>
          <dt>
            <span id="deletedAt">Deleted At</span>
          </dt>
          <dd>
            {topicTimersEntity.deletedAt ? <TextFormat value={topicTimersEntity.deletedAt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="deletedById">Deleted By Id</span>
          </dt>
          <dd>{topicTimersEntity.deletedById}</dd>
          <dt>
            <span id="categoryId">Category Id</span>
          </dt>
          <dd>{topicTimersEntity.categoryId}</dd>
          <dt>
            <span id="publicType">Public Type</span>
          </dt>
          <dd>{topicTimersEntity.publicType ? 'true' : 'false'}</dd>
          <dt>
            <span id="duration">Duration</span>
          </dt>
          <dd>{topicTimersEntity.duration}</dd>
          <dt>
            <span id="durationMinutes">Duration Minutes</span>
          </dt>
          <dd>{topicTimersEntity.durationMinutes}</dd>
        </dl>
        <Button tag={Link} to="/topic-timers" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/topic-timers/${topicTimersEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default TopicTimersDetail;
