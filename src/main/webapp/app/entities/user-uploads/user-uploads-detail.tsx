import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './user-uploads.reducer';

export const UserUploadsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const userUploadsEntity = useAppSelector(state => state.userUploads.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="userUploadsDetailsHeading">UserUploads</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{userUploadsEntity.id}</dd>
          <dt>
            <span id="uploadId">Upload Id</span>
          </dt>
          <dd>{userUploadsEntity.uploadId}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{userUploadsEntity.userId}</dd>
        </dl>
        <Button tag={Link} to="/user-uploads" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/user-uploads/${userUploadsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default UserUploadsDetail;
