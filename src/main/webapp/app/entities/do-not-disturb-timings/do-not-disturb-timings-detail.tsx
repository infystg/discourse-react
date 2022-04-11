import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './do-not-disturb-timings.reducer';

export const DoNotDisturbTimingsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const doNotDisturbTimingsEntity = useAppSelector(state => state.doNotDisturbTimings.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="doNotDisturbTimingsDetailsHeading">DoNotDisturbTimings</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{doNotDisturbTimingsEntity.id}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{doNotDisturbTimingsEntity.userId}</dd>
          <dt>
            <span id="startsAt">Starts At</span>
          </dt>
          <dd>
            {doNotDisturbTimingsEntity.startsAt ? (
              <TextFormat value={doNotDisturbTimingsEntity.startsAt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="endsAt">Ends At</span>
          </dt>
          <dd>
            {doNotDisturbTimingsEntity.endsAt ? (
              <TextFormat value={doNotDisturbTimingsEntity.endsAt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="scheduled">Scheduled</span>
          </dt>
          <dd>{doNotDisturbTimingsEntity.scheduled ? 'true' : 'false'}</dd>
        </dl>
        <Button tag={Link} to="/do-not-disturb-timings" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/do-not-disturb-timings/${doNotDisturbTimingsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default DoNotDisturbTimingsDetail;
