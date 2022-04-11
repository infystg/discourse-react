import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './web-crawler-requests.reducer';

export const WebCrawlerRequestsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const webCrawlerRequestsEntity = useAppSelector(state => state.webCrawlerRequests.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="webCrawlerRequestsDetailsHeading">WebCrawlerRequests</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{webCrawlerRequestsEntity.id}</dd>
          <dt>
            <span id="date">Date</span>
          </dt>
          <dd>
            {webCrawlerRequestsEntity.date ? (
              <TextFormat value={webCrawlerRequestsEntity.date} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="userAgent">User Agent</span>
          </dt>
          <dd>{webCrawlerRequestsEntity.userAgent}</dd>
          <dt>
            <span id="count">Count</span>
          </dt>
          <dd>{webCrawlerRequestsEntity.count}</dd>
        </dl>
        <Button tag={Link} to="/web-crawler-requests" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/web-crawler-requests/${webCrawlerRequestsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default WebCrawlerRequestsDetail;
