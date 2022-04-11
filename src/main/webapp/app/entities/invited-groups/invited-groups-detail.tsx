import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './invited-groups.reducer';

export const InvitedGroupsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const invitedGroupsEntity = useAppSelector(state => state.invitedGroups.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="invitedGroupsDetailsHeading">InvitedGroups</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{invitedGroupsEntity.id}</dd>
          <dt>
            <span id="groupId">Group Id</span>
          </dt>
          <dd>{invitedGroupsEntity.groupId}</dd>
          <dt>
            <span id="inviteId">Invite Id</span>
          </dt>
          <dd>{invitedGroupsEntity.inviteId}</dd>
        </dl>
        <Button tag={Link} to="/invited-groups" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/invited-groups/${invitedGroupsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default InvitedGroupsDetail;
