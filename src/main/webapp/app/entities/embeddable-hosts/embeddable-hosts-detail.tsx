import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './embeddable-hosts.reducer';

export const EmbeddableHostsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const embeddableHostsEntity = useAppSelector(state => state.embeddableHosts.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="embeddableHostsDetailsHeading">EmbeddableHosts</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{embeddableHostsEntity.id}</dd>
          <dt>
            <span id="host">Host</span>
          </dt>
          <dd>{embeddableHostsEntity.host}</dd>
          <dt>
            <span id="categoryId">Category Id</span>
          </dt>
          <dd>{embeddableHostsEntity.categoryId}</dd>
          <dt>
            <span id="className">Class Name</span>
          </dt>
          <dd>{embeddableHostsEntity.className}</dd>
          <dt>
            <span id="allowedPaths">Allowed Paths</span>
          </dt>
          <dd>{embeddableHostsEntity.allowedPaths}</dd>
        </dl>
        <Button tag={Link} to="/embeddable-hosts" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/embeddable-hosts/${embeddableHostsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default EmbeddableHostsDetail;
