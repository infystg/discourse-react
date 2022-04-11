import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate, TextFormat, getSortState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ASC, DESC, ITEMS_PER_PAGE, SORT } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IInvites } from 'app/shared/model/invites.model';
import { getEntities } from './invites.reducer';

export const Invites = (props: RouteComponentProps<{ url: string }>) => {
  const dispatch = useAppDispatch();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, ITEMS_PER_PAGE, 'id'), props.location.search)
  );

  const invitesList = useAppSelector(state => state.invites.entities);
  const loading = useAppSelector(state => state.invites.loading);
  const totalItems = useAppSelector(state => state.invites.totalItems);

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
      <h2 id="invites-heading" data-cy="InvitesHeading">
        Invites
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} /> Refresh List
          </Button>
          <Link to="/invites/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp; Create new Invites
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {invitesList && invitesList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  ID <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('inviteKey')}>
                  Invite Key <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('email')}>
                  Email <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('invitedById')}>
                  Invited By Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('userId')}>
                  User Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('redeemedAt')}>
                  Redeemed At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('deletedAt')}>
                  Deleted At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('deletedById')}>
                  Deleted By Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('invalidatedAt')}>
                  Invalidated At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('moderator')}>
                  Moderator <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('customMessage')}>
                  Custom Message <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('emailedStatus')}>
                  Emailed Status <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('maxRedemptionsAllowed')}>
                  Max Redemptions Allowed <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('redemptionCount')}>
                  Redemption Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('expiresAt')}>
                  Expires At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('emailToken')}>
                  Email Token <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {invitesList.map((invites, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/invites/${invites.id}`} color="link" size="sm">
                      {invites.id}
                    </Button>
                  </td>
                  <td>{invites.inviteKey}</td>
                  <td>{invites.email}</td>
                  <td>{invites.invitedById}</td>
                  <td>{invites.userId}</td>
                  <td>{invites.redeemedAt ? <TextFormat type="date" value={invites.redeemedAt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{invites.deletedAt ? <TextFormat type="date" value={invites.deletedAt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{invites.deletedById}</td>
                  <td>
                    {invites.invalidatedAt ? <TextFormat type="date" value={invites.invalidatedAt} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>{invites.moderator ? 'true' : 'false'}</td>
                  <td>{invites.customMessage}</td>
                  <td>{invites.emailedStatus}</td>
                  <td>{invites.maxRedemptionsAllowed}</td>
                  <td>{invites.redemptionCount}</td>
                  <td>{invites.expiresAt ? <TextFormat type="date" value={invites.expiresAt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{invites.emailToken}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/invites/${invites.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/invites/${invites.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="primary"
                        size="sm"
                        data-cy="entityEditButton"
                      >
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/invites/${invites.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
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
          !loading && <div className="alert alert-warning">No Invites found</div>
        )}
      </div>
      {totalItems ? (
        <div className={invitesList && invitesList.length > 0 ? '' : 'd-none'}>
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

export default Invites;
