import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ITopicLinkClicks } from 'app/shared/model/topic-link-clicks.model';
import { getEntity, updateEntity, createEntity, reset } from './topic-link-clicks.reducer';

export const TopicLinkClicksUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const topicLinkClicksEntity = useAppSelector(state => state.topicLinkClicks.entity);
  const loading = useAppSelector(state => state.topicLinkClicks.loading);
  const updating = useAppSelector(state => state.topicLinkClicks.updating);
  const updateSuccess = useAppSelector(state => state.topicLinkClicks.updateSuccess);
  const handleClose = () => {
    props.history.push('/topic-link-clicks' + props.location.search);
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
      ...topicLinkClicksEntity,
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
          ...topicLinkClicksEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.topicLinkClicks.home.createOrEditLabel" data-cy="TopicLinkClicksCreateUpdateHeading">
            Create or edit a TopicLinkClicks
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
                <ValidatedField name="id" required readOnly id="topic-link-clicks-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Topic Link Id"
                id="topic-link-clicks-topicLinkId"
                name="topicLinkId"
                data-cy="topicLinkId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="User Id" id="topic-link-clicks-userId" name="userId" data-cy="userId" type="text" />
              <ValidatedField label="Ip Address" id="topic-link-clicks-ipAddress" name="ipAddress" data-cy="ipAddress" type="text" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/topic-link-clicks" replace color="info">
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

export default TopicLinkClicksUpdate;
