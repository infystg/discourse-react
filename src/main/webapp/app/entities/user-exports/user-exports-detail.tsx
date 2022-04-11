import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './user-exports.reducer';

export const UserExportsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const userExportsEntity = useAppSelector(state => state.userExports.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="userExportsDetailsHeading">UserExports</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{userExportsEntity.id}</dd>
          <dt>
            <span id="fileName">File Name</span>
          </dt>
          <dd>{userExportsEntity.fileName}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{userExportsEntity.userId}</dd>
          <dt>
            <span id="uploadId">Upload Id</span>
          </dt>
          <dd>{userExportsEntity.uploadId}</dd>
          <dt>
            <span id="topicId">Topic Id</span>
          </dt>
          <dd>{userExportsEntity.topicId}</dd>
        </dl>
        <Button tag={Link} to="/user-exports" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/user-exports/${userExportsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default UserExportsDetail;
