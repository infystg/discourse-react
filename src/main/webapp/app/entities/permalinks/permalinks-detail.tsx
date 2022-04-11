import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './permalinks.reducer';

export const PermalinksDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const permalinksEntity = useAppSelector(state => state.permalinks.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="permalinksDetailsHeading">Permalinks</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{permalinksEntity.id}</dd>
          <dt>
            <span id="url">Url</span>
          </dt>
          <dd>{permalinksEntity.url}</dd>
          <dt>
            <span id="topicId">Topic Id</span>
          </dt>
          <dd>{permalinksEntity.topicId}</dd>
          <dt>
            <span id="postId">Post Id</span>
          </dt>
          <dd>{permalinksEntity.postId}</dd>
          <dt>
            <span id="categoryId">Category Id</span>
          </dt>
          <dd>{permalinksEntity.categoryId}</dd>
          <dt>
            <span id="externalUrl">External Url</span>
          </dt>
          <dd>{permalinksEntity.externalUrl}</dd>
          <dt>
            <span id="tagId">Tag Id</span>
          </dt>
          <dd>{permalinksEntity.tagId}</dd>
        </dl>
        <Button tag={Link} to="/permalinks" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/permalinks/${permalinksEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default PermalinksDetail;
