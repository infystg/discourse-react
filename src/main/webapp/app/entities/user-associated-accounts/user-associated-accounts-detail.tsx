import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './user-associated-accounts.reducer';

export const UserAssociatedAccountsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const userAssociatedAccountsEntity = useAppSelector(state => state.userAssociatedAccounts.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="userAssociatedAccountsDetailsHeading">UserAssociatedAccounts</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{userAssociatedAccountsEntity.id}</dd>
          <dt>
            <span id="providerName">Provider Name</span>
          </dt>
          <dd>{userAssociatedAccountsEntity.providerName}</dd>
          <dt>
            <span id="providerUid">Provider Uid</span>
          </dt>
          <dd>{userAssociatedAccountsEntity.providerUid}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{userAssociatedAccountsEntity.userId}</dd>
          <dt>
            <span id="lastUsed">Last Used</span>
          </dt>
          <dd>
            {userAssociatedAccountsEntity.lastUsed ? (
              <TextFormat value={userAssociatedAccountsEntity.lastUsed} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="info">Info</span>
          </dt>
          <dd>{userAssociatedAccountsEntity.info}</dd>
          <dt>
            <span id="credentials">Credentials</span>
          </dt>
          <dd>{userAssociatedAccountsEntity.credentials}</dd>
          <dt>
            <span id="extra">Extra</span>
          </dt>
          <dd>{userAssociatedAccountsEntity.extra}</dd>
        </dl>
        <Button tag={Link} to="/user-associated-accounts" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/user-associated-accounts/${userAssociatedAccountsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default UserAssociatedAccountsDetail;
