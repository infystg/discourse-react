import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './invited-users.reducer';

export const InvitedUsersDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const invitedUsersEntity = useAppSelector(state => state.invitedUsers.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="invitedUsersDetailsHeading">InvitedUsers</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{invitedUsersEntity.id}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{invitedUsersEntity.userId}</dd>
          <dt>
            <span id="inviteId">Invite Id</span>
          </dt>
          <dd>{invitedUsersEntity.inviteId}</dd>
          <dt>
            <span id="redeemedAt">Redeemed At</span>
          </dt>
          <dd>
            {invitedUsersEntity.redeemedAt ? (
              <TextFormat value={invitedUsersEntity.redeemedAt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="updatedAt">Updated At</span>
          </dt>
          <dd>
            {invitedUsersEntity.updatedAt ? <TextFormat value={invitedUsersEntity.updatedAt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
        </dl>
        <Button tag={Link} to="/invited-users" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/invited-users/${invitedUsersEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default InvitedUsersDetail;
