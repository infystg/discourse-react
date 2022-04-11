import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IStylesheetCache } from 'app/shared/model/stylesheet-cache.model';
import { getEntity, updateEntity, createEntity, reset } from './stylesheet-cache.reducer';

export const StylesheetCacheUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const stylesheetCacheEntity = useAppSelector(state => state.stylesheetCache.entity);
  const loading = useAppSelector(state => state.stylesheetCache.loading);
  const updating = useAppSelector(state => state.stylesheetCache.updating);
  const updateSuccess = useAppSelector(state => state.stylesheetCache.updateSuccess);
  const handleClose = () => {
    props.history.push('/stylesheet-cache' + props.location.search);
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
      ...stylesheetCacheEntity,
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
          ...stylesheetCacheEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.stylesheetCache.home.createOrEditLabel" data-cy="StylesheetCacheCreateUpdateHeading">
            Create or edit a StylesheetCache
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
                <ValidatedField name="id" required readOnly id="stylesheet-cache-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Target"
                id="stylesheet-cache-target"
                name="target"
                data-cy="target"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Digest"
                id="stylesheet-cache-digest"
                name="digest"
                data-cy="digest"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Content"
                id="stylesheet-cache-content"
                name="content"
                data-cy="content"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Theme Id"
                id="stylesheet-cache-themeId"
                name="themeId"
                data-cy="themeId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Source Map" id="stylesheet-cache-sourceMap" name="sourceMap" data-cy="sourceMap" type="text" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/stylesheet-cache" replace color="info">
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

export default StylesheetCacheUpdate;
