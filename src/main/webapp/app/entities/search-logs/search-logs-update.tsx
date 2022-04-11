import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ISearchLogs } from 'app/shared/model/search-logs.model';
import { getEntity, updateEntity, createEntity, reset } from './search-logs.reducer';

export const SearchLogsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const searchLogsEntity = useAppSelector(state => state.searchLogs.entity);
  const loading = useAppSelector(state => state.searchLogs.loading);
  const updating = useAppSelector(state => state.searchLogs.updating);
  const updateSuccess = useAppSelector(state => state.searchLogs.updateSuccess);
  const handleClose = () => {
    props.history.push('/search-logs' + props.location.search);
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
      ...searchLogsEntity,
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
          ...searchLogsEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.searchLogs.home.createOrEditLabel" data-cy="SearchLogsCreateUpdateHeading">
            Create or edit a SearchLogs
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="search-logs-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="Term"
                id="search-logs-term"
                name="term"
                data-cy="term"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="User Id" id="search-logs-userId" name="userId" data-cy="userId" type="text" />
              <ValidatedField label="Ip Address" id="search-logs-ipAddress" name="ipAddress" data-cy="ipAddress" type="text" />
              <ValidatedField
                label="Search Result Id"
                id="search-logs-searchResultId"
                name="searchResultId"
                data-cy="searchResultId"
                type="text"
              />
              <ValidatedField
                label="Search Type"
                id="search-logs-searchType"
                name="searchType"
                data-cy="searchType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Search Result Type"
                id="search-logs-searchResultType"
                name="searchResultType"
                data-cy="searchResultType"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/search-logs" replace color="info">
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

export default SearchLogsUpdate;
