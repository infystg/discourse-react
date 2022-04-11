import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './post-revisions.reducer';

export const PostRevisionsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const postRevisionsEntity = useAppSelector(state => state.postRevisions.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="postRevisionsDetailsHeading">PostRevisions</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{postRevisionsEntity.id}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{postRevisionsEntity.userId}</dd>
          <dt>
            <span id="postId">Post Id</span>
          </dt>
          <dd>{postRevisionsEntity.postId}</dd>
          <dt>
            <span id="modifications">Modifications</span>
          </dt>
          <dd>{postRevisionsEntity.modifications}</dd>
          <dt>
            <span id="number">Number</span>
          </dt>
          <dd>{postRevisionsEntity.number}</dd>
          <dt>
            <span id="hidden">Hidden</span>
          </dt>
          <dd>{postRevisionsEntity.hidden ? 'true' : 'false'}</dd>
        </dl>
        <Button tag={Link} to="/post-revisions" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/post-revisions/${postRevisionsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default PostRevisionsDetail;
