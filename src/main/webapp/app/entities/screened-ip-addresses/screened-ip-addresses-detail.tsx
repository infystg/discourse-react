import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './screened-ip-addresses.reducer';

export const ScreenedIpAddressesDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const screenedIpAddressesEntity = useAppSelector(state => state.screenedIpAddresses.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="screenedIpAddressesDetailsHeading">ScreenedIpAddresses</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{screenedIpAddressesEntity.id}</dd>
          <dt>
            <span id="ipAddress">Ip Address</span>
          </dt>
          <dd>{screenedIpAddressesEntity.ipAddress}</dd>
          <dt>
            <span id="actionType">Action Type</span>
          </dt>
          <dd>{screenedIpAddressesEntity.actionType}</dd>
          <dt>
            <span id="matchCount">Match Count</span>
          </dt>
          <dd>{screenedIpAddressesEntity.matchCount}</dd>
          <dt>
            <span id="lastMatchAt">Last Match At</span>
          </dt>
          <dd>
            {screenedIpAddressesEntity.lastMatchAt ? (
              <TextFormat value={screenedIpAddressesEntity.lastMatchAt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
        </dl>
        <Button tag={Link} to="/screened-ip-addresses" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/screened-ip-addresses/${screenedIpAddressesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default ScreenedIpAddressesDetail;
