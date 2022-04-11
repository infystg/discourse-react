import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IScreenedUrls } from 'app/shared/model/screened-urls.model';
import { getEntity, updateEntity, createEntity, reset } from './screened-urls.reducer';

export const ScreenedUrlsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const screenedUrlsEntity = useAppSelector(state => state.screenedUrls.entity);
  const loading = useAppSelector(state => state.screenedUrls.loading);
  const updating = useAppSelector(state => state.screenedUrls.updating);
  const updateSuccess = useAppSelector(state => state.screenedUrls.updateSuccess);
  const handleClose = () => {
    props.history.push('/screened-urls' + props.location.search);
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
    values.lastMatchAt = convertDateTimeToServer(values.lastMatchAt);

    const entity = {
      ...screenedUrlsEntity,
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
      ? {
          lastMatchAt: displayDefaultDateTime(),
        }
      : {
          ...screenedUrlsEntity,
          lastMatchAt: convertDateTimeFromServer(screenedUrlsEntity.lastMatchAt),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.screenedUrls.home.createOrEditLabel" data-cy="ScreenedUrlsCreateUpdateHeading">
            Create or edit a ScreenedUrls
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
                <ValidatedField name="id" required readOnly id="screened-urls-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Url"
                id="screened-urls-url"
                name="url"
                data-cy="url"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Domain"
                id="screened-urls-domain"
                name="domain"
                data-cy="domain"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Action Type"
                id="screened-urls-actionType"
                name="actionType"
                data-cy="actionType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Match Count"
                id="screened-urls-matchCount"
                name="matchCount"
                data-cy="matchCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Last Match At"
                id="screened-urls-lastMatchAt"
                name="lastMatchAt"
                data-cy="lastMatchAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField label="Ip Address" id="screened-urls-ipAddress" name="ipAddress" data-cy="ipAddress" type="text" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/screened-urls" replace color="info">
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

export default ScreenedUrlsUpdate;
