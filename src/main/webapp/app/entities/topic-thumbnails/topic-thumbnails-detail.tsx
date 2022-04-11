import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './topic-thumbnails.reducer';

export const TopicThumbnailsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const topicThumbnailsEntity = useAppSelector(state => state.topicThumbnails.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="topicThumbnailsDetailsHeading">TopicThumbnails</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{topicThumbnailsEntity.id}</dd>
          <dt>
            <span id="uploadId">Upload Id</span>
          </dt>
          <dd>{topicThumbnailsEntity.uploadId}</dd>
          <dt>
            <span id="optimizedImageId">Optimized Image Id</span>
          </dt>
          <dd>{topicThumbnailsEntity.optimizedImageId}</dd>
          <dt>
            <span id="maxWidth">Max Width</span>
          </dt>
          <dd>{topicThumbnailsEntity.maxWidth}</dd>
          <dt>
            <span id="maxHeight">Max Height</span>
          </dt>
          <dd>{topicThumbnailsEntity.maxHeight}</dd>
        </dl>
        <Button tag={Link} to="/topic-thumbnails" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/topic-thumbnails/${topicThumbnailsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default TopicThumbnailsDetail;
