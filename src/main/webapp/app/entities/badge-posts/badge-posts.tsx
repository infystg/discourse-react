import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { byteSize, Translate, TextFormat, getSortState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ASC, DESC, ITEMS_PER_PAGE, SORT } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IBadgePosts } from 'app/shared/model/badge-posts.model';
import { getEntities } from './badge-posts.reducer';

export const BadgePosts = (props: RouteComponentProps<{ url: string }>) => {
  const dispatch = useAppDispatch();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, ITEMS_PER_PAGE, 'id'), props.location.search)
  );

  const badgePostsList = useAppSelector(state => state.badgePosts.entities);
  const loading = useAppSelector(state => state.badgePosts.loading);
  const totalItems = useAppSelector(state => state.badgePosts.totalItems);

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
      <h2 id="badge-posts-heading" data-cy="BadgePostsHeading">
        Badge Posts
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} /> Refresh List
          </Button>
          <Link to="/badge-posts/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp; Create new Badge Posts
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {badgePostsList && badgePostsList.length > 0 ? (
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
                <th className="hand" onClick={sort('postNumber')}>
                  Post Number <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('raw')}>
                  Raw <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('cooked')}>
                  Cooked <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('replyToPostNumber')}>
                  Reply To Post Number <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('replyCount')}>
                  Reply Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('quoteCount')}>
                  Quote Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('deletedAt')}>
                  Deleted At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('offTopicCount')}>
                  Off Topic Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('likeCount')}>
                  Like Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('incomingLinkCount')}>
                  Incoming Link Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('bookmarkCount')}>
                  Bookmark Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('score')}>
                  Score <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('reads')}>
                  Reads <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('postType')}>
                  Post Type <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('sortOrder')}>
                  Sort Order <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('lastEditorId')}>
                  Last Editor Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('hidden')}>
                  Hidden <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('hiddenReasonId')}>
                  Hidden Reason Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('notifyModeratorsCount')}>
                  Notify Moderators Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('spamCount')}>
                  Spam Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('illegalCount')}>
                  Illegal Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('inappropriateCount')}>
                  Inappropriate Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('lastVersionAt')}>
                  Last Version At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('userDeleted')}>
                  User Deleted <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('replyToUserId')}>
                  Reply To User Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('percentRank')}>
                  Percent Rank <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('notifyUserCount')}>
                  Notify User Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('likeScore')}>
                  Like Score <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('deletedById')}>
                  Deleted By Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('editReason')}>
                  Edit Reason <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('wordCount')}>
                  Word Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('version')}>
                  Version <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('cookMethod')}>
                  Cook Method <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('wiki')}>
                  Wiki <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('bakedAt')}>
                  Baked At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('bakedVersion')}>
                  Baked Version <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('hiddenAt')}>
                  Hidden At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('selfEdits')}>
                  Self Edits <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('replyQuoted')}>
                  Reply Quoted <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('viaEmail')}>
                  Via Email <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('rawEmail')}>
                  Raw Email <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('publicVersion')}>
                  Public Version <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('actionCode')}>
                  Action Code <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('lockedById')}>
                  Locked By Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('imageUploadId')}>
                  Image Upload Id <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {badgePostsList.map((badgePosts, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/badge-posts/${badgePosts.id}`} color="link" size="sm">
                      {badgePosts.id}
                    </Button>
                  </td>
                  <td>{badgePosts.userId}</td>
                  <td>{badgePosts.topicId}</td>
                  <td>{badgePosts.postNumber}</td>
                  <td>{badgePosts.raw}</td>
                  <td>{badgePosts.cooked}</td>
                  <td>{badgePosts.replyToPostNumber}</td>
                  <td>{badgePosts.replyCount}</td>
                  <td>{badgePosts.quoteCount}</td>
                  <td>{badgePosts.deletedAt ? <TextFormat type="date" value={badgePosts.deletedAt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{badgePosts.offTopicCount}</td>
                  <td>{badgePosts.likeCount}</td>
                  <td>{badgePosts.incomingLinkCount}</td>
                  <td>{badgePosts.bookmarkCount}</td>
                  <td>{badgePosts.score}</td>
                  <td>{badgePosts.reads}</td>
                  <td>{badgePosts.postType}</td>
                  <td>{badgePosts.sortOrder}</td>
                  <td>{badgePosts.lastEditorId}</td>
                  <td>{badgePosts.hidden ? 'true' : 'false'}</td>
                  <td>{badgePosts.hiddenReasonId}</td>
                  <td>{badgePosts.notifyModeratorsCount}</td>
                  <td>{badgePosts.spamCount}</td>
                  <td>{badgePosts.illegalCount}</td>
                  <td>{badgePosts.inappropriateCount}</td>
                  <td>
                    {badgePosts.lastVersionAt ? <TextFormat type="date" value={badgePosts.lastVersionAt} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>{badgePosts.userDeleted ? 'true' : 'false'}</td>
                  <td>{badgePosts.replyToUserId}</td>
                  <td>{badgePosts.percentRank}</td>
                  <td>{badgePosts.notifyUserCount}</td>
                  <td>{badgePosts.likeScore}</td>
                  <td>{badgePosts.deletedById}</td>
                  <td>{badgePosts.editReason}</td>
                  <td>{badgePosts.wordCount}</td>
                  <td>{badgePosts.version}</td>
                  <td>{badgePosts.cookMethod}</td>
                  <td>{badgePosts.wiki ? 'true' : 'false'}</td>
                  <td>{badgePosts.bakedAt ? <TextFormat type="date" value={badgePosts.bakedAt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{badgePosts.bakedVersion}</td>
                  <td>{badgePosts.hiddenAt ? <TextFormat type="date" value={badgePosts.hiddenAt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{badgePosts.selfEdits}</td>
                  <td>{badgePosts.replyQuoted ? 'true' : 'false'}</td>
                  <td>{badgePosts.viaEmail ? 'true' : 'false'}</td>
                  <td>{badgePosts.rawEmail}</td>
                  <td>{badgePosts.publicVersion}</td>
                  <td>{badgePosts.actionCode}</td>
                  <td>{badgePosts.lockedById}</td>
                  <td>{badgePosts.imageUploadId}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/badge-posts/${badgePosts.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/badge-posts/${badgePosts.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="primary"
                        size="sm"
                        data-cy="entityEditButton"
                      >
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/badge-posts/${badgePosts.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
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
          !loading && <div className="alert alert-warning">No Badge Posts found</div>
        )}
      </div>
      {totalItems ? (
        <div className={badgePostsList && badgePostsList.length > 0 ? '' : 'd-none'}>
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

export default BadgePosts;
