import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate, getSortState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ASC, DESC, ITEMS_PER_PAGE, SORT } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUserHistories } from 'app/shared/model/user-histories.model';
import { getEntities } from './user-histories.reducer';

export const UserHistories = (props: RouteComponentProps<{ url: string }>) => {
  const dispatch = useAppDispatch();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, ITEMS_PER_PAGE, 'id'), props.location.search)
  );

  const userHistoriesList = useAppSelector(state => state.userHistories.entities);
  const loading = useAppSelector(state => state.userHistories.loading);
  const totalItems = useAppSelector(state => state.userHistories.totalItems);

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
      <h2 id="user-histories-heading" data-cy="UserHistoriesHeading">
        User Histories
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} /> Refresh List
          </Button>
          <Link to="/user-histories/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp; Create new User Histories
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {userHistoriesList && userHistoriesList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  ID <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('action')}>
                  Action <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('actingUserId')}>
                  Acting User Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('targetUserId')}>
                  Target User Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('details')}>
                  Details <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('context')}>
                  Context <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('ipAddress')}>
                  Ip Address <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('email')}>
                  Email <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('subject')}>
                  Subject <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('previousValue')}>
                  Previous Value <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('newValue')}>
                  New Value <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('topicId')}>
                  Topic Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('adminOnly')}>
                  Admin Only <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('postId')}>
                  Post Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('customType')}>
                  Custom Type <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('categoryId')}>
                  Category Id <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {userHistoriesList.map((userHistories, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/user-histories/${userHistories.id}`} color="link" size="sm">
                      {userHistories.id}
                    </Button>
                  </td>
                  <td>{userHistories.action}</td>
                  <td>{userHistories.actingUserId}</td>
                  <td>{userHistories.targetUserId}</td>
                  <td>{userHistories.details}</td>
                  <td>{userHistories.context}</td>
                  <td>{userHistories.ipAddress}</td>
                  <td>{userHistories.email}</td>
                  <td>{userHistories.subject}</td>
                  <td>{userHistories.previousValue}</td>
                  <td>{userHistories.newValue}</td>
                  <td>{userHistories.topicId}</td>
                  <td>{userHistories.adminOnly ? 'true' : 'false'}</td>
                  <td>{userHistories.postId}</td>
                  <td>{userHistories.customType}</td>
                  <td>{userHistories.categoryId}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/user-histories/${userHistories.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/user-histories/${userHistories.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="primary"
                        size="sm"
                        data-cy="entityEditButton"
                      >
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/user-histories/${userHistories.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
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
          !loading && <div className="alert alert-warning">No User Histories found</div>
        )}
      </div>
      {totalItems ? (
        <div className={userHistoriesList && userHistoriesList.length > 0 ? '' : 'd-none'}>
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

export default UserHistories;
