import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './invites.reducer';

export const InvitesDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const invitesEntity = useAppSelector(state => state.invites.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="invitesDetailsHeading">Invites</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{invitesEntity.id}</dd>
          <dt>
            <span id="inviteKey">Invite Key</span>
          </dt>
          <dd>{invitesEntity.inviteKey}</dd>
          <dt>
            <span id="email">Email</span>
          </dt>
          <dd>{invitesEntity.email}</dd>
          <dt>
            <span id="invitedById">Invited By Id</span>
          </dt>
          <dd>{invitesEntity.invitedById}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{invitesEntity.userId}</dd>
          <dt>
            <span id="redeemedAt">Redeemed At</span>
          </dt>
          <dd>{invitesEntity.redeemedAt ? <TextFormat value={invitesEntity.redeemedAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="deletedAt">Deleted At</span>
          </dt>
          <dd>{invitesEntity.deletedAt ? <TextFormat value={invitesEntity.deletedAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="deletedById">Deleted By Id</span>
          </dt>
          <dd>{invitesEntity.deletedById}</dd>
          <dt>
            <span id="invalidatedAt">Invalidated At</span>
          </dt>
          <dd>
            {invitesEntity.invalidatedAt ? <TextFormat value={invitesEntity.invalidatedAt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="moderator">Moderator</span>
          </dt>
          <dd>{invitesEntity.moderator ? 'true' : 'false'}</dd>
          <dt>
            <span id="customMessage">Custom Message</span>
          </dt>
          <dd>{invitesEntity.customMessage}</dd>
          <dt>
            <span id="emailedStatus">Emailed Status</span>
          </dt>
          <dd>{invitesEntity.emailedStatus}</dd>
          <dt>
            <span id="maxRedemptionsAllowed">Max Redemptions Allowed</span>
          </dt>
          <dd>{invitesEntity.maxRedemptionsAllowed}</dd>
          <dt>
            <span id="redemptionCount">Redemption Count</span>
          </dt>
          <dd>{invitesEntity.redemptionCount}</dd>
          <dt>
            <span id="expiresAt">Expires At</span>
          </dt>
          <dd>{invitesEntity.expiresAt ? <TextFormat value={invitesEntity.expiresAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="emailToken">Email Token</span>
          </dt>
          <dd>{invitesEntity.emailToken}</dd>
        </dl>
        <Button tag={Link} to="/invites" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/invites/${invitesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default InvitesDetail;
