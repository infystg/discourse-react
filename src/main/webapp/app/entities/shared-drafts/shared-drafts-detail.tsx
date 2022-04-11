import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './shared-drafts.reducer';

export const SharedDraftsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const sharedDraftsEntity = useAppSelector(state => state.sharedDrafts.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="sharedDraftsDetailsHeading">SharedDrafts</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{sharedDraftsEntity.id}</dd>
          <dt>
            <span id="topicId">Topic Id</span>
          </dt>
          <dd>{sharedDraftsEntity.topicId}</dd>
          <dt>
            <span id="categoryId">Category Id</span>
          </dt>
          <dd>{sharedDraftsEntity.categoryId}</dd>
        </dl>
        <Button tag={Link} to="/shared-drafts" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/shared-drafts/${sharedDraftsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default SharedDraftsDetail;
