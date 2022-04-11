import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './post-uploads.reducer';

export const PostUploadsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const postUploadsEntity = useAppSelector(state => state.postUploads.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="postUploadsDetailsHeading">PostUploads</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{postUploadsEntity.id}</dd>
          <dt>
            <span id="postId">Post Id</span>
          </dt>
          <dd>{postUploadsEntity.postId}</dd>
          <dt>
            <span id="uploadId">Upload Id</span>
          </dt>
          <dd>{postUploadsEntity.uploadId}</dd>
        </dl>
        <Button tag={Link} to="/post-uploads" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/post-uploads/${postUploadsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default PostUploadsDetail;
