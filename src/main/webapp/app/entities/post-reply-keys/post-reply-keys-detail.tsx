import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './post-reply-keys.reducer';

export const PostReplyKeysDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const postReplyKeysEntity = useAppSelector(state => state.postReplyKeys.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="postReplyKeysDetailsHeading">PostReplyKeys</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{postReplyKeysEntity.id}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{postReplyKeysEntity.userId}</dd>
          <dt>
            <span id="postId">Post Id</span>
          </dt>
          <dd>{postReplyKeysEntity.postId}</dd>
          <dt>
            <span id="replyKey">Reply Key</span>
          </dt>
          <dd>{postReplyKeysEntity.replyKey}</dd>
        </dl>
        <Button tag={Link} to="/post-reply-keys" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/post-reply-keys/${postReplyKeysEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default PostReplyKeysDetail;
