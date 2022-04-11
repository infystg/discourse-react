import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './javascript-caches.reducer';

export const JavascriptCachesDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const javascriptCachesEntity = useAppSelector(state => state.javascriptCaches.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="javascriptCachesDetailsHeading">JavascriptCaches</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{javascriptCachesEntity.id}</dd>
          <dt>
            <span id="themeFieldId">Theme Field Id</span>
          </dt>
          <dd>{javascriptCachesEntity.themeFieldId}</dd>
          <dt>
            <span id="digest">Digest</span>
          </dt>
          <dd>{javascriptCachesEntity.digest}</dd>
          <dt>
            <span id="content">Content</span>
          </dt>
          <dd>{javascriptCachesEntity.content}</dd>
          <dt>
            <span id="themeId">Theme Id</span>
          </dt>
          <dd>{javascriptCachesEntity.themeId}</dd>
        </dl>
        <Button tag={Link} to="/javascript-caches" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/javascript-caches/${javascriptCachesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default JavascriptCachesDetail;
