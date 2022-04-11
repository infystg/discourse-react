import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate, TextFormat, getSortState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ASC, DESC, ITEMS_PER_PAGE, SORT } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUserApiKeys } from 'app/shared/model/user-api-keys.model';
import { getEntities } from './user-api-keys.reducer';

export const UserApiKeys = (props: RouteComponentProps<{ url: string }>) => {
  const dispatch = useAppDispatch();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, ITEMS_PER_PAGE, 'id'), props.location.search)
  );

  const userApiKeysList = useAppSelector(state => state.userApiKeys.entities);
  const loading = useAppSelector(state => state.userApiKeys.loading);
  const totalItems = useAppSelector(state => state.userApiKeys.totalItems);

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
      <h2 id="user-api-keys-heading" data-cy="UserApiKeysHeading">
        User Api Keys
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} /> Refresh List
          </Button>
          <Link to="/user-api-keys/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp; Create new User Api Keys
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {userApiKeysList && userApiKeysList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  ID <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('userId')}>
                  User Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('clientId')}>
                  Client Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('applicationName')}>
                  Application Name <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('pushUrl')}>
                  Push Url <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('revokedAt')}>
                  Revoked At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('scopes')}>
                  Scopes <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('lastUsedAt')}>
                  Last Used At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('keyHash')}>
                  Key Hash <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {userApiKeysList.map((userApiKeys, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/user-api-keys/${userApiKeys.id}`} color="link" size="sm">
                      {userApiKeys.id}
                    </Button>
                  </td>
                  <td>{userApiKeys.userId}</td>
                  <td>{userApiKeys.clientId}</td>
                  <td>{userApiKeys.applicationName}</td>
                  <td>{userApiKeys.pushUrl}</td>
                  <td>
                    {userApiKeys.revokedAt ? <TextFormat type="date" value={userApiKeys.revokedAt} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>{userApiKeys.scopes}</td>
                  <td>
                    {userApiKeys.lastUsedAt ? <TextFormat type="date" value={userApiKeys.lastUsedAt} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>{userApiKeys.keyHash}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/user-api-keys/${userApiKeys.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/user-api-keys/${userApiKeys.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="primary"
                        size="sm"
                        data-cy="entityEditButton"
                      >
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/user-api-keys/${userApiKeys.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
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
          !loading && <div className="alert alert-warning">No User Api Keys found</div>
        )}
      </div>
      {totalItems ? (
        <div className={userApiKeysList && userApiKeysList.length > 0 ? '' : 'd-none'}>
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

export default UserApiKeys;
