import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './scheduler-stats.reducer';

export const SchedulerStatsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const schedulerStatsEntity = useAppSelector(state => state.schedulerStats.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="schedulerStatsDetailsHeading">SchedulerStats</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{schedulerStatsEntity.id}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{schedulerStatsEntity.name}</dd>
          <dt>
            <span id="hostname">Hostname</span>
          </dt>
          <dd>{schedulerStatsEntity.hostname}</dd>
          <dt>
            <span id="pid">Pid</span>
          </dt>
          <dd>{schedulerStatsEntity.pid}</dd>
          <dt>
            <span id="durationMs">Duration Ms</span>
          </dt>
          <dd>{schedulerStatsEntity.durationMs}</dd>
          <dt>
            <span id="liveSlotsStart">Live Slots Start</span>
          </dt>
          <dd>{schedulerStatsEntity.liveSlotsStart}</dd>
          <dt>
            <span id="liveSlotsFinish">Live Slots Finish</span>
          </dt>
          <dd>{schedulerStatsEntity.liveSlotsFinish}</dd>
          <dt>
            <span id="startedAt">Started At</span>
          </dt>
          <dd>
            {schedulerStatsEntity.startedAt ? (
              <TextFormat value={schedulerStatsEntity.startedAt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="success">Success</span>
          </dt>
          <dd>{schedulerStatsEntity.success ? 'true' : 'false'}</dd>
          <dt>
            <span id="error">Error</span>
          </dt>
          <dd>{schedulerStatsEntity.error}</dd>
        </dl>
        <Button tag={Link} to="/scheduler-stats" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/scheduler-stats/${schedulerStatsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default SchedulerStatsDetail;
