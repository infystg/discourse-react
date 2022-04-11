import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './plugin-store-rows.reducer';

export const PluginStoreRowsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const pluginStoreRowsEntity = useAppSelector(state => state.pluginStoreRows.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="pluginStoreRowsDetailsHeading">PluginStoreRows</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{pluginStoreRowsEntity.id}</dd>
          <dt>
            <span id="pluginName">Plugin Name</span>
          </dt>
          <dd>{pluginStoreRowsEntity.pluginName}</dd>
          <dt>
            <span id="key">Key</span>
          </dt>
          <dd>{pluginStoreRowsEntity.key}</dd>
          <dt>
            <span id="typeName">Type Name</span>
          </dt>
          <dd>{pluginStoreRowsEntity.typeName}</dd>
          <dt>
            <span id="value">Value</span>
          </dt>
          <dd>{pluginStoreRowsEntity.value}</dd>
        </dl>
        <Button tag={Link} to="/plugin-store-rows" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/plugin-store-rows/${pluginStoreRowsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default PluginStoreRowsDetail;
