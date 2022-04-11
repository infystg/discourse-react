import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './search-logs.reducer';

export const SearchLogsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const searchLogsEntity = useAppSelector(state => state.searchLogs.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="searchLogsDetailsHeading">SearchLogs</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{searchLogsEntity.id}</dd>
          <dt>
            <span id="term">Term</span>
          </dt>
          <dd>{searchLogsEntity.term}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{searchLogsEntity.userId}</dd>
          <dt>
            <span id="ipAddress">Ip Address</span>
          </dt>
          <dd>{searchLogsEntity.ipAddress}</dd>
          <dt>
            <span id="searchResultId">Search Result Id</span>
          </dt>
          <dd>{searchLogsEntity.searchResultId}</dd>
          <dt>
            <span id="searchType">Search Type</span>
          </dt>
          <dd>{searchLogsEntity.searchType}</dd>
          <dt>
            <span id="searchResultType">Search Result Type</span>
          </dt>
          <dd>{searchLogsEntity.searchResultType}</dd>
        </dl>
        <Button tag={Link} to="/search-logs" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/search-logs/${searchLogsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default SearchLogsDetail;
