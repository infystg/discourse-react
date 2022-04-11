import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './tag-group-memberships.reducer';

export const TagGroupMembershipsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const tagGroupMembershipsEntity = useAppSelector(state => state.tagGroupMemberships.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="tagGroupMembershipsDetailsHeading">TagGroupMemberships</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{tagGroupMembershipsEntity.id}</dd>
          <dt>
            <span id="tagId">Tag Id</span>
          </dt>
          <dd>{tagGroupMembershipsEntity.tagId}</dd>
          <dt>
            <span id="tagGroupId">Tag Group Id</span>
          </dt>
          <dd>{tagGroupMembershipsEntity.tagGroupId}</dd>
        </dl>
        <Button tag={Link} to="/tag-group-memberships" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/tag-group-memberships/${tagGroupMembershipsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default TagGroupMembershipsDetail;
