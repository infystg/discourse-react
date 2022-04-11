import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IJavascriptCaches } from 'app/shared/model/javascript-caches.model';
import { getEntity, updateEntity, createEntity, reset } from './javascript-caches.reducer';

export const JavascriptCachesUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const javascriptCachesEntity = useAppSelector(state => state.javascriptCaches.entity);
  const loading = useAppSelector(state => state.javascriptCaches.loading);
  const updating = useAppSelector(state => state.javascriptCaches.updating);
  const updateSuccess = useAppSelector(state => state.javascriptCaches.updateSuccess);
  const handleClose = () => {
    props.history.push('/javascript-caches' + props.location.search);
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
      ...javascriptCachesEntity,
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
          ...javascriptCachesEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.javascriptCaches.home.createOrEditLabel" data-cy="JavascriptCachesCreateUpdateHeading">
            Create or edit a JavascriptCaches
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
                <ValidatedField name="id" required readOnly id="javascript-caches-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Theme Field Id"
                id="javascript-caches-themeFieldId"
                name="themeFieldId"
                data-cy="themeFieldId"
                type="text"
              />
              <ValidatedField label="Digest" id="javascript-caches-digest" name="digest" data-cy="digest" type="text" />
              <ValidatedField
                label="Content"
                id="javascript-caches-content"
                name="content"
                data-cy="content"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Theme Id" id="javascript-caches-themeId" name="themeId" data-cy="themeId" type="text" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/javascript-caches" replace color="info">
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

export default JavascriptCachesUpdate;
