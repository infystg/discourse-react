import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './users.reducer';

export const UsersDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const usersEntity = useAppSelector(state => state.users.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="usersDetailsHeading">Users</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{usersEntity.id}</dd>
          <dt>
            <span id="username">Username</span>
          </dt>
          <dd>{usersEntity.username}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{usersEntity.name}</dd>
          <dt>
            <span id="seenNotificationId">Seen Notification Id</span>
          </dt>
          <dd>{usersEntity.seenNotificationId}</dd>
          <dt>
            <span id="lastPostedAt">Last Posted At</span>
          </dt>
          <dd>{usersEntity.lastPostedAt ? <TextFormat value={usersEntity.lastPostedAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="passwordHash">Password Hash</span>
          </dt>
          <dd>{usersEntity.passwordHash}</dd>
          <dt>
            <span id="salt">Salt</span>
          </dt>
          <dd>{usersEntity.salt}</dd>
          <dt>
            <span id="active">Active</span>
          </dt>
          <dd>{usersEntity.active ? 'true' : 'false'}</dd>
          <dt>
            <span id="usernameLower">Username Lower</span>
          </dt>
          <dd>{usersEntity.usernameLower}</dd>
          <dt>
            <span id="lastSeenAt">Last Seen At</span>
          </dt>
          <dd>{usersEntity.lastSeenAt ? <TextFormat value={usersEntity.lastSeenAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="admin">Admin</span>
          </dt>
          <dd>{usersEntity.admin ? 'true' : 'false'}</dd>
          <dt>
            <span id="lastEmailedAt">Last Emailed At</span>
          </dt>
          <dd>
            {usersEntity.lastEmailedAt ? <TextFormat value={usersEntity.lastEmailedAt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="trustLevel">Trust Level</span>
          </dt>
          <dd>{usersEntity.trustLevel}</dd>
          <dt>
            <span id="approved">Approved</span>
          </dt>
          <dd>{usersEntity.approved ? 'true' : 'false'}</dd>
          <dt>
            <span id="approvedById">Approved By Id</span>
          </dt>
          <dd>{usersEntity.approvedById}</dd>
          <dt>
            <span id="approvedAt">Approved At</span>
          </dt>
          <dd>{usersEntity.approvedAt ? <TextFormat value={usersEntity.approvedAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="previousVisitAt">Previous Visit At</span>
          </dt>
          <dd>
            {usersEntity.previousVisitAt ? <TextFormat value={usersEntity.previousVisitAt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="suspendedAt">Suspended At</span>
          </dt>
          <dd>{usersEntity.suspendedAt ? <TextFormat value={usersEntity.suspendedAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="suspendedTill">Suspended Till</span>
          </dt>
          <dd>
            {usersEntity.suspendedTill ? <TextFormat value={usersEntity.suspendedTill} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="dateOfBirth">Date Of Birth</span>
          </dt>
          <dd>
            {usersEntity.dateOfBirth ? <TextFormat value={usersEntity.dateOfBirth} type="date" format={APP_LOCAL_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="views">Views</span>
          </dt>
          <dd>{usersEntity.views}</dd>
          <dt>
            <span id="flagLevel">Flag Level</span>
          </dt>
          <dd>{usersEntity.flagLevel}</dd>
          <dt>
            <span id="ipAddress">Ip Address</span>
          </dt>
          <dd>{usersEntity.ipAddress}</dd>
          <dt>
            <span id="moderator">Moderator</span>
          </dt>
          <dd>{usersEntity.moderator ? 'true' : 'false'}</dd>
          <dt>
            <span id="title">Title</span>
          </dt>
          <dd>{usersEntity.title}</dd>
          <dt>
            <span id="uploadedAvatarId">Uploaded Avatar Id</span>
          </dt>
          <dd>{usersEntity.uploadedAvatarId}</dd>
          <dt>
            <span id="locale">Locale</span>
          </dt>
          <dd>{usersEntity.locale}</dd>
          <dt>
            <span id="primaryGroupId">Primary Group Id</span>
          </dt>
          <dd>{usersEntity.primaryGroupId}</dd>
          <dt>
            <span id="registrationIpAddress">Registration Ip Address</span>
          </dt>
          <dd>{usersEntity.registrationIpAddress}</dd>
          <dt>
            <span id="staged">Staged</span>
          </dt>
          <dd>{usersEntity.staged ? 'true' : 'false'}</dd>
          <dt>
            <span id="firstSeenAt">First Seen At</span>
          </dt>
          <dd>{usersEntity.firstSeenAt ? <TextFormat value={usersEntity.firstSeenAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="silencedTill">Silenced Till</span>
          </dt>
          <dd>{usersEntity.silencedTill ? <TextFormat value={usersEntity.silencedTill} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="groupLockedTrustLevel">Group Locked Trust Level</span>
          </dt>
          <dd>{usersEntity.groupLockedTrustLevel}</dd>
          <dt>
            <span id="manualLockedTrustLevel">Manual Locked Trust Level</span>
          </dt>
          <dd>{usersEntity.manualLockedTrustLevel}</dd>
          <dt>
            <span id="secureIdentifier">Secure Identifier</span>
          </dt>
          <dd>{usersEntity.secureIdentifier}</dd>
          <dt>User Security Keys</dt>
          <dd>{usersEntity.userSecurityKeys ? usersEntity.userSecurityKeys.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/users" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/users/${usersEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default UsersDetail;
