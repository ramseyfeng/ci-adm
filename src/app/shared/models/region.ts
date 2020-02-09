export interface IRegion {
  label: string;
  location: string;
  name: string;
  cloud_vendor: string;
}

export interface IRegionsResponse {
  results: IRegion[];
}
