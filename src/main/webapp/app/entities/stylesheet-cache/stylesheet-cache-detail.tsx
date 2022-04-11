import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './stylesheet-cache.reducer';

export const StylesheetCacheDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const stylesheetCacheEntity = useAppSelector(state => state.stylesheetCache.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="stylesheetCacheDetailsHeading">StylesheetCache</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{stylesheetCacheEntity.id}</dd>
          <dt>
            <span id="target">Target</span>
          </dt>
          <dd>{stylesheetCacheEntity.target}</dd>
          <dt>
            <span id="digest">Digest</span>
          </dt>
          <dd>{stylesheetCacheEntity.digest}</dd>
          <dt>
            <span id="content">Content</span>
          </dt>
          <dd>{stylesheetCacheEntity.content}</dd>
          <dt>
            <span id="themeId">Theme Id</span>
          </dt>
          <dd>{stylesheetCacheEntity.themeId}</dd>
          <dt>
            <span id="sourceMap">Source Map</span>
          </dt>
          <dd>{stylesheetCacheEntity.sourceMap}</dd>
        </dl>
        <Button tag={Link} to="/stylesheet-cache" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/stylesheet-cache/${stylesheetCacheEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default StylesheetCacheDetail;
