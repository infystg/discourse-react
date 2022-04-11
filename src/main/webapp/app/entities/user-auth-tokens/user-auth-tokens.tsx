import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate, TextFormat, getSortState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ASC, DESC, ITEMS_PER_PAGE, SORT } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUserAuthTokens } from 'app/shared/model/user-auth-tokens.model';
import { getEntities } from './user-auth-tokens.reducer';

export const UserAuthTokens = (props: RouteComponentProps<{ url: string }>) => {
  const dispatch = useAppDispatch();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, ITEMS_PER_PAGE, 'id'), props.location.search)
  );

  const userAuthTokensList = useAppSelector(state => state.userAuthTokens.entities);
  const loading = useAppSelector(state => state.userAuthTokens.loading);
  const totalItems = useAppSelector(state => state.userAuthTokens.totalItems);

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
      <h2 id="user-auth-tokens-heading" data-cy="UserAuthTokensHeading">
        User Auth Tokens
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} /> Refresh List
          </Button>
          <Link to="/user-auth-tokens/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp; Create new User Auth Tokens
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {userAuthTokensList && userAuthTokensList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  ID <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('userId')}>
                  User Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('authToken')}>
                  Auth Token <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('prevAuthToken')}>
                  Prev Auth Token <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('userAgent')}>
                  User Agent <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('authTokenSeen')}>
                  Auth Token Seen <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('clientIp')}>
                  Client Ip <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('rotatedAt')}>
                  Rotated At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('seenAt')}>
                  Seen At <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {userAuthTokensList.map((userAuthTokens, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/user-auth-tokens/${userAuthTokens.id}`} color="link" size="sm">
                      {userAuthTokens.id}
                    </Button>
                  </td>
                  <td>{userAuthTokens.userId}</td>
                  <td>{userAuthTokens.authToken}</td>
                  <td>{userAuthTokens.prevAuthToken}</td>
                  <td>{userAuthTokens.userAgent}</td>
                  <td>{userAuthTokens.authTokenSeen ? 'true' : 'false'}</td>
                  <td>{userAuthTokens.clientIp}</td>
                  <td>
                    {userAuthTokens.rotatedAt ? <TextFormat type="date" value={userAuthTokens.rotatedAt} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>
                    {userAuthTokens.seenAt ? <TextFormat type="date" value={userAuthTokens.seenAt} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/user-auth-tokens/${userAuthTokens.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/user-auth-tokens/${userAuthTokens.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="primary"
                        size="sm"
                        data-cy="entityEditButton"
                      >
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/user-auth-tokens/${userAuthTokens.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
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
          !loading && <div className="alert alert-warning">No User Auth Tokens found</div>
        )}
      </div>
      {totalItems ? (
        <div className={userAuthTokensList && userAuthTokensList.length > 0 ? '' : 'd-none'}>
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

export default UserAuthTokens;
