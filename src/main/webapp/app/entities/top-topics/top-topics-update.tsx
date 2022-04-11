import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ITopTopics } from 'app/shared/model/top-topics.model';
import { getEntity, updateEntity, createEntity, reset } from './top-topics.reducer';

export const TopTopicsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const topTopicsEntity = useAppSelector(state => state.topTopics.entity);
  const loading = useAppSelector(state => state.topTopics.loading);
  const updating = useAppSelector(state => state.topTopics.updating);
  const updateSuccess = useAppSelector(state => state.topTopics.updateSuccess);
  const handleClose = () => {
    props.history.push('/top-topics' + props.location.search);
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
      ...topTopicsEntity,
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
          ...topTopicsEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.topTopics.home.createOrEditLabel" data-cy="TopTopicsCreateUpdateHeading">
            Create or edit a TopTopics
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="top-topics-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField label="Topic Id" id="top-topics-topicId" name="topicId" data-cy="topicId" type="text" />
              <ValidatedField
                label="Yearly Posts Count"
                id="top-topics-yearlyPostsCount"
                name="yearlyPostsCount"
                data-cy="yearlyPostsCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Yearly Views Count"
                id="top-topics-yearlyViewsCount"
                name="yearlyViewsCount"
                data-cy="yearlyViewsCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Yearly Likes Count"
                id="top-topics-yearlyLikesCount"
                name="yearlyLikesCount"
                data-cy="yearlyLikesCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Monthly Posts Count"
                id="top-topics-monthlyPostsCount"
                name="monthlyPostsCount"
                data-cy="monthlyPostsCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Monthly Views Count"
                id="top-topics-monthlyViewsCount"
                name="monthlyViewsCount"
                data-cy="monthlyViewsCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Monthly Likes Count"
                id="top-topics-monthlyLikesCount"
                name="monthlyLikesCount"
                data-cy="monthlyLikesCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Weekly Posts Count"
                id="top-topics-weeklyPostsCount"
                name="weeklyPostsCount"
                data-cy="weeklyPostsCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Weekly Views Count"
                id="top-topics-weeklyViewsCount"
                name="weeklyViewsCount"
                data-cy="weeklyViewsCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Weekly Likes Count"
                id="top-topics-weeklyLikesCount"
                name="weeklyLikesCount"
                data-cy="weeklyLikesCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Daily Posts Count"
                id="top-topics-dailyPostsCount"
                name="dailyPostsCount"
                data-cy="dailyPostsCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Daily Views Count"
                id="top-topics-dailyViewsCount"
                name="dailyViewsCount"
                data-cy="dailyViewsCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Daily Likes Count"
                id="top-topics-dailyLikesCount"
                name="dailyLikesCount"
                data-cy="dailyLikesCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Daily Score" id="top-topics-dailyScore" name="dailyScore" data-cy="dailyScore" type="text" />
              <ValidatedField label="Weekly Score" id="top-topics-weeklyScore" name="weeklyScore" data-cy="weeklyScore" type="text" />
              <ValidatedField label="Monthly Score" id="top-topics-monthlyScore" name="monthlyScore" data-cy="monthlyScore" type="text" />
              <ValidatedField label="Yearly Score" id="top-topics-yearlyScore" name="yearlyScore" data-cy="yearlyScore" type="text" />
              <ValidatedField label="All Score" id="top-topics-allScore" name="allScore" data-cy="allScore" type="text" />
              <ValidatedField
                label="Daily Op Likes Count"
                id="top-topics-dailyOpLikesCount"
                name="dailyOpLikesCount"
                data-cy="dailyOpLikesCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Weekly Op Likes Count"
                id="top-topics-weeklyOpLikesCount"
                name="weeklyOpLikesCount"
                data-cy="weeklyOpLikesCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Monthly Op Likes Count"
                id="top-topics-monthlyOpLikesCount"
                name="monthlyOpLikesCount"
                data-cy="monthlyOpLikesCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Yearly Op Likes Count"
                id="top-topics-yearlyOpLikesCount"
                name="yearlyOpLikesCount"
                data-cy="yearlyOpLikesCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Quarterly Posts Count"
                id="top-topics-quarterlyPostsCount"
                name="quarterlyPostsCount"
                data-cy="quarterlyPostsCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Quarterly Views Count"
                id="top-topics-quarterlyViewsCount"
                name="quarterlyViewsCount"
                data-cy="quarterlyViewsCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Quarterly Likes Count"
                id="top-topics-quarterlyLikesCount"
                name="quarterlyLikesCount"
                data-cy="quarterlyLikesCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Quarterly Score"
                id="top-topics-quarterlyScore"
                name="quarterlyScore"
                data-cy="quarterlyScore"
                type="text"
              />
              <ValidatedField
                label="Quarterly Op Likes Count"
                id="top-topics-quarterlyOpLikesCount"
                name="quarterlyOpLikesCount"
                data-cy="quarterlyOpLikesCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/top-topics" replace color="info">
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

export default TopTopicsUpdate;
