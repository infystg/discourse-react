import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './backup-draft-posts.reducer';

export const BackupDraftPostsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const backupDraftPostsEntity = useAppSelector(state => state.backupDraftPosts.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="backupDraftPostsDetailsHeading">BackupDraftPosts</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{backupDraftPostsEntity.id}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{backupDraftPostsEntity.userId}</dd>
          <dt>
            <span id="postId">Post Id</span>
          </dt>
          <dd>{backupDraftPostsEntity.postId}</dd>
          <dt>
            <span id="key">Key</span>
          </dt>
          <dd>{backupDraftPostsEntity.key}</dd>
        </dl>
        <Button tag={Link} to="/backup-draft-posts" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/backup-draft-posts/${backupDraftPostsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default BackupDraftPostsDetail;
