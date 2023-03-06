export interface Artist {
  bc_token_id: number;
  chain_id: number;
  createdAt: string;
  creator_id: number;
  description: string;
  id: number;
  logo: string;
  main_images: string;
  name: string;
  status: string;
  updatedAt: string;
  url: string;
}

export interface Member {
  id: number;
  name: string;
  url: string;
  profile_image: string;
}

export interface UserGroup {
  GroupUser: Array<{
    status: string;
    role: string;
  }>;
  id: number;
  email: string;
  name: string;
}

export interface ParamsCreateGroup {
  name: string;
  logo: string;
  main_images: Array<string>;
  url: string;
  description: string;
  member: string;
}

export interface ParamsUpdateGroup {
  group_id: number;
  creator_id: number;
  name: string;
  logo: string;
  main_images: Array<string>;
  description: string;
  member: string;
}
