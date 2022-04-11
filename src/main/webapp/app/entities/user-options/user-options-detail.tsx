import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './user-options.reducer';

export const UserOptionsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const userOptionsEntity = useAppSelector(state => state.userOptions.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="userOptionsDetailsHeading">UserOptions</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{userOptionsEntity.id}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{userOptionsEntity.userId}</dd>
          <dt>
            <span id="mailingListMode">Mailing List Mode</span>
          </dt>
          <dd>{userOptionsEntity.mailingListMode ? 'true' : 'false'}</dd>
          <dt>
            <span id="emailDigests">Email Digests</span>
          </dt>
          <dd>{userOptionsEntity.emailDigests ? 'true' : 'false'}</dd>
          <dt>
            <span id="externalLinksInNewTab">External Links In New Tab</span>
          </dt>
          <dd>{userOptionsEntity.externalLinksInNewTab ? 'true' : 'false'}</dd>
          <dt>
            <span id="enableQuoting">Enable Quoting</span>
          </dt>
          <dd>{userOptionsEntity.enableQuoting ? 'true' : 'false'}</dd>
          <dt>
            <span id="dynamicFavicon">Dynamic Favicon</span>
          </dt>
          <dd>{userOptionsEntity.dynamicFavicon ? 'true' : 'false'}</dd>
          <dt>
            <span id="disableJumpReply">Disable Jump Reply</span>
          </dt>
          <dd>{userOptionsEntity.disableJumpReply ? 'true' : 'false'}</dd>
          <dt>
            <span id="automaticallyUnpinTopics">Automatically Unpin Topics</span>
          </dt>
          <dd>{userOptionsEntity.automaticallyUnpinTopics ? 'true' : 'false'}</dd>
          <dt>
            <span id="digestAfterMinutes">Digest After Minutes</span>
          </dt>
          <dd>{userOptionsEntity.digestAfterMinutes}</dd>
          <dt>
            <span id="autoTrackTopicsAfterMsecs">Auto Track Topics After Msecs</span>
          </dt>
          <dd>{userOptionsEntity.autoTrackTopicsAfterMsecs}</dd>
          <dt>
            <span id="newTopicDurationMinutes">New Topic Duration Minutes</span>
          </dt>
          <dd>{userOptionsEntity.newTopicDurationMinutes}</dd>
          <dt>
            <span id="lastRedirectedToTopAt">Last Redirected To Top At</span>
          </dt>
          <dd>
            {userOptionsEntity.lastRedirectedToTopAt ? (
              <TextFormat value={userOptionsEntity.lastRedirectedToTopAt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="emailPreviousReplies">Email Previous Replies</span>
          </dt>
          <dd>{userOptionsEntity.emailPreviousReplies}</dd>
          <dt>
            <span id="emailInReplyTo">Email In Reply To</span>
          </dt>
          <dd>{userOptionsEntity.emailInReplyTo ? 'true' : 'false'}</dd>
          <dt>
            <span id="likeNotificationFrequency">Like Notification Frequency</span>
          </dt>
          <dd>{userOptionsEntity.likeNotificationFrequency}</dd>
          <dt>
            <span id="mailingListModeFrequency">Mailing List Mode Frequency</span>
          </dt>
          <dd>{userOptionsEntity.mailingListModeFrequency}</dd>
          <dt>
            <span id="includeTl0InDigests">Include Tl 0 In Digests</span>
          </dt>
          <dd>{userOptionsEntity.includeTl0InDigests ? 'true' : 'false'}</dd>
          <dt>
            <span id="notificationLevelWhenReplying">Notification Level When Replying</span>
          </dt>
          <dd>{userOptionsEntity.notificationLevelWhenReplying}</dd>
          <dt>
            <span id="themeKeySeq">Theme Key Seq</span>
          </dt>
          <dd>{userOptionsEntity.themeKeySeq}</dd>
          <dt>
            <span id="allowPrivateMessages">Allow Private Messages</span>
          </dt>
          <dd>{userOptionsEntity.allowPrivateMessages ? 'true' : 'false'}</dd>
          <dt>
            <span id="homepageId">Homepage Id</span>
          </dt>
          <dd>{userOptionsEntity.homepageId}</dd>
          <dt>
            <span id="themeIds">Theme Ids</span>
          </dt>
          <dd>{userOptionsEntity.themeIds}</dd>
          <dt>
            <span id="hideProfileAndPresence">Hide Profile And Presence</span>
          </dt>
          <dd>{userOptionsEntity.hideProfileAndPresence ? 'true' : 'false'}</dd>
          <dt>
            <span id="textSizeKey">Text Size Key</span>
          </dt>
          <dd>{userOptionsEntity.textSizeKey}</dd>
          <dt>
            <span id="textSizeSeq">Text Size Seq</span>
          </dt>
          <dd>{userOptionsEntity.textSizeSeq}</dd>
          <dt>
            <span id="emailLevel">Email Level</span>
          </dt>
          <dd>{userOptionsEntity.emailLevel}</dd>
          <dt>
            <span id="emailMessagesLevel">Email Messages Level</span>
          </dt>
          <dd>{userOptionsEntity.emailMessagesLevel}</dd>
          <dt>
            <span id="titleCountModeKey">Title Count Mode Key</span>
          </dt>
          <dd>{userOptionsEntity.titleCountModeKey}</dd>
          <dt>
            <span id="enableDefer">Enable Defer</span>
          </dt>
          <dd>{userOptionsEntity.enableDefer ? 'true' : 'false'}</dd>
          <dt>
            <span id="timezone">Timezone</span>
          </dt>
          <dd>{userOptionsEntity.timezone}</dd>
          <dt>
            <span id="enableAllowedPmUsers">Enable Allowed Pm Users</span>
          </dt>
          <dd>{userOptionsEntity.enableAllowedPmUsers ? 'true' : 'false'}</dd>
          <dt>
            <span id="darkSchemeId">Dark Scheme Id</span>
          </dt>
          <dd>{userOptionsEntity.darkSchemeId}</dd>
          <dt>
            <span id="skipNewUserTips">Skip New User Tips</span>
          </dt>
          <dd>{userOptionsEntity.skipNewUserTips ? 'true' : 'false'}</dd>
          <dt>
            <span id="colorSchemeId">Color Scheme Id</span>
          </dt>
          <dd>{userOptionsEntity.colorSchemeId}</dd>
        </dl>
        <Button tag={Link} to="/user-options" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/user-options/${userOptionsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default UserOptionsDetail;
