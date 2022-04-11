import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICategories } from 'app/shared/model/categories.model';
import { getEntity, updateEntity, createEntity, reset } from './categories.reducer';

export const CategoriesUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const categoriesEntity = useAppSelector(state => state.categories.entity);
  const loading = useAppSelector(state => state.categories.loading);
  const updating = useAppSelector(state => state.categories.updating);
  const updateSuccess = useAppSelector(state => state.categories.updateSuccess);
  const handleClose = () => {
    props.history.push('/categories' + props.location.search);
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
      ...categoriesEntity,
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
          ...categoriesEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.categories.home.createOrEditLabel" data-cy="CategoriesCreateUpdateHeading">
            Create or edit a Categories
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="categories-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="Name"
                id="categories-name"
                name="name"
                data-cy="name"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Color"
                id="categories-color"
                name="color"
                data-cy="color"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Topic Id" id="categories-topicId" name="topicId" data-cy="topicId" type="text" />
              <ValidatedField
                label="Topic Count"
                id="categories-topicCount"
                name="topicCount"
                data-cy="topicCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="User Id"
                id="categories-userId"
                name="userId"
                data-cy="userId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Topics Year" id="categories-topicsYear" name="topicsYear" data-cy="topicsYear" type="text" />
              <ValidatedField label="Topics Month" id="categories-topicsMonth" name="topicsMonth" data-cy="topicsMonth" type="text" />
              <ValidatedField label="Topics Week" id="categories-topicsWeek" name="topicsWeek" data-cy="topicsWeek" type="text" />
              <ValidatedField
                label="Slug"
                id="categories-slug"
                name="slug"
                data-cy="slug"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Description" id="categories-description" name="description" data-cy="description" type="text" />
              <ValidatedField
                label="Text Color"
                id="categories-textColor"
                name="textColor"
                data-cy="textColor"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Read Restricted"
                id="categories-readRestricted"
                name="readRestricted"
                data-cy="readRestricted"
                check
                type="checkbox"
              />
              <ValidatedField
                label="Auto Close Hours"
                id="categories-autoCloseHours"
                name="autoCloseHours"
                data-cy="autoCloseHours"
                type="text"
              />
              <ValidatedField
                label="Post Count"
                id="categories-postCount"
                name="postCount"
                data-cy="postCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Latest Post Id" id="categories-latestPostId" name="latestPostId" data-cy="latestPostId" type="text" />
              <ValidatedField
                label="Latest Topic Id"
                id="categories-latestTopicId"
                name="latestTopicId"
                data-cy="latestTopicId"
                type="text"
              />
              <ValidatedField label="Position" id="categories-position" name="position" data-cy="position" type="text" />
              <ValidatedField
                label="Parent Category Id"
                id="categories-parentCategoryId"
                name="parentCategoryId"
                data-cy="parentCategoryId"
                type="text"
              />
              <ValidatedField label="Posts Year" id="categories-postsYear" name="postsYear" data-cy="postsYear" type="text" />
              <ValidatedField label="Posts Month" id="categories-postsMonth" name="postsMonth" data-cy="postsMonth" type="text" />
              <ValidatedField label="Posts Week" id="categories-postsWeek" name="postsWeek" data-cy="postsWeek" type="text" />
              <ValidatedField label="Email In" id="categories-emailIn" name="emailIn" data-cy="emailIn" type="text" />
              <ValidatedField
                label="Email In Allow Strangers"
                id="categories-emailInAllowStrangers"
                name="emailInAllowStrangers"
                data-cy="emailInAllowStrangers"
                check
                type="checkbox"
              />
              <ValidatedField label="Topics Day" id="categories-topicsDay" name="topicsDay" data-cy="topicsDay" type="text" />
              <ValidatedField label="Posts Day" id="categories-postsDay" name="postsDay" data-cy="postsDay" type="text" />
              <ValidatedField
                label="Allow Badges"
                id="categories-allowBadges"
                name="allowBadges"
                data-cy="allowBadges"
                check
                type="checkbox"
              />
              <ValidatedField label="Name Lower" id="categories-nameLower" name="nameLower" data-cy="nameLower" type="text" />
              <ValidatedField
                label="Auto Close Based On Last Post"
                id="categories-autoCloseBasedOnLastPost"
                name="autoCloseBasedOnLastPost"
                data-cy="autoCloseBasedOnLastPost"
                check
                type="checkbox"
              />
              <ValidatedField
                label="Topic Template"
                id="categories-topicTemplate"
                name="topicTemplate"
                data-cy="topicTemplate"
                type="text"
              />
              <ValidatedField
                label="Contains Messages"
                id="categories-containsMessages"
                name="containsMessages"
                data-cy="containsMessages"
                check
                type="checkbox"
              />
              <ValidatedField label="Sort Order" id="categories-sortOrder" name="sortOrder" data-cy="sortOrder" type="text" />
              <ValidatedField
                label="Sort Ascending"
                id="categories-sortAscending"
                name="sortAscending"
                data-cy="sortAscending"
                check
                type="checkbox"
              />
              <ValidatedField
                label="Uploaded Logo Id"
                id="categories-uploadedLogoId"
                name="uploadedLogoId"
                data-cy="uploadedLogoId"
                type="text"
              />
              <ValidatedField
                label="Uploaded Background Id"
                id="categories-uploadedBackgroundId"
                name="uploadedBackgroundId"
                data-cy="uploadedBackgroundId"
                type="text"
              />
              <ValidatedField
                label="Topic Featured Link Allowed"
                id="categories-topicFeaturedLinkAllowed"
                name="topicFeaturedLinkAllowed"
                data-cy="topicFeaturedLinkAllowed"
                check
                type="checkbox"
              />
              <ValidatedField
                label="All Topics Wiki"
                id="categories-allTopicsWiki"
                name="allTopicsWiki"
                data-cy="allTopicsWiki"
                check
                type="checkbox"
              />
              <ValidatedField
                label="Show Subcategory List"
                id="categories-showSubcategoryList"
                name="showSubcategoryList"
                data-cy="showSubcategoryList"
                check
                type="checkbox"
              />
              <ValidatedField
                label="Num Featured Topics"
                id="categories-numFeaturedTopics"
                name="numFeaturedTopics"
                data-cy="numFeaturedTopics"
                type="text"
              />
              <ValidatedField label="Default View" id="categories-defaultView" name="defaultView" data-cy="defaultView" type="text" />
              <ValidatedField
                label="Subcategory List Style"
                id="categories-subcategoryListStyle"
                name="subcategoryListStyle"
                data-cy="subcategoryListStyle"
                type="text"
              />
              <ValidatedField
                label="Default Top Period"
                id="categories-defaultTopPeriod"
                name="defaultTopPeriod"
                data-cy="defaultTopPeriod"
                type="text"
              />
              <ValidatedField
                label="Mailinglist Mirror"
                id="categories-mailinglistMirror"
                name="mailinglistMirror"
                data-cy="mailinglistMirror"
                check
                type="checkbox"
              />
              <ValidatedField
                label="Minimum Required Tags"
                id="categories-minimumRequiredTags"
                name="minimumRequiredTags"
                data-cy="minimumRequiredTags"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Navigate To First Post After Read"
                id="categories-navigateToFirstPostAfterRead"
                name="navigateToFirstPostAfterRead"
                data-cy="navigateToFirstPostAfterRead"
                check
                type="checkbox"
              />
              <ValidatedField
                label="Search Priority"
                id="categories-searchPriority"
                name="searchPriority"
                data-cy="searchPriority"
                type="text"
              />
              <ValidatedField
                label="Allow Global Tags"
                id="categories-allowGlobalTags"
                name="allowGlobalTags"
                data-cy="allowGlobalTags"
                check
                type="checkbox"
              />
              <ValidatedField
                label="Reviewable By Group Id"
                id="categories-reviewableByGroupId"
                name="reviewableByGroupId"
                data-cy="reviewableByGroupId"
                type="text"
              />
              <ValidatedField
                label="Required Tag Group Id"
                id="categories-requiredTagGroupId"
                name="requiredTagGroupId"
                data-cy="requiredTagGroupId"
                type="text"
              />
              <ValidatedField
                label="Min Tags From Required Group"
                id="categories-minTagsFromRequiredGroup"
                name="minTagsFromRequiredGroup"
                data-cy="minTagsFromRequiredGroup"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Read Only Banner"
                id="categories-readOnlyBanner"
                name="readOnlyBanner"
                data-cy="readOnlyBanner"
                type="text"
              />
              <ValidatedField
                label="Default List Filter"
                id="categories-defaultListFilter"
                name="defaultListFilter"
                data-cy="defaultListFilter"
                type="text"
              />
              <ValidatedField
                label="Allow Unlimited Owner Edits On First Post"
                id="categories-allowUnlimitedOwnerEditsOnFirstPost"
                name="allowUnlimitedOwnerEditsOnFirstPost"
                data-cy="allowUnlimitedOwnerEditsOnFirstPost"
                check
                type="checkbox"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/categories" replace color="info">
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

export default CategoriesUpdate;
