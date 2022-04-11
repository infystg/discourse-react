import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './topic-links.reducer';

export const TopicLinksDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const topicLinksEntity = useAppSelector(state => state.topicLinks.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="topicLinksDetailsHeading">TopicLinks</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{topicLinksEntity.id}</dd>
          <dt>
            <span id="topicId">Topic Id</span>
          </dt>
          <dd>{topicLinksEntity.topicId}</dd>
          <dt>
            <span id="postId">Post Id</span>
          </dt>
          <dd>{topicLinksEntity.postId}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{topicLinksEntity.userId}</dd>
          <dt>
            <span id="url">Url</span>
          </dt>
          <dd>{topicLinksEntity.url}</dd>
          <dt>
            <span id="domain">Domain</span>
          </dt>
          <dd>{topicLinksEntity.domain}</dd>
          <dt>
            <span id="internal">Internal</span>
          </dt>
          <dd>{topicLinksEntity.internal ? 'true' : 'false'}</dd>
          <dt>
            <span id="linkTopicId">Link Topic Id</span>
          </dt>
          <dd>{topicLinksEntity.linkTopicId}</dd>
          <dt>
            <span id="reflection">Reflection</span>
          </dt>
          <dd>{topicLinksEntity.reflection ? 'true' : 'false'}</dd>
          <dt>
            <span id="clicks">Clicks</span>
          </dt>
          <dd>{topicLinksEntity.clicks}</dd>
          <dt>
            <span id="linkPostId">Link Post Id</span>
          </dt>
          <dd>{topicLinksEntity.linkPostId}</dd>
          <dt>
            <span id="title">Title</span>
          </dt>
          <dd>{topicLinksEntity.title}</dd>
          <dt>
            <span id="crawledAt">Crawled At</span>
          </dt>
          <dd>
            {topicLinksEntity.crawledAt ? <TextFormat value={topicLinksEntity.crawledAt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="quote">Quote</span>
          </dt>
          <dd>{topicLinksEntity.quote ? 'true' : 'false'}</dd>
          <dt>
            <span id="extension">Extension</span>
          </dt>
          <dd>{topicLinksEntity.extension}</dd>
        </dl>
        <Button tag={Link} to="/topic-links" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/topic-links/${topicLinksEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default TopicLinksDetail;
