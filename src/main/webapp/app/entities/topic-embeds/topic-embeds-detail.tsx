import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './topic-embeds.reducer';

export const TopicEmbedsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const topicEmbedsEntity = useAppSelector(state => state.topicEmbeds.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="topicEmbedsDetailsHeading">TopicEmbeds</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{topicEmbedsEntity.id}</dd>
          <dt>
            <span id="topicId">Topic Id</span>
          </dt>
          <dd>{topicEmbedsEntity.topicId}</dd>
          <dt>
            <span id="postId">Post Id</span>
          </dt>
          <dd>{topicEmbedsEntity.postId}</dd>
          <dt>
            <span id="embedUrl">Embed Url</span>
          </dt>
          <dd>{topicEmbedsEntity.embedUrl}</dd>
          <dt>
            <span id="contentSha1">Content Sha 1</span>
          </dt>
          <dd>{topicEmbedsEntity.contentSha1}</dd>
          <dt>
            <span id="deletedAt">Deleted At</span>
          </dt>
          <dd>
            {topicEmbedsEntity.deletedAt ? <TextFormat value={topicEmbedsEntity.deletedAt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="deletedById">Deleted By Id</span>
          </dt>
          <dd>{topicEmbedsEntity.deletedById}</dd>
        </dl>
        <Button tag={Link} to="/topic-embeds" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/topic-embeds/${topicEmbedsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default TopicEmbedsDetail;
