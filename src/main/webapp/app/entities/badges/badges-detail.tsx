import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './badges.reducer';

export const BadgesDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const badgesEntity = useAppSelector(state => state.badges.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="badgesDetailsHeading">Badges</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{badgesEntity.id}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{badgesEntity.name}</dd>
          <dt>
            <span id="description">Description</span>
          </dt>
          <dd>{badgesEntity.description}</dd>
          <dt>
            <span id="badgeTypeId">Badge Type Id</span>
          </dt>
          <dd>{badgesEntity.badgeTypeId}</dd>
          <dt>
            <span id="grantCount">Grant Count</span>
          </dt>
          <dd>{badgesEntity.grantCount}</dd>
          <dt>
            <span id="allowTitle">Allow Title</span>
          </dt>
          <dd>{badgesEntity.allowTitle ? 'true' : 'false'}</dd>
          <dt>
            <span id="multipleGrant">Multiple Grant</span>
          </dt>
          <dd>{badgesEntity.multipleGrant ? 'true' : 'false'}</dd>
          <dt>
            <span id="icon">Icon</span>
          </dt>
          <dd>{badgesEntity.icon}</dd>
          <dt>
            <span id="listable">Listable</span>
          </dt>
          <dd>{badgesEntity.listable ? 'true' : 'false'}</dd>
          <dt>
            <span id="targetPosts">Target Posts</span>
          </dt>
          <dd>{badgesEntity.targetPosts ? 'true' : 'false'}</dd>
          <dt>
            <span id="query">Query</span>
          </dt>
          <dd>{badgesEntity.query}</dd>
          <dt>
            <span id="enabled">Enabled</span>
          </dt>
          <dd>{badgesEntity.enabled ? 'true' : 'false'}</dd>
          <dt>
            <span id="autoRevoke">Auto Revoke</span>
          </dt>
          <dd>{badgesEntity.autoRevoke ? 'true' : 'false'}</dd>
          <dt>
            <span id="badgeGroupingId">Badge Grouping Id</span>
          </dt>
          <dd>{badgesEntity.badgeGroupingId}</dd>
          <dt>
            <span id="trigger">Trigger</span>
          </dt>
          <dd>{badgesEntity.trigger}</dd>
          <dt>
            <span id="showPosts">Show Posts</span>
          </dt>
          <dd>{badgesEntity.showPosts ? 'true' : 'false'}</dd>
          <dt>
            <span id="system">System</span>
          </dt>
          <dd>{badgesEntity.system ? 'true' : 'false'}</dd>
          <dt>
            <span id="image">Image</span>
          </dt>
          <dd>{badgesEntity.image}</dd>
          <dt>
            <span id="longDescription">Long Description</span>
          </dt>
          <dd>{badgesEntity.longDescription}</dd>
          <dt>
            <span id="imageUploadId">Image Upload Id</span>
          </dt>
          <dd>{badgesEntity.imageUploadId}</dd>
          <dt>User Profiles</dt>
          <dd>{badgesEntity.userProfiles ? badgesEntity.userProfiles.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/badges" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/badges/${badgesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default BadgesDetail;
