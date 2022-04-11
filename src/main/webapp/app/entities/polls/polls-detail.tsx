import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './polls.reducer';

export const PollsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const pollsEntity = useAppSelector(state => state.polls.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="pollsDetailsHeading">Polls</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{pollsEntity.id}</dd>
          <dt>
            <span id="postId">Post Id</span>
          </dt>
          <dd>{pollsEntity.postId}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{pollsEntity.name}</dd>
          <dt>
            <span id="closeAt">Close At</span>
          </dt>
          <dd>{pollsEntity.closeAt ? <TextFormat value={pollsEntity.closeAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="type">Type</span>
          </dt>
          <dd>{pollsEntity.type}</dd>
          <dt>
            <span id="status">Status</span>
          </dt>
          <dd>{pollsEntity.status}</dd>
          <dt>
            <span id="results">Results</span>
          </dt>
          <dd>{pollsEntity.results}</dd>
          <dt>
            <span id="visibility">Visibility</span>
          </dt>
          <dd>{pollsEntity.visibility}</dd>
          <dt>
            <span id="min">Min</span>
          </dt>
          <dd>{pollsEntity.min}</dd>
          <dt>
            <span id="max">Max</span>
          </dt>
          <dd>{pollsEntity.max}</dd>
          <dt>
            <span id="step">Step</span>
          </dt>
          <dd>{pollsEntity.step}</dd>
          <dt>
            <span id="anonymousVoters">Anonymous Voters</span>
          </dt>
          <dd>{pollsEntity.anonymousVoters}</dd>
          <dt>
            <span id="chartType">Chart Type</span>
          </dt>
          <dd>{pollsEntity.chartType}</dd>
          <dt>
            <span id="groups">Groups</span>
          </dt>
          <dd>{pollsEntity.groups}</dd>
          <dt>
            <span id="title">Title</span>
          </dt>
          <dd>{pollsEntity.title}</dd>
          <dt>Poll Votes</dt>
          <dd>{pollsEntity.pollVotes ? pollsEntity.pollVotes.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/polls" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/polls/${pollsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default PollsDetail;
