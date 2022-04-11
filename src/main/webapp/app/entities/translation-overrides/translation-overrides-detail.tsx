import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './translation-overrides.reducer';

export const TranslationOverridesDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const translationOverridesEntity = useAppSelector(state => state.translationOverrides.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="translationOverridesDetailsHeading">TranslationOverrides</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{translationOverridesEntity.id}</dd>
          <dt>
            <span id="locale">Locale</span>
          </dt>
          <dd>{translationOverridesEntity.locale}</dd>
          <dt>
            <span id="translationKey">Translation Key</span>
          </dt>
          <dd>{translationOverridesEntity.translationKey}</dd>
          <dt>
            <span id="value">Value</span>
          </dt>
          <dd>{translationOverridesEntity.value}</dd>
          <dt>
            <span id="compiledJs">Compiled Js</span>
          </dt>
          <dd>{translationOverridesEntity.compiledJs}</dd>
        </dl>
        <Button tag={Link} to="/translation-overrides" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/translation-overrides/${translationOverridesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default TranslationOverridesDetail;
