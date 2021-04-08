import { InertiaLink } from '@inertiajs/inertia-react';
import React from 'react';
import route from 'ziggy-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import IBookmark from '../../../Contracts/IBookmark';
import IYuruhuwaRecord from '../../../Contracts/IYuruhuwaRecord';

interface Props {
  item: IYuruhuwaRecord;
}

const YuruhuwaItem: React.FC<Props> = ({ item }) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-md-9">{item.title}</div>
      </div>
    </li>
  );
};

export default YuruhuwaItem;
