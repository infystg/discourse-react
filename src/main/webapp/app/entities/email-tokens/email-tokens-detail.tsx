import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './email-tokens.reducer';

export const EmailTokensDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const emailTokensEntity = useAppSelector(state => state.emailTokens.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="emailTokensDetailsHeading">EmailTokens</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{emailTokensEntity.id}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{emailTokensEntity.userId}</dd>
          <dt>
            <span id="email">Email</span>
          </dt>
          <dd>{emailTokensEntity.email}</dd>
          <dt>
            <span id="token">Token</span>
          </dt>
          <dd>{emailTokensEntity.token}</dd>
          <dt>
            <span id="confirmed">Confirmed</span>
          </dt>
          <dd>{emailTokensEntity.confirmed ? 'true' : 'false'}</dd>
          <dt>
            <span id="expired">Expired</span>
          </dt>
          <dd>{emailTokensEntity.expired ? 'true' : 'false'}</dd>
          <dt>
            <span id="updatedAt">Updated At</span>
          </dt>
          <dd>
            {emailTokensEntity.updatedAt ? <TextFormat value={emailTokensEntity.updatedAt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
        </dl>
        <Button tag={Link} to="/email-tokens" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/email-tokens/${emailTokensEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default EmailTokensDetail;
