import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate, TextFormat, getSortState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ASC, DESC, ITEMS_PER_PAGE, SORT } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUserOptions } from 'app/shared/model/user-options.model';
import { getEntities } from './user-options.reducer';

export const UserOptions = (props: RouteComponentProps<{ url: string }>) => {
  const dispatch = useAppDispatch();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, ITEMS_PER_PAGE, 'id'), props.location.search)
  );

  const userOptionsList = useAppSelector(state => state.userOptions.entities);
  const loading = useAppSelector(state => state.userOptions.loading);
  const totalItems = useAppSelector(state => state.userOptions.totalItems);

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
      <h2 id="user-options-heading" data-cy="UserOptionsHeading">
        User Options
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} /> Refresh List
          </Button>
          <Link to="/user-options/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp; Create new User Options
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {userOptionsList && userOptionsList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  ID <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('userId')}>
                  User Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('mailingListMode')}>
                  Mailing List Mode <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('emailDigests')}>
                  Email Digests <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('externalLinksInNewTab')}>
                  External Links In New Tab <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('enableQuoting')}>
                  Enable Quoting <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('dynamicFavicon')}>
                  Dynamic Favicon <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('disableJumpReply')}>
                  Disable Jump Reply <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('automaticallyUnpinTopics')}>
                  Automatically Unpin Topics <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('digestAfterMinutes')}>
                  Digest After Minutes <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('autoTrackTopicsAfterMsecs')}>
                  Auto Track Topics After Msecs <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('newTopicDurationMinutes')}>
                  New Topic Duration Minutes <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('lastRedirectedToTopAt')}>
                  Last Redirected To Top At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('emailPreviousReplies')}>
                  Email Previous Replies <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('emailInReplyTo')}>
                  Email In Reply To <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('likeNotificationFrequency')}>
                  Like Notification Frequency <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('mailingListModeFrequency')}>
                  Mailing List Mode Frequency <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('includeTl0InDigests')}>
                  Include Tl 0 In Digests <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('notificationLevelWhenReplying')}>
                  Notification Level When Replying <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('themeKeySeq')}>
                  Theme Key Seq <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('allowPrivateMessages')}>
                  Allow Private Messages <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('homepageId')}>
                  Homepage Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('themeIds')}>
                  Theme Ids <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('hideProfileAndPresence')}>
                  Hide Profile And Presence <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('textSizeKey')}>
                  Text Size Key <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('textSizeSeq')}>
                  Text Size Seq <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('emailLevel')}>
                  Email Level <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('emailMessagesLevel')}>
                  Email Messages Level <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('titleCountModeKey')}>
                  Title Count Mode Key <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('enableDefer')}>
                  Enable Defer <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('timezone')}>
                  Timezone <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('enableAllowedPmUsers')}>
                  Enable Allowed Pm Users <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('darkSchemeId')}>
                  Dark Scheme Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('skipNewUserTips')}>
                  Skip New User Tips <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('colorSchemeId')}>
                  Color Scheme Id <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {userOptionsList.map((userOptions, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/user-options/${userOptions.id}`} color="link" size="sm">
                      {userOptions.id}
                    </Button>
                  </td>
                  <td>{userOptions.userId}</td>
                  <td>{userOptions.mailingListMode ? 'true' : 'false'}</td>
                  <td>{userOptions.emailDigests ? 'true' : 'false'}</td>
                  <td>{userOptions.externalLinksInNewTab ? 'true' : 'false'}</td>
                  <td>{userOptions.enableQuoting ? 'true' : 'false'}</td>
                  <td>{userOptions.dynamicFavicon ? 'true' : 'false'}</td>
                  <td>{userOptions.disableJumpReply ? 'true' : 'false'}</td>
                  <td>{userOptions.automaticallyUnpinTopics ? 'true' : 'false'}</td>
                  <td>{userOptions.digestAfterMinutes}</td>
                  <td>{userOptions.autoTrackTopicsAfterMsecs}</td>
                  <td>{userOptions.newTopicDurationMinutes}</td>
                  <td>
                    {userOptions.lastRedirectedToTopAt ? (
                      <TextFormat type="date" value={userOptions.lastRedirectedToTopAt} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{userOptions.emailPreviousReplies}</td>
                  <td>{userOptions.emailInReplyTo ? 'true' : 'false'}</td>
                  <td>{userOptions.likeNotificationFrequency}</td>
                  <td>{userOptions.mailingListModeFrequency}</td>
                  <td>{userOptions.includeTl0InDigests ? 'true' : 'false'}</td>
                  <td>{userOptions.notificationLevelWhenReplying}</td>
                  <td>{userOptions.themeKeySeq}</td>
                  <td>{userOptions.allowPrivateMessages ? 'true' : 'false'}</td>
                  <td>{userOptions.homepageId}</td>
                  <td>{userOptions.themeIds}</td>
                  <td>{userOptions.hideProfileAndPresence ? 'true' : 'false'}</td>
                  <td>{userOptions.textSizeKey}</td>
                  <td>{userOptions.textSizeSeq}</td>
                  <td>{userOptions.emailLevel}</td>
                  <td>{userOptions.emailMessagesLevel}</td>
                  <td>{userOptions.titleCountModeKey}</td>
                  <td>{userOptions.enableDefer ? 'true' : 'false'}</td>
                  <td>{userOptions.timezone}</td>
                  <td>{userOptions.enableAllowedPmUsers ? 'true' : 'false'}</td>
                  <td>{userOptions.darkSchemeId}</td>
                  <td>{userOptions.skipNewUserTips ? 'true' : 'false'}</td>
                  <td>{userOptions.colorSchemeId}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/user-options/${userOptions.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/user-options/${userOptions.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="primary"
                        size="sm"
                        data-cy="entityEditButton"
                      >
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/user-options/${userOptions.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
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
          !loading && <div className="alert alert-warning">No User Options found</div>
        )}
      </div>
      {totalItems ? (
        <div className={userOptionsList && userOptionsList.length > 0 ? '' : 'd-none'}>
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

export default UserOptions;
