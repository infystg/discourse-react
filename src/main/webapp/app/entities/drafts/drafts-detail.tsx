import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './drafts.reducer';

export const DraftsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const draftsEntity = useAppSelector(state => state.drafts.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="draftsDetailsHeading">Drafts</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{draftsEntity.id}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{draftsEntity.userId}</dd>
          <dt>
            <span id="draftKey">Draft Key</span>
          </dt>
          <dd>{draftsEntity.draftKey}</dd>
          <dt>
            <span id="data">Data</span>
          </dt>
          <dd>{draftsEntity.data}</dd>
          <dt>
            <span id="sequence">Sequence</span>
          </dt>
          <dd>{draftsEntity.sequence}</dd>
          <dt>
            <span id="revisions">Revisions</span>
          </dt>
          <dd>{draftsEntity.revisions}</dd>
          <dt>
            <span id="owner">Owner</span>
          </dt>
          <dd>{draftsEntity.owner}</dd>
        </dl>
        <Button tag={Link} to="/drafts" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/drafts/${draftsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default DraftsDetail;
