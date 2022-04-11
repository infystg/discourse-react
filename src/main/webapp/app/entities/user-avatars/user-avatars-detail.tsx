import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './user-avatars.reducer';

export const UserAvatarsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const userAvatarsEntity = useAppSelector(state => state.userAvatars.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="userAvatarsDetailsHeading">UserAvatars</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{userAvatarsEntity.id}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{userAvatarsEntity.userId}</dd>
          <dt>
            <span id="customUploadId">Custom Upload Id</span>
          </dt>
          <dd>{userAvatarsEntity.customUploadId}</dd>
          <dt>
            <span id="gravatarUploadId">Gravatar Upload Id</span>
          </dt>
          <dd>{userAvatarsEntity.gravatarUploadId}</dd>
          <dt>
            <span id="lastGravatarDownloadAttempt">Last Gravatar Download Attempt</span>
          </dt>
          <dd>
            {userAvatarsEntity.lastGravatarDownloadAttempt ? (
              <TextFormat value={userAvatarsEntity.lastGravatarDownloadAttempt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="updatedAt">Updated At</span>
          </dt>
          <dd>
            {userAvatarsEntity.updatedAt ? <TextFormat value={userAvatarsEntity.updatedAt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
        </dl>
        <Button tag={Link} to="/user-avatars" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/user-avatars/${userAvatarsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default UserAvatarsDetail;
