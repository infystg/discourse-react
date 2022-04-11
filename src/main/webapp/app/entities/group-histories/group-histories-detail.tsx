import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './group-histories.reducer';

export const GroupHistoriesDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const groupHistoriesEntity = useAppSelector(state => state.groupHistories.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="groupHistoriesDetailsHeading">GroupHistories</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{groupHistoriesEntity.id}</dd>
          <dt>
            <span id="groupId">Group Id</span>
          </dt>
          <dd>{groupHistoriesEntity.groupId}</dd>
          <dt>
            <span id="actingUserId">Acting User Id</span>
          </dt>
          <dd>{groupHistoriesEntity.actingUserId}</dd>
          <dt>
            <span id="targetUserId">Target User Id</span>
          </dt>
          <dd>{groupHistoriesEntity.targetUserId}</dd>
          <dt>
            <span id="action">Action</span>
          </dt>
          <dd>{groupHistoriesEntity.action}</dd>
          <dt>
            <span id="subject">Subject</span>
          </dt>
          <dd>{groupHistoriesEntity.subject}</dd>
          <dt>
            <span id="prevValue">Prev Value</span>
          </dt>
          <dd>{groupHistoriesEntity.prevValue}</dd>
          <dt>
            <span id="newValue">New Value</span>
          </dt>
          <dd>{groupHistoriesEntity.newValue}</dd>
          <dt>
            <span id="updatedAt">Updated At</span>
          </dt>
          <dd>
            {groupHistoriesEntity.updatedAt ? (
              <TextFormat value={groupHistoriesEntity.updatedAt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
        </dl>
        <Button tag={Link} to="/group-histories" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/group-histories/${groupHistoriesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default GroupHistoriesDetail;
