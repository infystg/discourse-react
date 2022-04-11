import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './published-pages.reducer';

export const PublishedPagesDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const publishedPagesEntity = useAppSelector(state => state.publishedPages.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="publishedPagesDetailsHeading">PublishedPages</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{publishedPagesEntity.id}</dd>
          <dt>
            <span id="topicId">Topic Id</span>
          </dt>
          <dd>{publishedPagesEntity.topicId}</dd>
          <dt>
            <span id="slug">Slug</span>
          </dt>
          <dd>{publishedPagesEntity.slug}</dd>
          <dt>
            <span id="publiclyAvailable">Publicly Available</span>
          </dt>
          <dd>{publishedPagesEntity.publiclyAvailable ? 'true' : 'false'}</dd>
        </dl>
        <Button tag={Link} to="/published-pages" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/published-pages/${publishedPagesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default PublishedPagesDetail;
