import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IDismissedTopicUsers } from 'app/shared/model/dismissed-topic-users.model';
import { getEntity, updateEntity, createEntity, reset } from './dismissed-topic-users.reducer';

export const DismissedTopicUsersUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const dismissedTopicUsersEntity = useAppSelector(state => state.dismissedTopicUsers.entity);
  const loading = useAppSelector(state => state.dismissedTopicUsers.loading);
  const updating = useAppSelector(state => state.dismissedTopicUsers.updating);
  const updateSuccess = useAppSelector(state => state.dismissedTopicUsers.updateSuccess);
  const handleClose = () => {
    props.history.push('/dismissed-topic-users' + props.location.search);
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
    values.createdAt = convertDateTimeToServer(values.createdAt);

    const entity = {
      ...dismissedTopicUsersEntity,
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
          createdAt: displayDefaultDateTime(),
        }
      : {
          ...dismissedTopicUsersEntity,
          createdAt: convertDateTimeFromServer(dismissedTopicUsersEntity.createdAt),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.dismissedTopicUsers.home.createOrEditLabel" data-cy="DismissedTopicUsersCreateUpdateHeading">
            Create or edit a DismissedTopicUsers
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
                <ValidatedField name="id" required readOnly id="dismissed-topic-users-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField label="User Id" id="dismissed-topic-users-userId" name="userId" data-cy="userId" type="text" />
              <ValidatedField label="Topic Id" id="dismissed-topic-users-topicId" name="topicId" data-cy="topicId" type="text" />
              <ValidatedField
                label="Created At"
                id="dismissed-topic-users-createdAt"
                name="createdAt"
                data-cy="createdAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/dismissed-topic-users" replace color="info">
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

export default DismissedTopicUsersUpdate;
