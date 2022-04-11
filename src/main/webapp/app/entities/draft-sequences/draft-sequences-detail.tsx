import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './draft-sequences.reducer';

export const DraftSequencesDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const draftSequencesEntity = useAppSelector(state => state.draftSequences.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="draftSequencesDetailsHeading">DraftSequences</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{draftSequencesEntity.id}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{draftSequencesEntity.userId}</dd>
          <dt>
            <span id="draftKey">Draft Key</span>
          </dt>
          <dd>{draftSequencesEntity.draftKey}</dd>
          <dt>
            <span id="sequence">Sequence</span>
          </dt>
          <dd>{draftSequencesEntity.sequence}</dd>
        </dl>
        <Button tag={Link} to="/draft-sequences" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/draft-sequences/${draftSequencesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default DraftSequencesDetail;
