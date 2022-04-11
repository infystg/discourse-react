import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IThemeModifierSets } from 'app/shared/model/theme-modifier-sets.model';
import { getEntity, updateEntity, createEntity, reset } from './theme-modifier-sets.reducer';

export const ThemeModifierSetsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const themeModifierSetsEntity = useAppSelector(state => state.themeModifierSets.entity);
  const loading = useAppSelector(state => state.themeModifierSets.loading);
  const updating = useAppSelector(state => state.themeModifierSets.updating);
  const updateSuccess = useAppSelector(state => state.themeModifierSets.updateSuccess);
  const handleClose = () => {
    props.history.push('/theme-modifier-sets' + props.location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(props.match.params.id));
    }
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...themeModifierSetsEntity,
      ...values,
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          ...themeModifierSetsEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.themeModifierSets.home.createOrEditLabel" data-cy="ThemeModifierSetsCreateUpdateHeading">
            Create or edit a ThemeModifierSets
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? (
                <ValidatedField name="id" required readOnly id="theme-modifier-sets-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Theme Id"
                id="theme-modifier-sets-themeId"
                name="themeId"
                data-cy="themeId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Serialize Topic Excerpts"
                id="theme-modifier-sets-serializeTopicExcerpts"
                name="serializeTopicExcerpts"
                data-cy="serializeTopicExcerpts"
                check
                type="checkbox"
              />
              <ValidatedField
                label="Csp Extensions"
                id="theme-modifier-sets-cspExtensions"
                name="cspExtensions"
                data-cy="cspExtensions"
                type="text"
              />
              <ValidatedField label="Svg Icons" id="theme-modifier-sets-svgIcons" name="svgIcons" data-cy="svgIcons" type="text" />
              <ValidatedField
                label="Topic Thumbnail Sizes"
                id="theme-modifier-sets-topicThumbnailSizes"
                name="topicThumbnailSizes"
                data-cy="topicThumbnailSizes"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/theme-modifier-sets" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">Back</span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp; Save
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default ThemeModifierSetsUpdate;
