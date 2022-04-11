import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './post-details.reducer';

export const PostDetailsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const postDetailsEntity = useAppSelector(state => state.postDetails.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="postDetailsDetailsHeading">PostDetails</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{postDetailsEntity.id}</dd>
          <dt>
            <span id="postId">Post Id</span>
          </dt>
          <dd>{postDetailsEntity.postId}</dd>
          <dt>
            <span id="key">Key</span>
          </dt>
          <dd>{postDetailsEntity.key}</dd>
          <dt>
            <span id="value">Value</span>
          </dt>
          <dd>{postDetailsEntity.value}</dd>
          <dt>
            <span id="extra">Extra</span>
          </dt>
          <dd>{postDetailsEntity.extra}</dd>
        </dl>
        <Button tag={Link} to="/post-details" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/post-details/${postDetailsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default PostDetailsDetail;
