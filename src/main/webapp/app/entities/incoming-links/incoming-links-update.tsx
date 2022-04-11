import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IIncomingLinks } from 'app/shared/model/incoming-links.model';
import { getEntity, updateEntity, createEntity, reset } from './incoming-links.reducer';

export const IncomingLinksUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const incomingLinksEntity = useAppSelector(state => state.incomingLinks.entity);
  const loading = useAppSelector(state => state.incomingLinks.loading);
  const updating = useAppSelector(state => state.incomingLinks.updating);
  const updateSuccess = useAppSelector(state => state.incomingLinks.updateSuccess);
  const handleClose = () => {
    props.history.push('/incoming-links' + props.location.search);
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
      ...incomingLinksEntity,
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
          ...incomingLinksEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.incomingLinks.home.createOrEditLabel" data-cy="IncomingLinksCreateUpdateHeading">
            Create or edit a IncomingLinks
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
                <ValidatedField name="id" required readOnly id="incoming-links-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField label="User Id" id="incoming-links-userId" name="userId" data-cy="userId" type="text" />
              <ValidatedField label="Ip Address" id="incoming-links-ipAddress" name="ipAddress" data-cy="ipAddress" type="text" />
              <ValidatedField
                label="Current User Id"
                id="incoming-links-currentUserId"
                name="currentUserId"
                data-cy="currentUserId"
                type="text"
              />
              <ValidatedField
                label="Post Id"
                id="incoming-links-postId"
                name="postId"
                data-cy="postId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Incoming Referer Id"
                id="incoming-links-incomingRefererId"
                name="incomingRefererId"
                data-cy="incomingRefererId"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/incoming-links" replace color="info">
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

export default IncomingLinksUpdate;
