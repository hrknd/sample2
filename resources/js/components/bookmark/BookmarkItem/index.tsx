import { InertiaLink } from '@inertiajs/inertia-react';
import React from 'react';
import route from 'ziggy-js';
import IBookmark from '../../../Contracts/IBookmark';

interface Props {
  bookmark: IBookmark;
}

const BookmarkItem: React.FC<Props> = ({ bookmark }) => {
  return (
    <li className="list-group-item">
      <div className="row">
        {bookmark.img_url != '' && (
          <div className="col-md-2">
            <InertiaLink
              href={route('bookmark.view', {
                bookmark: bookmark.id,
              }).url()}
            >
              <img src={bookmark.img_url} alt={bookmark.title} width="100%" />
            </InertiaLink>
          </div>
        )}
        <div className="col-md-10">
          <span>
            <InertiaLink
              href={route('bookmark.view', {
                bookmark: bookmark.id,
              }).url()}
            >
              {bookmark.title}
            </InertiaLink>
          </span>
          <br />
          <span>{bookmark.description}</span>
        </div>
      </div>
    </li>
  );
};

export default BookmarkItem;
