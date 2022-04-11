import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUserSearchData } from 'app/shared/model/user-search-data.model';
import { getEntity, updateEntity, createEntity, reset } from './user-search-data.reducer';

export const UserSearchDataUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const userSearchDataEntity = useAppSelector(state => state.userSearchData.entity);
  const loading = useAppSelector(state => state.userSearchData.loading);
  const updating = useAppSelector(state => state.userSearchData.updating);
  const updateSuccess = useAppSelector(state => state.userSearchData.updateSuccess);
  const handleClose = () => {
    props.history.push('/user-search-data' + props.location.search);
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
      ...userSearchDataEntity,
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
          ...userSearchDataEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.userSearchData.home.createOrEditLabel" data-cy="UserSearchDataCreateUpdateHeading">
            Create or edit a UserSearchData
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
                <ValidatedField name="id" required readOnly id="user-search-data-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="User Id"
                id="user-search-data-userId"
                name="userId"
                data-cy="userId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Search Data" id="user-search-data-searchData" name="searchData" data-cy="searchData" type="text" />
              <ValidatedField label="Raw Data" id="user-search-data-rawData" name="rawData" data-cy="rawData" type="text" />
              <ValidatedField label="Locale" id="user-search-data-locale" name="locale" data-cy="locale" type="text" />
              <ValidatedField label="Version" id="user-search-data-version" name="version" data-cy="version" type="text" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/user-search-data" replace color="info">
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

export default UserSearchDataUpdate;
