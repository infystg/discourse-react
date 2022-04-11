import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './user-search-data.reducer';

export const UserSearchDataDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const userSearchDataEntity = useAppSelector(state => state.userSearchData.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="userSearchDataDetailsHeading">UserSearchData</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{userSearchDataEntity.id}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{userSearchDataEntity.userId}</dd>
          <dt>
            <span id="searchData">Search Data</span>
          </dt>
          <dd>{userSearchDataEntity.searchData}</dd>
          <dt>
            <span id="rawData">Raw Data</span>
          </dt>
          <dd>{userSearchDataEntity.rawData}</dd>
          <dt>
            <span id="locale">Locale</span>
          </dt>
          <dd>{userSearchDataEntity.locale}</dd>
          <dt>
            <span id="version">Version</span>
          </dt>
          <dd>{userSearchDataEntity.version}</dd>
        </dl>
        <Button tag={Link} to="/user-search-data" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/user-search-data/${userSearchDataEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default UserSearchDataDetail;
