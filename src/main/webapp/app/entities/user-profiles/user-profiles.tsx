import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate, getSortState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ASC, DESC, ITEMS_PER_PAGE, SORT } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUserProfiles } from 'app/shared/model/user-profiles.model';
import { getEntities } from './user-profiles.reducer';

export const UserProfiles = (props: RouteComponentProps<{ url: string }>) => {
  const dispatch = useAppDispatch();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, ITEMS_PER_PAGE, 'id'), props.location.search)
  );

  const userProfilesList = useAppSelector(state => state.userProfiles.entities);
  const loading = useAppSelector(state => state.userProfiles.loading);
  const totalItems = useAppSelector(state => state.userProfiles.totalItems);

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
      <h2 id="user-profiles-heading" data-cy="UserProfilesHeading">
        User Profiles
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} /> Refresh List
          </Button>
          <Link to="/user-profiles/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp; Create new User Profiles
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {userProfilesList && userProfilesList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  ID <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('userId')}>
                  User Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('location')}>
                  Location <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('website')}>
                  Website <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('bioRaw')}>
                  Bio Raw <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('bioCooked')}>
                  Bio Cooked <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('dismissedBannerKey')}>
                  Dismissed Banner Key <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('bioCookedVersion')}>
                  Bio Cooked Version <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('badgeGrantedTitle')}>
                  Badge Granted Title <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('views')}>
                  Views <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('profileBackgroundUploadId')}>
                  Profile Background Upload Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('cardBackgroundUploadId')}>
                  Card Background Upload Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('grantedTitleBadgeId')}>
                  Granted Title Badge Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('featuredTopicId')}>
                  Featured Topic Id <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {userProfilesList.map((userProfiles, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/user-profiles/${userProfiles.id}`} color="link" size="sm">
                      {userProfiles.id}
                    </Button>
                  </td>
                  <td>{userProfiles.userId}</td>
                  <td>{userProfiles.location}</td>
                  <td>{userProfiles.website}</td>
                  <td>{userProfiles.bioRaw}</td>
                  <td>{userProfiles.bioCooked}</td>
                  <td>{userProfiles.dismissedBannerKey}</td>
                  <td>{userProfiles.bioCookedVersion}</td>
                  <td>{userProfiles.badgeGrantedTitle ? 'true' : 'false'}</td>
                  <td>{userProfiles.views}</td>
                  <td>{userProfiles.profileBackgroundUploadId}</td>
                  <td>{userProfiles.cardBackgroundUploadId}</td>
                  <td>{userProfiles.grantedTitleBadgeId}</td>
                  <td>{userProfiles.featuredTopicId}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/user-profiles/${userProfiles.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/user-profiles/${userProfiles.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="primary"
                        size="sm"
                        data-cy="entityEditButton"
                      >
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/user-profiles/${userProfiles.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
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
          !loading && <div className="alert alert-warning">No User Profiles found</div>
        )}
      </div>
      {totalItems ? (
        <div className={userProfilesList && userProfilesList.length > 0 ? '' : 'd-none'}>
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

export default UserProfiles;
