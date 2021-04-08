import { InertiaLink } from '@inertiajs/inertia-react';
import React from 'react';
import route from 'ziggy-js';
import Layout from '../../../components/common/layout';
import YuruhuwaItem from '../../../components/yuruhuwa/YuruhuwaItem';
import IYuruhuwa from '../../../Contracts/IYuruhuwa';

interface Props {
  data: IYuruhuwa;
}

const YuruhuwaViewPage: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <div className="row">
        <div className="col-sm-8">
          <ul className="list-group">
            {data.result_code &&
              data.result_list.map((item, index) => {
                return <YuruhuwaItem key={index} item={item} />;
              })}
            {}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default YuruhuwaViewPage;
