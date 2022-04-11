import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './linked-topics.reducer';

export const LinkedTopicsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const linkedTopicsEntity = useAppSelector(state => state.linkedTopics.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="linkedTopicsDetailsHeading">LinkedTopics</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{linkedTopicsEntity.id}</dd>
          <dt>
            <span id="topicId">Topic Id</span>
          </dt>
          <dd>{linkedTopicsEntity.topicId}</dd>
          <dt>
            <span id="originalTopicId">Original Topic Id</span>
          </dt>
          <dd>{linkedTopicsEntity.originalTopicId}</dd>
          <dt>
            <span id="sequence">Sequence</span>
          </dt>
          <dd>{linkedTopicsEntity.sequence}</dd>
        </dl>
        <Button tag={Link} to="/linked-topics" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/linked-topics/${linkedTopicsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default LinkedTopicsDetail;
