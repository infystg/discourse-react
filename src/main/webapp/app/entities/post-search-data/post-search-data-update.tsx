import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IPostSearchData } from 'app/shared/model/post-search-data.model';
import { getEntity, updateEntity, createEntity, reset } from './post-search-data.reducer';

export const PostSearchDataUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const postSearchDataEntity = useAppSelector(state => state.postSearchData.entity);
  const loading = useAppSelector(state => state.postSearchData.loading);
  const updating = useAppSelector(state => state.postSearchData.updating);
  const updateSuccess = useAppSelector(state => state.postSearchData.updateSuccess);
  const handleClose = () => {
    props.history.push('/post-search-data' + props.location.search);
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
      ...postSearchDataEntity,
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
          ...postSearchDataEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.postSearchData.home.createOrEditLabel" data-cy="PostSearchDataCreateUpdateHeading">
            Create or edit a PostSearchData
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
                <ValidatedField name="id" required readOnly id="post-search-data-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Post Id"
                id="post-search-data-postId"
                name="postId"
                data-cy="postId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Search Data" id="post-search-data-searchData" name="searchData" data-cy="searchData" type="text" />
              <ValidatedField label="Raw Data" id="post-search-data-rawData" name="rawData" data-cy="rawData" type="text" />
              <ValidatedField label="Locale" id="post-search-data-locale" name="locale" data-cy="locale" type="text" />
              <ValidatedField label="Version" id="post-search-data-version" name="version" data-cy="version" type="text" />
              <ValidatedField
                label="Private Message"
                id="post-search-data-privateMessage"
                name="privateMessage"
                data-cy="privateMessage"
                check
                type="checkbox"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/post-search-data" replace color="info">
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

export default PostSearchDataUpdate;
