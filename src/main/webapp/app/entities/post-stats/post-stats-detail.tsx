import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './post-stats.reducer';

export const PostStatsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const postStatsEntity = useAppSelector(state => state.postStats.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="postStatsDetailsHeading">PostStats</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{postStatsEntity.id}</dd>
          <dt>
            <span id="postId">Post Id</span>
          </dt>
          <dd>{postStatsEntity.postId}</dd>
          <dt>
            <span id="draftsSaved">Drafts Saved</span>
          </dt>
          <dd>{postStatsEntity.draftsSaved}</dd>
          <dt>
            <span id="typingDurationMsecs">Typing Duration Msecs</span>
          </dt>
          <dd>{postStatsEntity.typingDurationMsecs}</dd>
          <dt>
            <span id="composerOpenDurationMsecs">Composer Open Duration Msecs</span>
          </dt>
          <dd>{postStatsEntity.composerOpenDurationMsecs}</dd>
        </dl>
        <Button tag={Link} to="/post-stats" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/post-stats/${postStatsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default PostStatsDetail;
