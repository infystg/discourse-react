import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './user-second-factors.reducer';

export const UserSecondFactorsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const userSecondFactorsEntity = useAppSelector(state => state.userSecondFactors.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="userSecondFactorsDetailsHeading">UserSecondFactors</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{userSecondFactorsEntity.id}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{userSecondFactorsEntity.userId}</dd>
          <dt>
            <span id="method">Method</span>
          </dt>
          <dd>{userSecondFactorsEntity.method}</dd>
          <dt>
            <span id="data">Data</span>
          </dt>
          <dd>{userSecondFactorsEntity.data}</dd>
          <dt>
            <span id="enabled">Enabled</span>
          </dt>
          <dd>{userSecondFactorsEntity.enabled ? 'true' : 'false'}</dd>
          <dt>
            <span id="lastUsed">Last Used</span>
          </dt>
          <dd>
            {userSecondFactorsEntity.lastUsed ? (
              <TextFormat value={userSecondFactorsEntity.lastUsed} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{userSecondFactorsEntity.name}</dd>
        </dl>
        <Button tag={Link} to="/user-second-factors" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/user-second-factors/${userSecondFactorsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default UserSecondFactorsDetail;
