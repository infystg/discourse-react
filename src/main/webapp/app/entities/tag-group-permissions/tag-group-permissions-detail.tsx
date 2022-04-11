import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './tag-group-permissions.reducer';

export const TagGroupPermissionsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const tagGroupPermissionsEntity = useAppSelector(state => state.tagGroupPermissions.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="tagGroupPermissionsDetailsHeading">TagGroupPermissions</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{tagGroupPermissionsEntity.id}</dd>
          <dt>
            <span id="tagGroupId">Tag Group Id</span>
          </dt>
          <dd>{tagGroupPermissionsEntity.tagGroupId}</dd>
          <dt>
            <span id="groupId">Group Id</span>
          </dt>
          <dd>{tagGroupPermissionsEntity.groupId}</dd>
          <dt>
            <span id="permissionType">Permission Type</span>
          </dt>
          <dd>{tagGroupPermissionsEntity.permissionType}</dd>
        </dl>
        <Button tag={Link} to="/tag-group-permissions" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/tag-group-permissions/${tagGroupPermissionsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default TagGroupPermissionsDetail;
