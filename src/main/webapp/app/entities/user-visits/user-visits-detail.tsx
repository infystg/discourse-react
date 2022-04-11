import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './user-visits.reducer';

export const UserVisitsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const userVisitsEntity = useAppSelector(state => state.userVisits.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="userVisitsDetailsHeading">UserVisits</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{userVisitsEntity.id}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{userVisitsEntity.userId}</dd>
          <dt>
            <span id="visitedAt">Visited At</span>
          </dt>
          <dd>
            {userVisitsEntity.visitedAt ? (
              <TextFormat value={userVisitsEntity.visitedAt} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="postsRead">Posts Read</span>
          </dt>
          <dd>{userVisitsEntity.postsRead}</dd>
          <dt>
            <span id="mobile">Mobile</span>
          </dt>
          <dd>{userVisitsEntity.mobile ? 'true' : 'false'}</dd>
          <dt>
            <span id="timeRead">Time Read</span>
          </dt>
          <dd>{userVisitsEntity.timeRead}</dd>
        </dl>
        <Button tag={Link} to="/user-visits" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/user-visits/${userVisitsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default UserVisitsDetail;
