import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './topic-groups.reducer';

export const TopicGroupsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const topicGroupsEntity = useAppSelector(state => state.topicGroups.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="topicGroupsDetailsHeading">TopicGroups</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{topicGroupsEntity.id}</dd>
          <dt>
            <span id="groupId">Group Id</span>
          </dt>
          <dd>{topicGroupsEntity.groupId}</dd>
          <dt>
            <span id="topicId">Topic Id</span>
          </dt>
          <dd>{topicGroupsEntity.topicId}</dd>
          <dt>
            <span id="lastReadPostNumber">Last Read Post Number</span>
          </dt>
          <dd>{topicGroupsEntity.lastReadPostNumber}</dd>
        </dl>
        <Button tag={Link} to="/topic-groups" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/topic-groups/${topicGroupsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default TopicGroupsDetail;
