export interface IFeature {
  feature_id: string;
  feature_name: string;
  description?: string;
  checked?: boolean;
}

export interface IFeaturesResponse {
  results: IFeature[];
}
