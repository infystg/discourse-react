import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ITopicSearchData } from 'app/shared/model/topic-search-data.model';
import { getEntity, updateEntity, createEntity, reset } from './topic-search-data.reducer';

export const TopicSearchDataUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const topicSearchDataEntity = useAppSelector(state => state.topicSearchData.entity);
  const loading = useAppSelector(state => state.topicSearchData.loading);
  const updating = useAppSelector(state => state.topicSearchData.updating);
  const updateSuccess = useAppSelector(state => state.topicSearchData.updateSuccess);
  const handleClose = () => {
    props.history.push('/topic-search-data' + props.location.search);
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
      ...topicSearchDataEntity,
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
          ...topicSearchDataEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.topicSearchData.home.createOrEditLabel" data-cy="TopicSearchDataCreateUpdateHeading">
            Create or edit a TopicSearchData
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
                <ValidatedField name="id" required readOnly id="topic-search-data-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Topic Id"
                id="topic-search-data-topicId"
                name="topicId"
                data-cy="topicId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Raw Data" id="topic-search-data-rawData" name="rawData" data-cy="rawData" type="text" />
              <ValidatedField
                label="Locale"
                id="topic-search-data-locale"
                name="locale"
                data-cy="locale"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Search Data" id="topic-search-data-searchData" name="searchData" data-cy="searchData" type="text" />
              <ValidatedField label="Version" id="topic-search-data-version" name="version" data-cy="version" type="text" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/topic-search-data" replace color="info">
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

export default TopicSearchDataUpdate;
