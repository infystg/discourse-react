import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './oauth-2-user-infos.reducer';

export const Oauth2UserInfosDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const oauth2UserInfosEntity = useAppSelector(state => state.oauth2UserInfos.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="oauth2UserInfosDetailsHeading">Oauth2UserInfos</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{oauth2UserInfosEntity.id}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{oauth2UserInfosEntity.userId}</dd>
          <dt>
            <span id="uid">Uid</span>
          </dt>
          <dd>{oauth2UserInfosEntity.uid}</dd>
          <dt>
            <span id="provider">Provider</span>
          </dt>
          <dd>{oauth2UserInfosEntity.provider}</dd>
          <dt>
            <span id="email">Email</span>
          </dt>
          <dd>{oauth2UserInfosEntity.email}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{oauth2UserInfosEntity.name}</dd>
          <dt>
            <span id="updatedAt">Updated At</span>
          </dt>
          <dd>
            {oauth2UserInfosEntity.updatedAt ? (
              <TextFormat value={oauth2UserInfosEntity.updatedAt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
        </dl>
        <Button tag={Link} to="/oauth-2-user-infos" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/oauth-2-user-infos/${oauth2UserInfosEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default Oauth2UserInfosDetail;
