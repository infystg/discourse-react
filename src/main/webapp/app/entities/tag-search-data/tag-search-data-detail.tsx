import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './tag-search-data.reducer';

export const TagSearchDataDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const tagSearchDataEntity = useAppSelector(state => state.tagSearchData.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="tagSearchDataDetailsHeading">TagSearchData</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{tagSearchDataEntity.id}</dd>
          <dt>
            <span id="tagId">Tag Id</span>
          </dt>
          <dd>{tagSearchDataEntity.tagId}</dd>
          <dt>
            <span id="searchData">Search Data</span>
          </dt>
          <dd>{tagSearchDataEntity.searchData}</dd>
          <dt>
            <span id="rawData">Raw Data</span>
          </dt>
          <dd>{tagSearchDataEntity.rawData}</dd>
          <dt>
            <span id="locale">Locale</span>
          </dt>
          <dd>{tagSearchDataEntity.locale}</dd>
          <dt>
            <span id="version">Version</span>
          </dt>
          <dd>{tagSearchDataEntity.version}</dd>
        </dl>
        <Button tag={Link} to="/tag-search-data" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/tag-search-data/${tagSearchDataEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default TagSearchDataDetail;
