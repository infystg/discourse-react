import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate, getSortState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ASC, DESC, ITEMS_PER_PAGE, SORT } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IIncomingEmails } from 'app/shared/model/incoming-emails.model';
import { getEntities } from './incoming-emails.reducer';

export const IncomingEmails = (props: RouteComponentProps<{ url: string }>) => {
  const dispatch = useAppDispatch();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, ITEMS_PER_PAGE, 'id'), props.location.search)
  );

  const incomingEmailsList = useAppSelector(state => state.incomingEmails.entities);
  const loading = useAppSelector(state => state.incomingEmails.loading);
  const totalItems = useAppSelector(state => state.incomingEmails.totalItems);

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
      <h2 id="incoming-emails-heading" data-cy="IncomingEmailsHeading">
        Incoming Emails
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} /> Refresh List
          </Button>
          <Link to="/incoming-emails/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp; Create new Incoming Emails
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {incomingEmailsList && incomingEmailsList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  ID <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('userId')}>
                  User Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('topicId')}>
                  Topic Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('postId')}>
                  Post Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('raw')}>
                  Raw <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('error')}>
                  Error <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('messageId')}>
                  Message Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('fromAddress')}>
                  From Address <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('toAddresses')}>
                  To Addresses <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('ccAddresses')}>
                  Cc Addresses <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('subject')}>
                  Subject <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('rejectionMessage')}>
                  Rejection Message <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('isAutoGenerated')}>
                  Is Auto Generated <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('isBounce')}>
                  Is Bounce <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('imapUidValidity')}>
                  Imap Uid Validity <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('imapUid')}>
                  Imap Uid <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('imapSync')}>
                  Imap Sync <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('imapGroupId')}>
                  Imap Group Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('imapMissing')}>
                  Imap Missing <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('createdVia')}>
                  Created Via <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {incomingEmailsList.map((incomingEmails, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/incoming-emails/${incomingEmails.id}`} color="link" size="sm">
                      {incomingEmails.id}
                    </Button>
                  </td>
                  <td>{incomingEmails.userId}</td>
                  <td>{incomingEmails.topicId}</td>
                  <td>{incomingEmails.postId}</td>
                  <td>{incomingEmails.raw}</td>
                  <td>{incomingEmails.error}</td>
                  <td>{incomingEmails.messageId}</td>
                  <td>{incomingEmails.fromAddress}</td>
                  <td>{incomingEmails.toAddresses}</td>
                  <td>{incomingEmails.ccAddresses}</td>
                  <td>{incomingEmails.subject}</td>
                  <td>{incomingEmails.rejectionMessage}</td>
                  <td>{incomingEmails.isAutoGenerated ? 'true' : 'false'}</td>
                  <td>{incomingEmails.isBounce ? 'true' : 'false'}</td>
                  <td>{incomingEmails.imapUidValidity}</td>
                  <td>{incomingEmails.imapUid}</td>
                  <td>{incomingEmails.imapSync ? 'true' : 'false'}</td>
                  <td>{incomingEmails.imapGroupId}</td>
                  <td>{incomingEmails.imapMissing ? 'true' : 'false'}</td>
                  <td>{incomingEmails.createdVia}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/incoming-emails/${incomingEmails.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/incoming-emails/${incomingEmails.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="primary"
                        size="sm"
                        data-cy="entityEditButton"
                      >
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/incoming-emails/${incomingEmails.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
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
          !loading && <div className="alert alert-warning">No Incoming Emails found</div>
        )}
      </div>
      {totalItems ? (
        <div className={incomingEmailsList && incomingEmailsList.length > 0 ? '' : 'd-none'}>
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

export default IncomingEmails;
