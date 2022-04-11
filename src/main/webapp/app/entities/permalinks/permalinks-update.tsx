import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IPermalinks } from 'app/shared/model/permalinks.model';
import { getEntity, updateEntity, createEntity, reset } from './permalinks.reducer';

export const PermalinksUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const permalinksEntity = useAppSelector(state => state.permalinks.entity);
  const loading = useAppSelector(state => state.permalinks.loading);
  const updating = useAppSelector(state => state.permalinks.updating);
  const updateSuccess = useAppSelector(state => state.permalinks.updateSuccess);
  const handleClose = () => {
    props.history.push('/permalinks' + props.location.search);
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
      ...permalinksEntity,
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
          ...permalinksEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.permalinks.home.createOrEditLabel" data-cy="PermalinksCreateUpdateHeading">
            Create or edit a Permalinks
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="permalinks-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="Url"
                id="permalinks-url"
                name="url"
                data-cy="url"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Topic Id" id="permalinks-topicId" name="topicId" data-cy="topicId" type="text" />
              <ValidatedField label="Post Id" id="permalinks-postId" name="postId" data-cy="postId" type="text" />
              <ValidatedField label="Category Id" id="permalinks-categoryId" name="categoryId" data-cy="categoryId" type="text" />
              <ValidatedField label="External Url" id="permalinks-externalUrl" name="externalUrl" data-cy="externalUrl" type="text" />
              <ValidatedField label="Tag Id" id="permalinks-tagId" name="tagId" data-cy="tagId" type="text" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/permalinks" replace color="info">
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

export default PermalinksUpdate;
