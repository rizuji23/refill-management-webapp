export interface DataAvatarGroup {
  name: string;
  src: string;
}

interface IRecentProject {
  project_name: string;
  teams: Array<DataAvatarGroup>;
  status: "upcoming";
}
