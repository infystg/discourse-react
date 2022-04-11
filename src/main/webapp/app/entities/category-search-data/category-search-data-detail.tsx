import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './category-search-data.reducer';

export const CategorySearchDataDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const categorySearchDataEntity = useAppSelector(state => state.categorySearchData.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="categorySearchDataDetailsHeading">CategorySearchData</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{categorySearchDataEntity.id}</dd>
          <dt>
            <span id="categoryId">Category Id</span>
          </dt>
          <dd>{categorySearchDataEntity.categoryId}</dd>
          <dt>
            <span id="searchData">Search Data</span>
          </dt>
          <dd>{categorySearchDataEntity.searchData}</dd>
          <dt>
            <span id="rawData">Raw Data</span>
          </dt>
          <dd>{categorySearchDataEntity.rawData}</dd>
          <dt>
            <span id="locale">Locale</span>
          </dt>
          <dd>{categorySearchDataEntity.locale}</dd>
          <dt>
            <span id="version">Version</span>
          </dt>
          <dd>{categorySearchDataEntity.version}</dd>
        </dl>
        <Button tag={Link} to="/category-search-data" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/category-search-data/${categorySearchDataEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CategorySearchDataDetail;
