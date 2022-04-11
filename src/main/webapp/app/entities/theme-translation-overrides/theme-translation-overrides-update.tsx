import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IThemeTranslationOverrides } from 'app/shared/model/theme-translation-overrides.model';
import { getEntity, updateEntity, createEntity, reset } from './theme-translation-overrides.reducer';

export const ThemeTranslationOverridesUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const themeTranslationOverridesEntity = useAppSelector(state => state.themeTranslationOverrides.entity);
  const loading = useAppSelector(state => state.themeTranslationOverrides.loading);
  const updating = useAppSelector(state => state.themeTranslationOverrides.updating);
  const updateSuccess = useAppSelector(state => state.themeTranslationOverrides.updateSuccess);
  const handleClose = () => {
    props.history.push('/theme-translation-overrides' + props.location.search);
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
      ...themeTranslationOverridesEntity,
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
          ...themeTranslationOverridesEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2
            id="discourseReactApp.themeTranslationOverrides.home.createOrEditLabel"
            data-cy="ThemeTranslationOverridesCreateUpdateHeading"
          >
            Create or edit a ThemeTranslationOverrides
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
                <ValidatedField name="id" required readOnly id="theme-translation-overrides-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Theme Id"
                id="theme-translation-overrides-themeId"
                name="themeId"
                data-cy="themeId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Locale"
                id="theme-translation-overrides-locale"
                name="locale"
                data-cy="locale"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Translation Key"
                id="theme-translation-overrides-translationKey"
                name="translationKey"
                data-cy="translationKey"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Value"
                id="theme-translation-overrides-value"
                name="value"
                data-cy="value"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/theme-translation-overrides" replace color="info">
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

export default ThemeTranslationOverridesUpdate;
