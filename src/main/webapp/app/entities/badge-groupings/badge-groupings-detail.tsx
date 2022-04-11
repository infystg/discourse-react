import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './badge-groupings.reducer';

export const BadgeGroupingsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const badgeGroupingsEntity = useAppSelector(state => state.badgeGroupings.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="badgeGroupingsDetailsHeading">BadgeGroupings</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{badgeGroupingsEntity.id}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{badgeGroupingsEntity.name}</dd>
          <dt>
            <span id="description">Description</span>
          </dt>
          <dd>{badgeGroupingsEntity.description}</dd>
          <dt>
            <span id="position">Position</span>
          </dt>
          <dd>{badgeGroupingsEntity.position}</dd>
        </dl>
        <Button tag={Link} to="/badge-groupings" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/badge-groupings/${badgeGroupingsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default BadgeGroupingsDetail;
