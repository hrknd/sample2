import ITag from './ITag';

interface IBookmark {
  id: number;
  title: string;
  description: string;
  type: string;
  url: string;
  img_url: string;
  user_id: number;
  is_active: boolean;
  tags: Array<ITag>;
  views: number;
  created_at: string;
  updated_at: string;
}

export default IBookmark;
