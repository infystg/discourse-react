import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './screened-emails.reducer';

export const ScreenedEmailsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const screenedEmailsEntity = useAppSelector(state => state.screenedEmails.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="screenedEmailsDetailsHeading">ScreenedEmails</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{screenedEmailsEntity.id}</dd>
          <dt>
            <span id="email">Email</span>
          </dt>
          <dd>{screenedEmailsEntity.email}</dd>
          <dt>
            <span id="actionType">Action Type</span>
          </dt>
          <dd>{screenedEmailsEntity.actionType}</dd>
          <dt>
            <span id="matchCount">Match Count</span>
          </dt>
          <dd>{screenedEmailsEntity.matchCount}</dd>
          <dt>
            <span id="lastMatchAt">Last Match At</span>
          </dt>
          <dd>
            {screenedEmailsEntity.lastMatchAt ? (
              <TextFormat value={screenedEmailsEntity.lastMatchAt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="ipAddress">Ip Address</span>
          </dt>
          <dd>{screenedEmailsEntity.ipAddress}</dd>
        </dl>
        <Button tag={Link} to="/screened-emails" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/screened-emails/${screenedEmailsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default ScreenedEmailsDetail;
