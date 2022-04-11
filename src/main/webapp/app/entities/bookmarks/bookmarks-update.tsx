import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IBookmarks } from 'app/shared/model/bookmarks.model';
import { getEntity, updateEntity, createEntity, reset } from './bookmarks.reducer';

export const BookmarksUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const bookmarksEntity = useAppSelector(state => state.bookmarks.entity);
  const loading = useAppSelector(state => state.bookmarks.loading);
  const updating = useAppSelector(state => state.bookmarks.updating);
  const updateSuccess = useAppSelector(state => state.bookmarks.updateSuccess);
  const handleClose = () => {
    props.history.push('/bookmarks' + props.location.search);
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
    values.reminderAt = convertDateTimeToServer(values.reminderAt);
    values.reminderLastSentAt = convertDateTimeToServer(values.reminderLastSentAt);
    values.reminderSetAt = convertDateTimeToServer(values.reminderSetAt);

    const entity = {
      ...bookmarksEntity,
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
          reminderAt: displayDefaultDateTime(),
          reminderLastSentAt: displayDefaultDateTime(),
          reminderSetAt: displayDefaultDateTime(),
        }
      : {
          ...bookmarksEntity,
          reminderAt: convertDateTimeFromServer(bookmarksEntity.reminderAt),
          reminderLastSentAt: convertDateTimeFromServer(bookmarksEntity.reminderLastSentAt),
          reminderSetAt: convertDateTimeFromServer(bookmarksEntity.reminderSetAt),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.bookmarks.home.createOrEditLabel" data-cy="BookmarksCreateUpdateHeading">
            Create or edit a Bookmarks
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="bookmarks-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="User Id"
                id="bookmarks-userId"
                name="userId"
                data-cy="userId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Topic Id"
                id="bookmarks-topicId"
                name="topicId"
                data-cy="topicId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Post Id"
                id="bookmarks-postId"
                name="postId"
                data-cy="postId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Name" id="bookmarks-name" name="name" data-cy="name" type="text" />
              <ValidatedField label="Reminder Type" id="bookmarks-reminderType" name="reminderType" data-cy="reminderType" type="text" />
              <ValidatedField
                label="Reminder At"
                id="bookmarks-reminderAt"
                name="reminderAt"
                data-cy="reminderAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Reminder Last Sent At"
                id="bookmarks-reminderLastSentAt"
                name="reminderLastSentAt"
                data-cy="reminderLastSentAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Reminder Set At"
                id="bookmarks-reminderSetAt"
                name="reminderSetAt"
                data-cy="reminderSetAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Auto Delete Preference"
                id="bookmarks-autoDeletePreference"
                name="autoDeletePreference"
                data-cy="autoDeletePreference"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Pinned" id="bookmarks-pinned" name="pinned" data-cy="pinned" check type="checkbox" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/bookmarks" replace color="info">
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

export default BookmarksUpdate;
