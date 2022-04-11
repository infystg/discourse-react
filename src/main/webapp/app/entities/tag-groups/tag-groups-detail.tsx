import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './tag-groups.reducer';

export const TagGroupsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const tagGroupsEntity = useAppSelector(state => state.tagGroups.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="tagGroupsDetailsHeading">TagGroups</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{tagGroupsEntity.id}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{tagGroupsEntity.name}</dd>
          <dt>
            <span id="parentTagId">Parent Tag Id</span>
          </dt>
          <dd>{tagGroupsEntity.parentTagId}</dd>
          <dt>
            <span id="onePerTopic">One Per Topic</span>
          </dt>
          <dd>{tagGroupsEntity.onePerTopic ? 'true' : 'false'}</dd>
        </dl>
        <Button tag={Link} to="/tag-groups" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/tag-groups/${tagGroupsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default TagGroupsDetail;
