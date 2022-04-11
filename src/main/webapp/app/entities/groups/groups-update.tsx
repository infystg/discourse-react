import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IGroups } from 'app/shared/model/groups.model';
import { getEntity, updateEntity, createEntity, reset } from './groups.reducer';

export const GroupsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const groupsEntity = useAppSelector(state => state.groups.entity);
  const loading = useAppSelector(state => state.groups.loading);
  const updating = useAppSelector(state => state.groups.updating);
  const updateSuccess = useAppSelector(state => state.groups.updateSuccess);
  const handleClose = () => {
    props.history.push('/groups' + props.location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(props.match.params.id));
    }
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...groupsEntity,
      ...values,
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          ...groupsEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.groups.home.createOrEditLabel" data-cy="GroupsCreateUpdateHeading">
            Create or edit a Groups
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="groups-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="Name"
                id="groups-name"
                name="name"
                data-cy="name"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Automatic" id="groups-automatic" name="automatic" data-cy="automatic" check type="checkbox" />
              <ValidatedField
                label="User Count"
                id="groups-userCount"
                name="userCount"
                data-cy="userCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Automatic Membership Email Domains"
                id="groups-automaticMembershipEmailDomains"
                name="automaticMembershipEmailDomains"
                data-cy="automaticMembershipEmailDomains"
                type="text"
              />
              <ValidatedField
                label="Primary Group"
                id="groups-primaryGroup"
                name="primaryGroup"
                data-cy="primaryGroup"
                check
                type="checkbox"
              />
              <ValidatedField label="Title" id="groups-title" name="title" data-cy="title" type="text" />
              <ValidatedField
                label="Grant Trust Level"
                id="groups-grantTrustLevel"
                name="grantTrustLevel"
                data-cy="grantTrustLevel"
                type="text"
              />
              <ValidatedField label="Incoming Email" id="groups-incomingEmail" name="incomingEmail" data-cy="incomingEmail" type="text" />
              <ValidatedField label="Has Messages" id="groups-hasMessages" name="hasMessages" data-cy="hasMessages" check type="checkbox" />
              <ValidatedField label="Flair Url" id="groups-flairUrl" name="flairUrl" data-cy="flairUrl" type="text" />
              <ValidatedField label="Flair Bg Color" id="groups-flairBgColor" name="flairBgColor" data-cy="flairBgColor" type="text" />
              <ValidatedField label="Flair Color" id="groups-flairColor" name="flairColor" data-cy="flairColor" type="text" />
              <ValidatedField label="Bio Raw" id="groups-bioRaw" name="bioRaw" data-cy="bioRaw" type="text" />
              <ValidatedField label="Bio Cooked" id="groups-bioCooked" name="bioCooked" data-cy="bioCooked" type="text" />
              <ValidatedField
                label="Allow Membership Requests"
                id="groups-allowMembershipRequests"
                name="allowMembershipRequests"
                data-cy="allowMembershipRequests"
                check
                type="checkbox"
              />
              <ValidatedField label="Full Name" id="groups-fullName" name="fullName" data-cy="fullName" type="text" />
              <ValidatedField
                label="Default Notification Level"
                id="groups-defaultNotificationLevel"
                name="defaultNotificationLevel"
                data-cy="defaultNotificationLevel"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Visibility Level"
                id="groups-visibilityLevel"
                name="visibilityLevel"
                data-cy="visibilityLevel"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Public Exit" id="groups-publicExit" name="publicExit" data-cy="publicExit" check type="checkbox" />
              <ValidatedField
                label="Public Admission"
                id="groups-publicAdmission"
                name="publicAdmission"
                data-cy="publicAdmission"
                check
                type="checkbox"
              />
              <ValidatedField
                label="Membership Request Template"
                id="groups-membershipRequestTemplate"
                name="membershipRequestTemplate"
                data-cy="membershipRequestTemplate"
                type="text"
              />
              <ValidatedField
                label="Messageable Level"
                id="groups-messageableLevel"
                name="messageableLevel"
                data-cy="messageableLevel"
                type="text"
              />
              <ValidatedField
                label="Mentionable Level"
                id="groups-mentionableLevel"
                name="mentionableLevel"
                data-cy="mentionableLevel"
                type="text"
              />
              <ValidatedField label="Smtp Server" id="groups-smtpServer" name="smtpServer" data-cy="smtpServer" type="text" />
              <ValidatedField label="Smtp Port" id="groups-smtpPort" name="smtpPort" data-cy="smtpPort" type="text" />
              <ValidatedField label="Smtp Ssl" id="groups-smtpSsl" name="smtpSsl" data-cy="smtpSsl" check type="checkbox" />
              <ValidatedField label="Imap Server" id="groups-imapServer" name="imapServer" data-cy="imapServer" type="text" />
              <ValidatedField label="Imap Port" id="groups-imapPort" name="imapPort" data-cy="imapPort" type="text" />
              <ValidatedField label="Imap Ssl" id="groups-imapSsl" name="imapSsl" data-cy="imapSsl" check type="checkbox" />
              <ValidatedField
                label="Imap Mailbox Name"
                id="groups-imapMailboxName"
                name="imapMailboxName"
                data-cy="imapMailboxName"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Imap Uid Validity"
                id="groups-imapUidValidity"
                name="imapUidValidity"
                data-cy="imapUidValidity"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Imap Last Uid"
                id="groups-imapLastUid"
                name="imapLastUid"
                data-cy="imapLastUid"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Email Username" id="groups-emailUsername" name="emailUsername" data-cy="emailUsername" type="text" />
              <ValidatedField label="Email Password" id="groups-emailPassword" name="emailPassword" data-cy="emailPassword" type="text" />
              <ValidatedField
                label="Publish Read State"
                id="groups-publishReadState"
                name="publishReadState"
                data-cy="publishReadState"
                check
                type="checkbox"
              />
              <ValidatedField
                label="Members Visibility Level"
                id="groups-membersVisibilityLevel"
                name="membersVisibilityLevel"
                data-cy="membersVisibilityLevel"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Imap Last Error" id="groups-imapLastError" name="imapLastError" data-cy="imapLastError" type="text" />
              <ValidatedField label="Imap Old Emails" id="groups-imapOldEmails" name="imapOldEmails" data-cy="imapOldEmails" type="text" />
              <ValidatedField label="Imap New Emails" id="groups-imapNewEmails" name="imapNewEmails" data-cy="imapNewEmails" type="text" />
              <ValidatedField label="Flair Icon" id="groups-flairIcon" name="flairIcon" data-cy="flairIcon" type="text" />
              <ValidatedField label="Flair Upload Id" id="groups-flairUploadId" name="flairUploadId" data-cy="flairUploadId" type="text" />
              <ValidatedField
                label="Allow Unknown Sender Topic Replies"
                id="groups-allowUnknownSenderTopicReplies"
                name="allowUnknownSenderTopicReplies"
                data-cy="allowUnknownSenderTopicReplies"
                check
                type="checkbox"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/groups" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">Back</span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp; Save
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default GroupsUpdate;
