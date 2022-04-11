import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './groups.reducer';

export const GroupsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const groupsEntity = useAppSelector(state => state.groups.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="groupsDetailsHeading">Groups</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{groupsEntity.id}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{groupsEntity.name}</dd>
          <dt>
            <span id="automatic">Automatic</span>
          </dt>
          <dd>{groupsEntity.automatic ? 'true' : 'false'}</dd>
          <dt>
            <span id="userCount">User Count</span>
          </dt>
          <dd>{groupsEntity.userCount}</dd>
          <dt>
            <span id="automaticMembershipEmailDomains">Automatic Membership Email Domains</span>
          </dt>
          <dd>{groupsEntity.automaticMembershipEmailDomains}</dd>
          <dt>
            <span id="primaryGroup">Primary Group</span>
          </dt>
          <dd>{groupsEntity.primaryGroup ? 'true' : 'false'}</dd>
          <dt>
            <span id="title">Title</span>
          </dt>
          <dd>{groupsEntity.title}</dd>
          <dt>
            <span id="grantTrustLevel">Grant Trust Level</span>
          </dt>
          <dd>{groupsEntity.grantTrustLevel}</dd>
          <dt>
            <span id="incomingEmail">Incoming Email</span>
          </dt>
          <dd>{groupsEntity.incomingEmail}</dd>
          <dt>
            <span id="hasMessages">Has Messages</span>
          </dt>
          <dd>{groupsEntity.hasMessages ? 'true' : 'false'}</dd>
          <dt>
            <span id="flairUrl">Flair Url</span>
          </dt>
          <dd>{groupsEntity.flairUrl}</dd>
          <dt>
            <span id="flairBgColor">Flair Bg Color</span>
          </dt>
          <dd>{groupsEntity.flairBgColor}</dd>
          <dt>
            <span id="flairColor">Flair Color</span>
          </dt>
          <dd>{groupsEntity.flairColor}</dd>
          <dt>
            <span id="bioRaw">Bio Raw</span>
          </dt>
          <dd>{groupsEntity.bioRaw}</dd>
          <dt>
            <span id="bioCooked">Bio Cooked</span>
          </dt>
          <dd>{groupsEntity.bioCooked}</dd>
          <dt>
            <span id="allowMembershipRequests">Allow Membership Requests</span>
          </dt>
          <dd>{groupsEntity.allowMembershipRequests ? 'true' : 'false'}</dd>
          <dt>
            <span id="fullName">Full Name</span>
          </dt>
          <dd>{groupsEntity.fullName}</dd>
          <dt>
            <span id="defaultNotificationLevel">Default Notification Level</span>
          </dt>
          <dd>{groupsEntity.defaultNotificationLevel}</dd>
          <dt>
            <span id="visibilityLevel">Visibility Level</span>
          </dt>
          <dd>{groupsEntity.visibilityLevel}</dd>
          <dt>
            <span id="publicExit">Public Exit</span>
          </dt>
          <dd>{groupsEntity.publicExit ? 'true' : 'false'}</dd>
          <dt>
            <span id="publicAdmission">Public Admission</span>
          </dt>
          <dd>{groupsEntity.publicAdmission ? 'true' : 'false'}</dd>
          <dt>
            <span id="membershipRequestTemplate">Membership Request Template</span>
          </dt>
          <dd>{groupsEntity.membershipRequestTemplate}</dd>
          <dt>
            <span id="messageableLevel">Messageable Level</span>
          </dt>
          <dd>{groupsEntity.messageableLevel}</dd>
          <dt>
            <span id="mentionableLevel">Mentionable Level</span>
          </dt>
          <dd>{groupsEntity.mentionableLevel}</dd>
          <dt>
            <span id="smtpServer">Smtp Server</span>
          </dt>
          <dd>{groupsEntity.smtpServer}</dd>
          <dt>
            <span id="smtpPort">Smtp Port</span>
          </dt>
          <dd>{groupsEntity.smtpPort}</dd>
          <dt>
            <span id="smtpSsl">Smtp Ssl</span>
          </dt>
          <dd>{groupsEntity.smtpSsl ? 'true' : 'false'}</dd>
          <dt>
            <span id="imapServer">Imap Server</span>
          </dt>
          <dd>{groupsEntity.imapServer}</dd>
          <dt>
            <span id="imapPort">Imap Port</span>
          </dt>
          <dd>{groupsEntity.imapPort}</dd>
          <dt>
            <span id="imapSsl">Imap Ssl</span>
          </dt>
          <dd>{groupsEntity.imapSsl ? 'true' : 'false'}</dd>
          <dt>
            <span id="imapMailboxName">Imap Mailbox Name</span>
          </dt>
          <dd>{groupsEntity.imapMailboxName}</dd>
          <dt>
            <span id="imapUidValidity">Imap Uid Validity</span>
          </dt>
          <dd>{groupsEntity.imapUidValidity}</dd>
          <dt>
            <span id="imapLastUid">Imap Last Uid</span>
          </dt>
          <dd>{groupsEntity.imapLastUid}</dd>
          <dt>
            <span id="emailUsername">Email Username</span>
          </dt>
          <dd>{groupsEntity.emailUsername}</dd>
          <dt>
            <span id="emailPassword">Email Password</span>
          </dt>
          <dd>{groupsEntity.emailPassword}</dd>
          <dt>
            <span id="publishReadState">Publish Read State</span>
          </dt>
          <dd>{groupsEntity.publishReadState ? 'true' : 'false'}</dd>
          <dt>
            <span id="membersVisibilityLevel">Members Visibility Level</span>
          </dt>
          <dd>{groupsEntity.membersVisibilityLevel}</dd>
          <dt>
            <span id="imapLastError">Imap Last Error</span>
          </dt>
          <dd>{groupsEntity.imapLastError}</dd>
          <dt>
            <span id="imapOldEmails">Imap Old Emails</span>
          </dt>
          <dd>{groupsEntity.imapOldEmails}</dd>
          <dt>
            <span id="imapNewEmails">Imap New Emails</span>
          </dt>
          <dd>{groupsEntity.imapNewEmails}</dd>
          <dt>
            <span id="flairIcon">Flair Icon</span>
          </dt>
          <dd>{groupsEntity.flairIcon}</dd>
          <dt>
            <span id="flairUploadId">Flair Upload Id</span>
          </dt>
          <dd>{groupsEntity.flairUploadId}</dd>
          <dt>
            <span id="allowUnknownSenderTopicReplies">Allow Unknown Sender Topic Replies</span>
          </dt>
          <dd>{groupsEntity.allowUnknownSenderTopicReplies ? 'true' : 'false'}</dd>
        </dl>
        <Button tag={Link} to="/groups" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/groups/${groupsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default GroupsDetail;
