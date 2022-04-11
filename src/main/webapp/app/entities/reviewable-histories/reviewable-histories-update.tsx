import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IReviewableHistories } from 'app/shared/model/reviewable-histories.model';
import { getEntity, updateEntity, createEntity, reset } from './reviewable-histories.reducer';

export const ReviewableHistoriesUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const reviewableHistoriesEntity = useAppSelector(state => state.reviewableHistories.entity);
  const loading = useAppSelector(state => state.reviewableHistories.loading);
  const updating = useAppSelector(state => state.reviewableHistories.updating);
  const updateSuccess = useAppSelector(state => state.reviewableHistories.updateSuccess);
  const handleClose = () => {
    props.history.push('/reviewable-histories' + props.location.search);
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
      ...reviewableHistoriesEntity,
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
          ...reviewableHistoriesEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.reviewableHistories.home.createOrEditLabel" data-cy="ReviewableHistoriesCreateUpdateHeading">
            Create or edit a ReviewableHistories
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
                <ValidatedField name="id" required readOnly id="reviewable-histories-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Reviewable Id"
                id="reviewable-histories-reviewableId"
                name="reviewableId"
                data-cy="reviewableId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Reviewable History Type"
                id="reviewable-histories-reviewableHistoryType"
                name="reviewableHistoryType"
                data-cy="reviewableHistoryType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Status"
                id="reviewable-histories-status"
                name="status"
                data-cy="status"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Edited" id="reviewable-histories-edited" name="edited" data-cy="edited" type="text" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/reviewable-histories" replace color="info">
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

export default ReviewableHistoriesUpdate;
