import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './post-actions.reducer';

export const PostActionsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const postActionsEntity = useAppSelector(state => state.postActions.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="postActionsDetailsHeading">PostActions</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{postActionsEntity.id}</dd>
          <dt>
            <span id="postId">Post Id</span>
          </dt>
          <dd>{postActionsEntity.postId}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{postActionsEntity.userId}</dd>
          <dt>
            <span id="postActionTypeId">Post Action Type Id</span>
          </dt>
          <dd>{postActionsEntity.postActionTypeId}</dd>
          <dt>
            <span id="deletedAt">Deleted At</span>
          </dt>
          <dd>
            {postActionsEntity.deletedAt ? <TextFormat value={postActionsEntity.deletedAt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="deletedById">Deleted By Id</span>
          </dt>
          <dd>{postActionsEntity.deletedById}</dd>
          <dt>
            <span id="relatedPostId">Related Post Id</span>
          </dt>
          <dd>{postActionsEntity.relatedPostId}</dd>
          <dt>
            <span id="staffTookAction">Staff Took Action</span>
          </dt>
          <dd>{postActionsEntity.staffTookAction ? 'true' : 'false'}</dd>
          <dt>
            <span id="deferredById">Deferred By Id</span>
          </dt>
          <dd>{postActionsEntity.deferredById}</dd>
          <dt>
            <span id="targetsTopic">Targets Topic</span>
          </dt>
          <dd>{postActionsEntity.targetsTopic ? 'true' : 'false'}</dd>
          <dt>
            <span id="agreedAt">Agreed At</span>
          </dt>
          <dd>
            {postActionsEntity.agreedAt ? <TextFormat value={postActionsEntity.agreedAt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="agreedById">Agreed By Id</span>
          </dt>
          <dd>{postActionsEntity.agreedById}</dd>
          <dt>
            <span id="deferredAt">Deferred At</span>
          </dt>
          <dd>
            {postActionsEntity.deferredAt ? <TextFormat value={postActionsEntity.deferredAt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="disagreedAt">Disagreed At</span>
          </dt>
          <dd>
            {postActionsEntity.disagreedAt ? (
              <TextFormat value={postActionsEntity.disagreedAt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="disagreedById">Disagreed By Id</span>
          </dt>
          <dd>{postActionsEntity.disagreedById}</dd>
        </dl>
        <Button tag={Link} to="/post-actions" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/post-actions/${postActionsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default PostActionsDetail;
