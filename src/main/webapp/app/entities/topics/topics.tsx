import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate, TextFormat, getSortState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ASC, DESC, ITEMS_PER_PAGE, SORT } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ITopics } from 'app/shared/model/topics.model';
import { getEntities } from './topics.reducer';

export const Topics = (props: RouteComponentProps<{ url: string }>) => {
  const dispatch = useAppDispatch();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, ITEMS_PER_PAGE, 'id'), props.location.search)
  );

  const topicsList = useAppSelector(state => state.topics.entities);
  const loading = useAppSelector(state => state.topics.loading);
  const totalItems = useAppSelector(state => state.topics.totalItems);

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
      <h2 id="topics-heading" data-cy="TopicsHeading">
        Topics
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} /> Refresh List
          </Button>
          <Link to="/topics/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp; Create new Topics
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {topicsList && topicsList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  ID <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('title')}>
                  Title <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('lastPostedAt')}>
                  Last Posted At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('views')}>
                  Views <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('postsCount')}>
                  Posts Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('userId')}>
                  User Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('lastPostUserId')}>
                  Last Post User Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('replyCount')}>
                  Reply Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('featuredUser1Id')}>
                  Featured User 1 Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('featuredUser2Id')}>
                  Featured User 2 Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('featuredUser3Id')}>
                  Featured User 3 Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('deletedAt')}>
                  Deleted At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('highestPostNumber')}>
                  Highest Post Number <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('likeCount')}>
                  Like Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('incomingLinkCount')}>
                  Incoming Link Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('categoryId')}>
                  Category Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('visible')}>
                  Visible <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('moderatorPostsCount')}>
                  Moderator Posts Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('closed')}>
                  Closed <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('archived')}>
                  Archived <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('bumpedAt')}>
                  Bumped At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('hasSummary')}>
                  Has Summary <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('archetype')}>
                  Archetype <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('featuredUser4Id')}>
                  Featured User 4 Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('notifyModeratorsCount')}>
                  Notify Moderators Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('spamCount')}>
                  Spam Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('pinnedAt')}>
                  Pinned At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('score')}>
                  Score <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('percentRank')}>
                  Percent Rank <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('subtype')}>
                  Subtype <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('slug')}>
                  Slug <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('deletedById')}>
                  Deleted By Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('participantCount')}>
                  Participant Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('wordCount')}>
                  Word Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('excerpt')}>
                  Excerpt <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('pinnedGlobally')}>
                  Pinned Globally <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('pinnedUntil')}>
                  Pinned Until <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('fancyTitle')}>
                  Fancy Title <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('highestStaffPostNumber')}>
                  Highest Staff Post Number <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('featuredLink')}>
                  Featured Link <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('reviewableScore')}>
                  Reviewable Score <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('imageUploadId')}>
                  Image Upload Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('slowModeSeconds')}>
                  Slow Mode Seconds <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {topicsList.map((topics, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/topics/${topics.id}`} color="link" size="sm">
                      {topics.id}
                    </Button>
                  </td>
                  <td>{topics.title}</td>
                  <td>{topics.lastPostedAt ? <TextFormat type="date" value={topics.lastPostedAt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{topics.views}</td>
                  <td>{topics.postsCount}</td>
                  <td>{topics.userId}</td>
                  <td>{topics.lastPostUserId}</td>
                  <td>{topics.replyCount}</td>
                  <td>{topics.featuredUser1Id}</td>
                  <td>{topics.featuredUser2Id}</td>
                  <td>{topics.featuredUser3Id}</td>
                  <td>{topics.deletedAt ? <TextFormat type="date" value={topics.deletedAt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{topics.highestPostNumber}</td>
                  <td>{topics.likeCount}</td>
                  <td>{topics.incomingLinkCount}</td>
                  <td>{topics.categoryId}</td>
                  <td>{topics.visible ? 'true' : 'false'}</td>
                  <td>{topics.moderatorPostsCount}</td>
                  <td>{topics.closed ? 'true' : 'false'}</td>
                  <td>{topics.archived ? 'true' : 'false'}</td>
                  <td>{topics.bumpedAt ? <TextFormat type="date" value={topics.bumpedAt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{topics.hasSummary ? 'true' : 'false'}</td>
                  <td>{topics.archetype}</td>
                  <td>{topics.featuredUser4Id}</td>
                  <td>{topics.notifyModeratorsCount}</td>
                  <td>{topics.spamCount}</td>
                  <td>{topics.pinnedAt ? <TextFormat type="date" value={topics.pinnedAt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{topics.score}</td>
                  <td>{topics.percentRank}</td>
                  <td>{topics.subtype}</td>
                  <td>{topics.slug}</td>
                  <td>{topics.deletedById}</td>
                  <td>{topics.participantCount}</td>
                  <td>{topics.wordCount}</td>
                  <td>{topics.excerpt}</td>
                  <td>{topics.pinnedGlobally ? 'true' : 'false'}</td>
                  <td>{topics.pinnedUntil ? <TextFormat type="date" value={topics.pinnedUntil} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{topics.fancyTitle}</td>
                  <td>{topics.highestStaffPostNumber}</td>
                  <td>{topics.featuredLink}</td>
                  <td>{topics.reviewableScore}</td>
                  <td>{topics.imageUploadId}</td>
                  <td>{topics.slowModeSeconds}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/topics/${topics.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/topics/${topics.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="primary"
                        size="sm"
                        data-cy="entityEditButton"
                      >
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/topics/${topics.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
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
          !loading && <div className="alert alert-warning">No Topics found</div>
        )}
      </div>
      {totalItems ? (
        <div className={topicsList && topicsList.length > 0 ? '' : 'd-none'}>
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

export default Topics;
