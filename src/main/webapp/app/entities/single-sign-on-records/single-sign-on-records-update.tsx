import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ISingleSignOnRecords } from 'app/shared/model/single-sign-on-records.model';
import { getEntity, updateEntity, createEntity, reset } from './single-sign-on-records.reducer';

export const SingleSignOnRecordsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const singleSignOnRecordsEntity = useAppSelector(state => state.singleSignOnRecords.entity);
  const loading = useAppSelector(state => state.singleSignOnRecords.loading);
  const updating = useAppSelector(state => state.singleSignOnRecords.updating);
  const updateSuccess = useAppSelector(state => state.singleSignOnRecords.updateSuccess);
  const handleClose = () => {
    props.history.push('/single-sign-on-records' + props.location.search);
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
      ...singleSignOnRecordsEntity,
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
          ...singleSignOnRecordsEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.singleSignOnRecords.home.createOrEditLabel" data-cy="SingleSignOnRecordsCreateUpdateHeading">
            Create or edit a SingleSignOnRecords
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
                <ValidatedField name="id" required readOnly id="single-sign-on-records-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="User Id"
                id="single-sign-on-records-userId"
                name="userId"
                data-cy="userId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="External Id"
                id="single-sign-on-records-externalId"
                name="externalId"
                data-cy="externalId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Last Payload"
                id="single-sign-on-records-lastPayload"
                name="lastPayload"
                data-cy="lastPayload"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="External Username"
                id="single-sign-on-records-externalUsername"
                name="externalUsername"
                data-cy="externalUsername"
                type="text"
              />
              <ValidatedField
                label="External Email"
                id="single-sign-on-records-externalEmail"
                name="externalEmail"
                data-cy="externalEmail"
                type="text"
              />
              <ValidatedField
                label="External Name"
                id="single-sign-on-records-externalName"
                name="externalName"
                data-cy="externalName"
                type="text"
              />
              <ValidatedField
                label="External Avatar Url"
                id="single-sign-on-records-externalAvatarUrl"
                name="externalAvatarUrl"
                data-cy="externalAvatarUrl"
                type="text"
              />
              <ValidatedField
                label="External Profile Background Url"
                id="single-sign-on-records-externalProfileBackgroundUrl"
                name="externalProfileBackgroundUrl"
                data-cy="externalProfileBackgroundUrl"
                type="text"
              />
              <ValidatedField
                label="External Card Background Url"
                id="single-sign-on-records-externalCardBackgroundUrl"
                name="externalCardBackgroundUrl"
                data-cy="externalCardBackgroundUrl"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/single-sign-on-records" replace color="info">
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

export default SingleSignOnRecordsUpdate;
