import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './topic-search-data.reducer';

export const TopicSearchDataDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const topicSearchDataEntity = useAppSelector(state => state.topicSearchData.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="topicSearchDataDetailsHeading">TopicSearchData</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{topicSearchDataEntity.id}</dd>
          <dt>
            <span id="topicId">Topic Id</span>
          </dt>
          <dd>{topicSearchDataEntity.topicId}</dd>
          <dt>
            <span id="rawData">Raw Data</span>
          </dt>
          <dd>{topicSearchDataEntity.rawData}</dd>
          <dt>
            <span id="locale">Locale</span>
          </dt>
          <dd>{topicSearchDataEntity.locale}</dd>
          <dt>
            <span id="searchData">Search Data</span>
          </dt>
          <dd>{topicSearchDataEntity.searchData}</dd>
          <dt>
            <span id="version">Version</span>
          </dt>
          <dd>{topicSearchDataEntity.version}</dd>
        </dl>
        <Button tag={Link} to="/topic-search-data" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/topic-search-data/${topicSearchDataEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default TopicSearchDataDetail;
