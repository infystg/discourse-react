import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './custom-emojis.reducer';

export const CustomEmojisDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const customEmojisEntity = useAppSelector(state => state.customEmojis.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="customEmojisDetailsHeading">CustomEmojis</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{customEmojisEntity.id}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{customEmojisEntity.name}</dd>
          <dt>
            <span id="uploadId">Upload Id</span>
          </dt>
          <dd>{customEmojisEntity.uploadId}</dd>
          <dt>
            <span id="group">Group</span>
          </dt>
          <dd>{customEmojisEntity.group}</dd>
        </dl>
        <Button tag={Link} to="/custom-emojis" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/custom-emojis/${customEmojisEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CustomEmojisDetail;
