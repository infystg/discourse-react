import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './theme-translation-overrides.reducer';

export const ThemeTranslationOverridesDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const themeTranslationOverridesEntity = useAppSelector(state => state.themeTranslationOverrides.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="themeTranslationOverridesDetailsHeading">ThemeTranslationOverrides</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{themeTranslationOverridesEntity.id}</dd>
          <dt>
            <span id="themeId">Theme Id</span>
          </dt>
          <dd>{themeTranslationOverridesEntity.themeId}</dd>
          <dt>
            <span id="locale">Locale</span>
          </dt>
          <dd>{themeTranslationOverridesEntity.locale}</dd>
          <dt>
            <span id="translationKey">Translation Key</span>
          </dt>
          <dd>{themeTranslationOverridesEntity.translationKey}</dd>
          <dt>
            <span id="value">Value</span>
          </dt>
          <dd>{themeTranslationOverridesEntity.value}</dd>
        </dl>
        <Button tag={Link} to="/theme-translation-overrides" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/theme-translation-overrides/${themeTranslationOverridesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default ThemeTranslationOverridesDetail;
