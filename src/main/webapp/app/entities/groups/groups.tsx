import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate, getSortState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ASC, DESC, ITEMS_PER_PAGE, SORT } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IGroups } from 'app/shared/model/groups.model';
import { getEntities } from './groups.reducer';

export const Groups = (props: RouteComponentProps<{ url: string }>) => {
  const dispatch = useAppDispatch();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, ITEMS_PER_PAGE, 'id'), props.location.search)
  );

  const groupsList = useAppSelector(state => state.groups.entities);
  const loading = useAppSelector(state => state.groups.loading);
  const totalItems = useAppSelector(state => state.groups.totalItems);

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
      <h2 id="groups-heading" data-cy="GroupsHeading">
        Groups
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} /> Refresh List
          </Button>
          <Link to="/groups/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp; Create new Groups
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {groupsList && groupsList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  ID <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('name')}>
                  Name <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('automatic')}>
                  Automatic <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('userCount')}>
                  User Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('automaticMembershipEmailDomains')}>
                  Automatic Membership Email Domains <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('primaryGroup')}>
                  Primary Group <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('title')}>
                  Title <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('grantTrustLevel')}>
                  Grant Trust Level <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('incomingEmail')}>
                  Incoming Email <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('hasMessages')}>
                  Has Messages <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('flairUrl')}>
                  Flair Url <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('flairBgColor')}>
                  Flair Bg Color <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('flairColor')}>
                  Flair Color <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('bioRaw')}>
                  Bio Raw <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('bioCooked')}>
                  Bio Cooked <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('allowMembershipRequests')}>
                  Allow Membership Requests <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('fullName')}>
                  Full Name <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('defaultNotificationLevel')}>
                  Default Notification Level <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('visibilityLevel')}>
                  Visibility Level <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('publicExit')}>
                  Public Exit <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('publicAdmission')}>
                  Public Admission <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('membershipRequestTemplate')}>
                  Membership Request Template <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('messageableLevel')}>
                  Messageable Level <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('mentionableLevel')}>
                  Mentionable Level <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('smtpServer')}>
                  Smtp Server <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('smtpPort')}>
                  Smtp Port <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('smtpSsl')}>
                  Smtp Ssl <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('imapServer')}>
                  Imap Server <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('imapPort')}>
                  Imap Port <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('imapSsl')}>
                  Imap Ssl <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('imapMailboxName')}>
                  Imap Mailbox Name <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('imapUidValidity')}>
                  Imap Uid Validity <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('imapLastUid')}>
                  Imap Last Uid <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('emailUsername')}>
                  Email Username <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('emailPassword')}>
                  Email Password <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('publishReadState')}>
                  Publish Read State <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('membersVisibilityLevel')}>
                  Members Visibility Level <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('imapLastError')}>
                  Imap Last Error <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('imapOldEmails')}>
                  Imap Old Emails <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('imapNewEmails')}>
                  Imap New Emails <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('flairIcon')}>
                  Flair Icon <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('flairUploadId')}>
                  Flair Upload Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('allowUnknownSenderTopicReplies')}>
                  Allow Unknown Sender Topic Replies <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {groupsList.map((groups, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/groups/${groups.id}`} color="link" size="sm">
                      {groups.id}
                    </Button>
                  </td>
                  <td>{groups.name}</td>
                  <td>{groups.automatic ? 'true' : 'false'}</td>
                  <td>{groups.userCount}</td>
                  <td>{groups.automaticMembershipEmailDomains}</td>
                  <td>{groups.primaryGroup ? 'true' : 'false'}</td>
                  <td>{groups.title}</td>
                  <td>{groups.grantTrustLevel}</td>
                  <td>{groups.incomingEmail}</td>
                  <td>{groups.hasMessages ? 'true' : 'false'}</td>
                  <td>{groups.flairUrl}</td>
                  <td>{groups.flairBgColor}</td>
                  <td>{groups.flairColor}</td>
                  <td>{groups.bioRaw}</td>
                  <td>{groups.bioCooked}</td>
                  <td>{groups.allowMembershipRequests ? 'true' : 'false'}</td>
                  <td>{groups.fullName}</td>
                  <td>{groups.defaultNotificationLevel}</td>
                  <td>{groups.visibilityLevel}</td>
                  <td>{groups.publicExit ? 'true' : 'false'}</td>
                  <td>{groups.publicAdmission ? 'true' : 'false'}</td>
                  <td>{groups.membershipRequestTemplate}</td>
                  <td>{groups.messageableLevel}</td>
                  <td>{groups.mentionableLevel}</td>
                  <td>{groups.smtpServer}</td>
                  <td>{groups.smtpPort}</td>
                  <td>{groups.smtpSsl ? 'true' : 'false'}</td>
                  <td>{groups.imapServer}</td>
                  <td>{groups.imapPort}</td>
                  <td>{groups.imapSsl ? 'true' : 'false'}</td>
                  <td>{groups.imapMailboxName}</td>
                  <td>{groups.imapUidValidity}</td>
                  <td>{groups.imapLastUid}</td>
                  <td>{groups.emailUsername}</td>
                  <td>{groups.emailPassword}</td>
                  <td>{groups.publishReadState ? 'true' : 'false'}</td>
                  <td>{groups.membersVisibilityLevel}</td>
                  <td>{groups.imapLastError}</td>
                  <td>{groups.imapOldEmails}</td>
                  <td>{groups.imapNewEmails}</td>
                  <td>{groups.flairIcon}</td>
                  <td>{groups.flairUploadId}</td>
                  <td>{groups.allowUnknownSenderTopicReplies ? 'true' : 'false'}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/groups/${groups.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/groups/${groups.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="primary"
                        size="sm"
                        data-cy="entityEditButton"
                      >
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/groups/${groups.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
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
          !loading && <div className="alert alert-warning">No Groups found</div>
        )}
      </div>
      {totalItems ? (
        <div className={groupsList && groupsList.length > 0 ? '' : 'd-none'}>
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

export default Groups;
