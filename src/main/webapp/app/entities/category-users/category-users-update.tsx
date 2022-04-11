import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICategoryUsers } from 'app/shared/model/category-users.model';
import { getEntity, updateEntity, createEntity, reset } from './category-users.reducer';

export const CategoryUsersUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const categoryUsersEntity = useAppSelector(state => state.categoryUsers.entity);
  const loading = useAppSelector(state => state.categoryUsers.loading);
  const updating = useAppSelector(state => state.categoryUsers.updating);
  const updateSuccess = useAppSelector(state => state.categoryUsers.updateSuccess);
  const handleClose = () => {
    props.history.push('/category-users' + props.location.search);
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
    values.lastSeenAt = convertDateTimeToServer(values.lastSeenAt);

    const entity = {
      ...categoryUsersEntity,
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
          lastSeenAt: displayDefaultDateTime(),
        }
      : {
          ...categoryUsersEntity,
          lastSeenAt: convertDateTimeFromServer(categoryUsersEntity.lastSeenAt),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.categoryUsers.home.createOrEditLabel" data-cy="CategoryUsersCreateUpdateHeading">
            Create or edit a CategoryUsers
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
                <ValidatedField name="id" required readOnly id="category-users-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Category Id"
                id="category-users-categoryId"
                name="categoryId"
                data-cy="categoryId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="User Id"
                id="category-users-userId"
                name="userId"
                data-cy="userId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Notification Level"
                id="category-users-notificationLevel"
                name="notificationLevel"
                data-cy="notificationLevel"
                type="text"
              />
              <ValidatedField
                label="Last Seen At"
                id="category-users-lastSeenAt"
                name="lastSeenAt"
                data-cy="lastSeenAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/category-users" replace color="info">
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

export default CategoryUsersUpdate;
