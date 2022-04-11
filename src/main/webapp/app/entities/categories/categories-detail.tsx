import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './categories.reducer';

export const CategoriesDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const categoriesEntity = useAppSelector(state => state.categories.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="categoriesDetailsHeading">Categories</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{categoriesEntity.id}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{categoriesEntity.name}</dd>
          <dt>
            <span id="color">Color</span>
          </dt>
          <dd>{categoriesEntity.color}</dd>
          <dt>
            <span id="topicId">Topic Id</span>
          </dt>
          <dd>{categoriesEntity.topicId}</dd>
          <dt>
            <span id="topicCount">Topic Count</span>
          </dt>
          <dd>{categoriesEntity.topicCount}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{categoriesEntity.userId}</dd>
          <dt>
            <span id="topicsYear">Topics Year</span>
          </dt>
          <dd>{categoriesEntity.topicsYear}</dd>
          <dt>
            <span id="topicsMonth">Topics Month</span>
          </dt>
          <dd>{categoriesEntity.topicsMonth}</dd>
          <dt>
            <span id="topicsWeek">Topics Week</span>
          </dt>
          <dd>{categoriesEntity.topicsWeek}</dd>
          <dt>
            <span id="slug">Slug</span>
          </dt>
          <dd>{categoriesEntity.slug}</dd>
          <dt>
            <span id="description">Description</span>
          </dt>
          <dd>{categoriesEntity.description}</dd>
          <dt>
            <span id="textColor">Text Color</span>
          </dt>
          <dd>{categoriesEntity.textColor}</dd>
          <dt>
            <span id="readRestricted">Read Restricted</span>
          </dt>
          <dd>{categoriesEntity.readRestricted ? 'true' : 'false'}</dd>
          <dt>
            <span id="autoCloseHours">Auto Close Hours</span>
          </dt>
          <dd>{categoriesEntity.autoCloseHours}</dd>
          <dt>
            <span id="postCount">Post Count</span>
          </dt>
          <dd>{categoriesEntity.postCount}</dd>
          <dt>
            <span id="latestPostId">Latest Post Id</span>
          </dt>
          <dd>{categoriesEntity.latestPostId}</dd>
          <dt>
            <span id="latestTopicId">Latest Topic Id</span>
          </dt>
          <dd>{categoriesEntity.latestTopicId}</dd>
          <dt>
            <span id="position">Position</span>
          </dt>
          <dd>{categoriesEntity.position}</dd>
          <dt>
            <span id="parentCategoryId">Parent Category Id</span>
          </dt>
          <dd>{categoriesEntity.parentCategoryId}</dd>
          <dt>
            <span id="postsYear">Posts Year</span>
          </dt>
          <dd>{categoriesEntity.postsYear}</dd>
          <dt>
            <span id="postsMonth">Posts Month</span>
          </dt>
          <dd>{categoriesEntity.postsMonth}</dd>
          <dt>
            <span id="postsWeek">Posts Week</span>
          </dt>
          <dd>{categoriesEntity.postsWeek}</dd>
          <dt>
            <span id="emailIn">Email In</span>
          </dt>
          <dd>{categoriesEntity.emailIn}</dd>
          <dt>
            <span id="emailInAllowStrangers">Email In Allow Strangers</span>
          </dt>
          <dd>{categoriesEntity.emailInAllowStrangers ? 'true' : 'false'}</dd>
          <dt>
            <span id="topicsDay">Topics Day</span>
          </dt>
          <dd>{categoriesEntity.topicsDay}</dd>
          <dt>
            <span id="postsDay">Posts Day</span>
          </dt>
          <dd>{categoriesEntity.postsDay}</dd>
          <dt>
            <span id="allowBadges">Allow Badges</span>
          </dt>
          <dd>{categoriesEntity.allowBadges ? 'true' : 'false'}</dd>
          <dt>
            <span id="nameLower">Name Lower</span>
          </dt>
          <dd>{categoriesEntity.nameLower}</dd>
          <dt>
            <span id="autoCloseBasedOnLastPost">Auto Close Based On Last Post</span>
          </dt>
          <dd>{categoriesEntity.autoCloseBasedOnLastPost ? 'true' : 'false'}</dd>
          <dt>
            <span id="topicTemplate">Topic Template</span>
          </dt>
          <dd>{categoriesEntity.topicTemplate}</dd>
          <dt>
            <span id="containsMessages">Contains Messages</span>
          </dt>
          <dd>{categoriesEntity.containsMessages ? 'true' : 'false'}</dd>
          <dt>
            <span id="sortOrder">Sort Order</span>
          </dt>
          <dd>{categoriesEntity.sortOrder}</dd>
          <dt>
            <span id="sortAscending">Sort Ascending</span>
          </dt>
          <dd>{categoriesEntity.sortAscending ? 'true' : 'false'}</dd>
          <dt>
            <span id="uploadedLogoId">Uploaded Logo Id</span>
          </dt>
          <dd>{categoriesEntity.uploadedLogoId}</dd>
          <dt>
            <span id="uploadedBackgroundId">Uploaded Background Id</span>
          </dt>
          <dd>{categoriesEntity.uploadedBackgroundId}</dd>
          <dt>
            <span id="topicFeaturedLinkAllowed">Topic Featured Link Allowed</span>
          </dt>
          <dd>{categoriesEntity.topicFeaturedLinkAllowed ? 'true' : 'false'}</dd>
          <dt>
            <span id="allTopicsWiki">All Topics Wiki</span>
          </dt>
          <dd>{categoriesEntity.allTopicsWiki ? 'true' : 'false'}</dd>
          <dt>
            <span id="showSubcategoryList">Show Subcategory List</span>
          </dt>
          <dd>{categoriesEntity.showSubcategoryList ? 'true' : 'false'}</dd>
          <dt>
            <span id="numFeaturedTopics">Num Featured Topics</span>
          </dt>
          <dd>{categoriesEntity.numFeaturedTopics}</dd>
          <dt>
            <span id="defaultView">Default View</span>
          </dt>
          <dd>{categoriesEntity.defaultView}</dd>
          <dt>
            <span id="subcategoryListStyle">Subcategory List Style</span>
          </dt>
          <dd>{categoriesEntity.subcategoryListStyle}</dd>
          <dt>
            <span id="defaultTopPeriod">Default Top Period</span>
          </dt>
          <dd>{categoriesEntity.defaultTopPeriod}</dd>
          <dt>
            <span id="mailinglistMirror">Mailinglist Mirror</span>
          </dt>
          <dd>{categoriesEntity.mailinglistMirror ? 'true' : 'false'}</dd>
          <dt>
            <span id="minimumRequiredTags">Minimum Required Tags</span>
          </dt>
          <dd>{categoriesEntity.minimumRequiredTags}</dd>
          <dt>
            <span id="navigateToFirstPostAfterRead">Navigate To First Post After Read</span>
          </dt>
          <dd>{categoriesEntity.navigateToFirstPostAfterRead ? 'true' : 'false'}</dd>
          <dt>
            <span id="searchPriority">Search Priority</span>
          </dt>
          <dd>{categoriesEntity.searchPriority}</dd>
          <dt>
            <span id="allowGlobalTags">Allow Global Tags</span>
          </dt>
          <dd>{categoriesEntity.allowGlobalTags ? 'true' : 'false'}</dd>
          <dt>
            <span id="reviewableByGroupId">Reviewable By Group Id</span>
          </dt>
          <dd>{categoriesEntity.reviewableByGroupId}</dd>
          <dt>
            <span id="requiredTagGroupId">Required Tag Group Id</span>
          </dt>
          <dd>{categoriesEntity.requiredTagGroupId}</dd>
          <dt>
            <span id="minTagsFromRequiredGroup">Min Tags From Required Group</span>
          </dt>
          <dd>{categoriesEntity.minTagsFromRequiredGroup}</dd>
          <dt>
            <span id="readOnlyBanner">Read Only Banner</span>
          </dt>
          <dd>{categoriesEntity.readOnlyBanner}</dd>
          <dt>
            <span id="defaultListFilter">Default List Filter</span>
          </dt>
          <dd>{categoriesEntity.defaultListFilter}</dd>
          <dt>
            <span id="allowUnlimitedOwnerEditsOnFirstPost">Allow Unlimited Owner Edits On First Post</span>
          </dt>
          <dd>{categoriesEntity.allowUnlimitedOwnerEditsOnFirstPost ? 'true' : 'false'}</dd>
        </dl>
        <Button tag={Link} to="/categories" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/categories/${categoriesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CategoriesDetail;
