import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './post-search-data.reducer';

export const PostSearchDataDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const postSearchDataEntity = useAppSelector(state => state.postSearchData.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="postSearchDataDetailsHeading">PostSearchData</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{postSearchDataEntity.id}</dd>
          <dt>
            <span id="postId">Post Id</span>
          </dt>
          <dd>{postSearchDataEntity.postId}</dd>
          <dt>
            <span id="searchData">Search Data</span>
          </dt>
          <dd>{postSearchDataEntity.searchData}</dd>
          <dt>
            <span id="rawData">Raw Data</span>
          </dt>
          <dd>{postSearchDataEntity.rawData}</dd>
          <dt>
            <span id="locale">Locale</span>
          </dt>
          <dd>{postSearchDataEntity.locale}</dd>
          <dt>
            <span id="version">Version</span>
          </dt>
          <dd>{postSearchDataEntity.version}</dd>
          <dt>
            <span id="privateMessage">Private Message</span>
          </dt>
          <dd>{postSearchDataEntity.privateMessage ? 'true' : 'false'}</dd>
        </dl>
        <Button tag={Link} to="/post-search-data" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/post-search-data/${postSearchDataEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default PostSearchDataDetail;
