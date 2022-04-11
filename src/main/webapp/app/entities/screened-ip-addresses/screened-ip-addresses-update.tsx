import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IScreenedIpAddresses } from 'app/shared/model/screened-ip-addresses.model';
import { getEntity, updateEntity, createEntity, reset } from './screened-ip-addresses.reducer';

export const ScreenedIpAddressesUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const screenedIpAddressesEntity = useAppSelector(state => state.screenedIpAddresses.entity);
  const loading = useAppSelector(state => state.screenedIpAddresses.loading);
  const updating = useAppSelector(state => state.screenedIpAddresses.updating);
  const updateSuccess = useAppSelector(state => state.screenedIpAddresses.updateSuccess);
  const handleClose = () => {
    props.history.push('/screened-ip-addresses' + props.location.search);
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
      ...screenedIpAddressesEntity,
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
          ...screenedIpAddressesEntity,
          lastMatchAt: convertDateTimeFromServer(screenedIpAddressesEntity.lastMatchAt),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.screenedIpAddresses.home.createOrEditLabel" data-cy="ScreenedIpAddressesCreateUpdateHeading">
            Create or edit a ScreenedIpAddresses
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
                <ValidatedField name="id" required readOnly id="screened-ip-addresses-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Ip Address"
                id="screened-ip-addresses-ipAddress"
                name="ipAddress"
                data-cy="ipAddress"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Action Type"
                id="screened-ip-addresses-actionType"
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
                id="screened-ip-addresses-matchCount"
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
                id="screened-ip-addresses-lastMatchAt"
                name="lastMatchAt"
                data-cy="lastMatchAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/screened-ip-addresses" replace color="info">
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

export default ScreenedIpAddressesUpdate;
