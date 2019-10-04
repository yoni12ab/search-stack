export interface Owner {
  reputation: number;
  user_id: number;
  user_type: string;
  profile_image: string;
  display_name: string;
  link: string;
  accept_rate?: number;
}

export interface SearchItem {
  tags: string[];
  owner: Owner;
  is_answered: boolean;
  view_count: number;
  protected_date?: number;
  accepted_answer_id?: number;
  answer_count: number;
  score: number;
  last_activity_date: number;
  creation_date: number;
  last_edit_date: number;
  question_id: number;
  link: string;
  title: string;
}

export interface SearchRes {
  items: SearchItem[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
}
