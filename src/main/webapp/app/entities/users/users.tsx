import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate, TextFormat, getSortState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ASC, DESC, ITEMS_PER_PAGE, SORT } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUsers } from 'app/shared/model/users.model';
import { getEntities } from './users.reducer';

export const Users = (props: RouteComponentProps<{ url: string }>) => {
  const dispatch = useAppDispatch();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, ITEMS_PER_PAGE, 'id'), props.location.search)
  );

  const usersList = useAppSelector(state => state.users.entities);
  const loading = useAppSelector(state => state.users.loading);
  const totalItems = useAppSelector(state => state.users.totalItems);

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
      <h2 id="users-heading" data-cy="UsersHeading">
        Users
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} /> Refresh List
          </Button>
          <Link to="/users/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp; Create new Users
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {usersList && usersList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  ID <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('username')}>
                  Username <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('name')}>
                  Name <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('seenNotificationId')}>
                  Seen Notification Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('lastPostedAt')}>
                  Last Posted At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('passwordHash')}>
                  Password Hash <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('salt')}>
                  Salt <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('active')}>
                  Active <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('usernameLower')}>
                  Username Lower <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('lastSeenAt')}>
                  Last Seen At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('admin')}>
                  Admin <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('lastEmailedAt')}>
                  Last Emailed At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('trustLevel')}>
                  Trust Level <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('approved')}>
                  Approved <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('approvedById')}>
                  Approved By Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('approvedAt')}>
                  Approved At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('previousVisitAt')}>
                  Previous Visit At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('suspendedAt')}>
                  Suspended At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('suspendedTill')}>
                  Suspended Till <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('dateOfBirth')}>
                  Date Of Birth <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('views')}>
                  Views <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('flagLevel')}>
                  Flag Level <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('ipAddress')}>
                  Ip Address <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('moderator')}>
                  Moderator <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('title')}>
                  Title <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('uploadedAvatarId')}>
                  Uploaded Avatar Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('locale')}>
                  Locale <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('primaryGroupId')}>
                  Primary Group Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('registrationIpAddress')}>
                  Registration Ip Address <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('staged')}>
                  Staged <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('firstSeenAt')}>
                  First Seen At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('silencedTill')}>
                  Silenced Till <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('groupLockedTrustLevel')}>
                  Group Locked Trust Level <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('manualLockedTrustLevel')}>
                  Manual Locked Trust Level <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('secureIdentifier')}>
                  Secure Identifier <FontAwesomeIcon icon="sort" />
                </th>
                <th>
                  User Security Keys <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {usersList.map((users, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/users/${users.id}`} color="link" size="sm">
                      {users.id}
                    </Button>
                  </td>
                  <td>{users.username}</td>
                  <td>{users.name}</td>
                  <td>{users.seenNotificationId}</td>
                  <td>{users.lastPostedAt ? <TextFormat type="date" value={users.lastPostedAt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{users.passwordHash}</td>
                  <td>{users.salt}</td>
                  <td>{users.active ? 'true' : 'false'}</td>
                  <td>{users.usernameLower}</td>
                  <td>{users.lastSeenAt ? <TextFormat type="date" value={users.lastSeenAt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{users.admin ? 'true' : 'false'}</td>
                  <td>{users.lastEmailedAt ? <TextFormat type="date" value={users.lastEmailedAt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{users.trustLevel}</td>
                  <td>{users.approved ? 'true' : 'false'}</td>
                  <td>{users.approvedById}</td>
                  <td>{users.approvedAt ? <TextFormat type="date" value={users.approvedAt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>
                    {users.previousVisitAt ? <TextFormat type="date" value={users.previousVisitAt} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>{users.suspendedAt ? <TextFormat type="date" value={users.suspendedAt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{users.suspendedTill ? <TextFormat type="date" value={users.suspendedTill} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{users.dateOfBirth ? <TextFormat type="date" value={users.dateOfBirth} format={APP_LOCAL_DATE_FORMAT} /> : null}</td>
                  <td>{users.views}</td>
                  <td>{users.flagLevel}</td>
                  <td>{users.ipAddress}</td>
                  <td>{users.moderator ? 'true' : 'false'}</td>
                  <td>{users.title}</td>
                  <td>{users.uploadedAvatarId}</td>
                  <td>{users.locale}</td>
                  <td>{users.primaryGroupId}</td>
                  <td>{users.registrationIpAddress}</td>
                  <td>{users.staged ? 'true' : 'false'}</td>
                  <td>{users.firstSeenAt ? <TextFormat type="date" value={users.firstSeenAt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{users.silencedTill ? <TextFormat type="date" value={users.silencedTill} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{users.groupLockedTrustLevel}</td>
                  <td>{users.manualLockedTrustLevel}</td>
                  <td>{users.secureIdentifier}</td>
                  <td>
                    {users.userSecurityKeys ? (
                      <Link to={`/user-security-keys/${users.userSecurityKeys.id}`}>{users.userSecurityKeys.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/users/${users.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/users/${users.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="primary"
                        size="sm"
                        data-cy="entityEditButton"
                      >
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/users/${users.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
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
          !loading && <div className="alert alert-warning">No Users found</div>
        )}
      </div>
      {totalItems ? (
        <div className={usersList && usersList.length > 0 ? '' : 'd-none'}>
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

export default Users;
