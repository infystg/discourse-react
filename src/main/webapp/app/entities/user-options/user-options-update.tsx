import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUserOptions } from 'app/shared/model/user-options.model';
import { getEntity, updateEntity, createEntity, reset } from './user-options.reducer';

export const UserOptionsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const userOptionsEntity = useAppSelector(state => state.userOptions.entity);
  const loading = useAppSelector(state => state.userOptions.loading);
  const updating = useAppSelector(state => state.userOptions.updating);
  const updateSuccess = useAppSelector(state => state.userOptions.updateSuccess);
  const handleClose = () => {
    props.history.push('/user-options' + props.location.search);
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
    values.lastRedirectedToTopAt = convertDateTimeToServer(values.lastRedirectedToTopAt);

    const entity = {
      ...userOptionsEntity,
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
      ? {
          lastRedirectedToTopAt: displayDefaultDateTime(),
        }
      : {
          ...userOptionsEntity,
          lastRedirectedToTopAt: convertDateTimeFromServer(userOptionsEntity.lastRedirectedToTopAt),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.userOptions.home.createOrEditLabel" data-cy="UserOptionsCreateUpdateHeading">
            Create or edit a UserOptions
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="user-options-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="User Id"
                id="user-options-userId"
                name="userId"
                data-cy="userId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Mailing List Mode"
                id="user-options-mailingListMode"
                name="mailingListMode"
                data-cy="mailingListMode"
                check
                type="checkbox"
              />
              <ValidatedField
                label="Email Digests"
                id="user-options-emailDigests"
                name="emailDigests"
                data-cy="emailDigests"
                check
                type="checkbox"
              />
              <ValidatedField
                label="External Links In New Tab"
                id="user-options-externalLinksInNewTab"
                name="externalLinksInNewTab"
                data-cy="externalLinksInNewTab"
                check
                type="checkbox"
              />
              <ValidatedField
                label="Enable Quoting"
                id="user-options-enableQuoting"
                name="enableQuoting"
                data-cy="enableQuoting"
                check
                type="checkbox"
              />
              <ValidatedField
                label="Dynamic Favicon"
                id="user-options-dynamicFavicon"
                name="dynamicFavicon"
                data-cy="dynamicFavicon"
                check
                type="checkbox"
              />
              <ValidatedField
                label="Disable Jump Reply"
                id="user-options-disableJumpReply"
                name="disableJumpReply"
                data-cy="disableJumpReply"
                check
                type="checkbox"
              />
              <ValidatedField
                label="Automatically Unpin Topics"
                id="user-options-automaticallyUnpinTopics"
                name="automaticallyUnpinTopics"
                data-cy="automaticallyUnpinTopics"
                check
                type="checkbox"
              />
              <ValidatedField
                label="Digest After Minutes"
                id="user-options-digestAfterMinutes"
                name="digestAfterMinutes"
                data-cy="digestAfterMinutes"
                type="text"
              />
              <ValidatedField
                label="Auto Track Topics After Msecs"
                id="user-options-autoTrackTopicsAfterMsecs"
                name="autoTrackTopicsAfterMsecs"
                data-cy="autoTrackTopicsAfterMsecs"
                type="text"
              />
              <ValidatedField
                label="New Topic Duration Minutes"
                id="user-options-newTopicDurationMinutes"
                name="newTopicDurationMinutes"
                data-cy="newTopicDurationMinutes"
                type="text"
              />
              <ValidatedField
                label="Last Redirected To Top At"
                id="user-options-lastRedirectedToTopAt"
                name="lastRedirectedToTopAt"
                data-cy="lastRedirectedToTopAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Email Previous Replies"
                id="user-options-emailPreviousReplies"
                name="emailPreviousReplies"
                data-cy="emailPreviousReplies"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Email In Reply To"
                id="user-options-emailInReplyTo"
                name="emailInReplyTo"
                data-cy="emailInReplyTo"
                check
                type="checkbox"
              />
              <ValidatedField
                label="Like Notification Frequency"
                id="user-options-likeNotificationFrequency"
                name="likeNotificationFrequency"
                data-cy="likeNotificationFrequency"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Mailing List Mode Frequency"
                id="user-options-mailingListModeFrequency"
                name="mailingListModeFrequency"
                data-cy="mailingListModeFrequency"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Include Tl 0 In Digests"
                id="user-options-includeTl0InDigests"
                name="includeTl0InDigests"
                data-cy="includeTl0InDigests"
                check
                type="checkbox"
              />
              <ValidatedField
                label="Notification Level When Replying"
                id="user-options-notificationLevelWhenReplying"
                name="notificationLevelWhenReplying"
                data-cy="notificationLevelWhenReplying"
                type="text"
              />
              <ValidatedField
                label="Theme Key Seq"
                id="user-options-themeKeySeq"
                name="themeKeySeq"
                data-cy="themeKeySeq"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Allow Private Messages"
                id="user-options-allowPrivateMessages"
                name="allowPrivateMessages"
                data-cy="allowPrivateMessages"
                check
                type="checkbox"
              />
              <ValidatedField label="Homepage Id" id="user-options-homepageId" name="homepageId" data-cy="homepageId" type="text" />
              <ValidatedField
                label="Theme Ids"
                id="user-options-themeIds"
                name="themeIds"
                data-cy="themeIds"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Hide Profile And Presence"
                id="user-options-hideProfileAndPresence"
                name="hideProfileAndPresence"
                data-cy="hideProfileAndPresence"
                check
                type="checkbox"
              />
              <ValidatedField
                label="Text Size Key"
                id="user-options-textSizeKey"
                name="textSizeKey"
                data-cy="textSizeKey"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Text Size Seq"
                id="user-options-textSizeSeq"
                name="textSizeSeq"
                data-cy="textSizeSeq"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Email Level"
                id="user-options-emailLevel"
                name="emailLevel"
                data-cy="emailLevel"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Email Messages Level"
                id="user-options-emailMessagesLevel"
                name="emailMessagesLevel"
                data-cy="emailMessagesLevel"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Title Count Mode Key"
                id="user-options-titleCountModeKey"
                name="titleCountModeKey"
                data-cy="titleCountModeKey"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Enable Defer"
                id="user-options-enableDefer"
                name="enableDefer"
                data-cy="enableDefer"
                check
                type="checkbox"
              />
              <ValidatedField label="Timezone" id="user-options-timezone" name="timezone" data-cy="timezone" type="text" />
              <ValidatedField
                label="Enable Allowed Pm Users"
                id="user-options-enableAllowedPmUsers"
                name="enableAllowedPmUsers"
                data-cy="enableAllowedPmUsers"
                check
                type="checkbox"
              />
              <ValidatedField
                label="Dark Scheme Id"
                id="user-options-darkSchemeId"
                name="darkSchemeId"
                data-cy="darkSchemeId"
                type="text"
              />
              <ValidatedField
                label="Skip New User Tips"
                id="user-options-skipNewUserTips"
                name="skipNewUserTips"
                data-cy="skipNewUserTips"
                check
                type="checkbox"
              />
              <ValidatedField
                label="Color Scheme Id"
                id="user-options-colorSchemeId"
                name="colorSchemeId"
                data-cy="colorSchemeId"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/user-options" replace color="info">
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

export default UserOptionsUpdate;
