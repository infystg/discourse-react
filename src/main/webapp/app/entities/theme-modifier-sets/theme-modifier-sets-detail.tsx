import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './theme-modifier-sets.reducer';

export const ThemeModifierSetsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const themeModifierSetsEntity = useAppSelector(state => state.themeModifierSets.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="themeModifierSetsDetailsHeading">ThemeModifierSets</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{themeModifierSetsEntity.id}</dd>
          <dt>
            <span id="themeId">Theme Id</span>
          </dt>
          <dd>{themeModifierSetsEntity.themeId}</dd>
          <dt>
            <span id="serializeTopicExcerpts">Serialize Topic Excerpts</span>
          </dt>
          <dd>{themeModifierSetsEntity.serializeTopicExcerpts ? 'true' : 'false'}</dd>
          <dt>
            <span id="cspExtensions">Csp Extensions</span>
          </dt>
          <dd>{themeModifierSetsEntity.cspExtensions}</dd>
          <dt>
            <span id="svgIcons">Svg Icons</span>
          </dt>
          <dd>{themeModifierSetsEntity.svgIcons}</dd>
          <dt>
            <span id="topicThumbnailSizes">Topic Thumbnail Sizes</span>
          </dt>
          <dd>{themeModifierSetsEntity.topicThumbnailSizes}</dd>
        </dl>
        <Button tag={Link} to="/theme-modifier-sets" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/theme-modifier-sets/${themeModifierSetsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default ThemeModifierSetsDetail;
