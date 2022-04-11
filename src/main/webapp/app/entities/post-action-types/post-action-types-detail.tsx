import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './post-action-types.reducer';

export const PostActionTypesDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const postActionTypesEntity = useAppSelector(state => state.postActionTypes.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="postActionTypesDetailsHeading">PostActionTypes</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{postActionTypesEntity.id}</dd>
          <dt>
            <span id="nameKey">Name Key</span>
          </dt>
          <dd>{postActionTypesEntity.nameKey}</dd>
          <dt>
            <span id="isFlag">Is Flag</span>
          </dt>
          <dd>{postActionTypesEntity.isFlag ? 'true' : 'false'}</dd>
          <dt>
            <span id="icon">Icon</span>
          </dt>
          <dd>{postActionTypesEntity.icon}</dd>
          <dt>
            <span id="position">Position</span>
          </dt>
          <dd>{postActionTypesEntity.position}</dd>
          <dt>
            <span id="scoreBonus">Score Bonus</span>
          </dt>
          <dd>{postActionTypesEntity.scoreBonus}</dd>
          <dt>
            <span id="reviewablePriority">Reviewable Priority</span>
          </dt>
          <dd>{postActionTypesEntity.reviewablePriority}</dd>
        </dl>
        <Button tag={Link} to="/post-action-types" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/post-action-types/${postActionTypesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default PostActionTypesDetail;
