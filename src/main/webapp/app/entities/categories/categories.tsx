import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate, getSortState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ASC, DESC, ITEMS_PER_PAGE, SORT } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICategories } from 'app/shared/model/categories.model';
import { getEntities } from './categories.reducer';

export const Categories = (props: RouteComponentProps<{ url: string }>) => {
  const dispatch = useAppDispatch();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, ITEMS_PER_PAGE, 'id'), props.location.search)
  );

  const categoriesList = useAppSelector(state => state.categories.entities);
  const loading = useAppSelector(state => state.categories.loading);
  const totalItems = useAppSelector(state => state.categories.totalItems);

  const getAllEntities = () => {
    dispatch(
      getEntities({
        page: paginationState.activePage - 1,
        size: paginationState.itemsPerPage,
        sort: `${paginationState.sort},${paginationState.order}`,
      })
    );
  };

  const sortEntities = () => {
    getAllEntities();
    const endURL = `?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`;
    if (props.location.search !== endURL) {
      props.history.push(`${props.location.pathname}${endURL}`);
    }
  };

  useEffect(() => {
    sortEntities();
  }, [paginationState.activePage, paginationState.order, paginationState.sort]);

  useEffect(() => {
    const params = new URLSearchParams(props.location.search);
    const page = params.get('page');
    const sort = params.get(SORT);
    if (page && sort) {
      const sortSplit = sort.split(',');
      setPaginationState({
        ...paginationState,
        activePage: +page,
        sort: sortSplit[0],
        order: sortSplit[1],
      });
    }
  }, [props.location.search]);

  const sort = p => () => {
    setPaginationState({
      ...paginationState,
      order: paginationState.order === ASC ? DESC : ASC,
      sort: p,
    });
  };

  const handlePagination = currentPage =>
    setPaginationState({
      ...paginationState,
      activePage: currentPage,
    });

  const handleSyncList = () => {
    sortEntities();
  };

  const { match } = props;

  return (
    <div>
      <h2 id="categories-heading" data-cy="CategoriesHeading">
        Categories
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} /> Refresh List
          </Button>
          <Link to="/categories/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp; Create new Categories
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {categoriesList && categoriesList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  ID <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('name')}>
                  Name <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('color')}>
                  Color <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('topicId')}>
                  Topic Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('topicCount')}>
                  Topic Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('userId')}>
                  User Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('topicsYear')}>
                  Topics Year <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('topicsMonth')}>
                  Topics Month <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('topicsWeek')}>
                  Topics Week <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('slug')}>
                  Slug <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('description')}>
                  Description <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('textColor')}>
                  Text Color <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('readRestricted')}>
                  Read Restricted <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('autoCloseHours')}>
                  Auto Close Hours <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('postCount')}>
                  Post Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('latestPostId')}>
                  Latest Post Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('latestTopicId')}>
                  Latest Topic Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('position')}>
                  Position <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('parentCategoryId')}>
                  Parent Category Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('postsYear')}>
                  Posts Year <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('postsMonth')}>
                  Posts Month <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('postsWeek')}>
                  Posts Week <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('emailIn')}>
                  Email In <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('emailInAllowStrangers')}>
                  Email In Allow Strangers <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('topicsDay')}>
                  Topics Day <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('postsDay')}>
                  Posts Day <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('allowBadges')}>
                  Allow Badges <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('nameLower')}>
                  Name Lower <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('autoCloseBasedOnLastPost')}>
                  Auto Close Based On Last Post <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('topicTemplate')}>
                  Topic Template <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('containsMessages')}>
                  Contains Messages <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('sortOrder')}>
                  Sort Order <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('sortAscending')}>
                  Sort Ascending <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('uploadedLogoId')}>
                  Uploaded Logo Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('uploadedBackgroundId')}>
                  Uploaded Background Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('topicFeaturedLinkAllowed')}>
                  Topic Featured Link Allowed <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('allTopicsWiki')}>
                  All Topics Wiki <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('showSubcategoryList')}>
                  Show Subcategory List <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('numFeaturedTopics')}>
                  Num Featured Topics <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('defaultView')}>
                  Default View <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('subcategoryListStyle')}>
                  Subcategory List Style <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('defaultTopPeriod')}>
                  Default Top Period <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('mailinglistMirror')}>
                  Mailinglist Mirror <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('minimumRequiredTags')}>
                  Minimum Required Tags <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('navigateToFirstPostAfterRead')}>
                  Navigate To First Post After Read <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('searchPriority')}>
                  Search Priority <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('allowGlobalTags')}>
                  Allow Global Tags <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('reviewableByGroupId')}>
                  Reviewable By Group Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('requiredTagGroupId')}>
                  Required Tag Group Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('minTagsFromRequiredGroup')}>
                  Min Tags From Required Group <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('readOnlyBanner')}>
                  Read Only Banner <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('defaultListFilter')}>
                  Default List Filter <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('allowUnlimitedOwnerEditsOnFirstPost')}>
                  Allow Unlimited Owner Edits On First Post <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {categoriesList.map((categories, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/categories/${categories.id}`} color="link" size="sm">
                      {categories.id}
                    </Button>
                  </td>
                  <td>{categories.name}</td>
                  <td>{categories.color}</td>
                  <td>{categories.topicId}</td>
                  <td>{categories.topicCount}</td>
                  <td>{categories.userId}</td>
                  <td>{categories.topicsYear}</td>
                  <td>{categories.topicsMonth}</td>
                  <td>{categories.topicsWeek}</td>
                  <td>{categories.slug}</td>
                  <td>{categories.description}</td>
                  <td>{categories.textColor}</td>
                  <td>{categories.readRestricted ? 'true' : 'false'}</td>
                  <td>{categories.autoCloseHours}</td>
                  <td>{categories.postCount}</td>
                  <td>{categories.latestPostId}</td>
                  <td>{categories.latestTopicId}</td>
                  <td>{categories.position}</td>
                  <td>{categories.parentCategoryId}</td>
                  <td>{categories.postsYear}</td>
                  <td>{categories.postsMonth}</td>
                  <td>{categories.postsWeek}</td>
                  <td>{categories.emailIn}</td>
                  <td>{categories.emailInAllowStrangers ? 'true' : 'false'}</td>
                  <td>{categories.topicsDay}</td>
                  <td>{categories.postsDay}</td>
                  <td>{categories.allowBadges ? 'true' : 'false'}</td>
                  <td>{categories.nameLower}</td>
                  <td>{categories.autoCloseBasedOnLastPost ? 'true' : 'false'}</td>
                  <td>{categories.topicTemplate}</td>
                  <td>{categories.containsMessages ? 'true' : 'false'}</td>
                  <td>{categories.sortOrder}</td>
                  <td>{categories.sortAscending ? 'true' : 'false'}</td>
                  <td>{categories.uploadedLogoId}</td>
                  <td>{categories.uploadedBackgroundId}</td>
                  <td>{categories.topicFeaturedLinkAllowed ? 'true' : 'false'}</td>
                  <td>{categories.allTopicsWiki ? 'true' : 'false'}</td>
                  <td>{categories.showSubcategoryList ? 'true' : 'false'}</td>
                  <td>{categories.numFeaturedTopics}</td>
                  <td>{categories.defaultView}</td>
                  <td>{categories.subcategoryListStyle}</td>
                  <td>{categories.defaultTopPeriod}</td>
                  <td>{categories.mailinglistMirror ? 'true' : 'false'}</td>
                  <td>{categories.minimumRequiredTags}</td>
                  <td>{categories.navigateToFirstPostAfterRead ? 'true' : 'false'}</td>
                  <td>{categories.searchPriority}</td>
                  <td>{categories.allowGlobalTags ? 'true' : 'false'}</td>
                  <td>{categories.reviewableByGroupId}</td>
                  <td>{categories.requiredTagGroupId}</td>
                  <td>{categories.minTagsFromRequiredGroup}</td>
                  <td>{categories.readOnlyBanner}</td>
                  <td>{categories.defaultListFilter}</td>
                  <td>{categories.allowUnlimitedOwnerEditsOnFirstPost ? 'true' : 'false'}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/categories/${categories.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/categories/${categories.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="primary"
                        size="sm"
                        data-cy="entityEditButton"
                      >
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/categories/${categories.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="danger"
                        size="sm"
                        data-cy="entityDeleteButton"
                      >
                        <FontAwesomeIcon icon="trash" /> <span className="d-none d-md-inline">Delete</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && <div className="alert alert-warning">No Categories found</div>
        )}
      </div>
      {totalItems ? (
        <div className={categoriesList && categoriesList.length > 0 ? '' : 'd-none'}>
          <div className="justify-content-center d-flex">
            <JhiItemCount page={paginationState.activePage} total={totalItems} itemsPerPage={paginationState.itemsPerPage} />
          </div>
          <div className="justify-content-center d-flex">
            <JhiPagination
              activePage={paginationState.activePage}
              onSelect={handlePagination}
              maxButtons={5}
              itemsPerPage={paginationState.itemsPerPage}
              totalItems={totalItems}
            />
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Categories;
