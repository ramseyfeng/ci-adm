export interface IProtocol {
  has_supported_nv?: boolean;
  license_type?: string;
  location_type: string;
  name: string;
  protocol_id: string;
  protocol_type: string;
}

export interface IAPIGetProtocolsResponse{
  results: IProtocol[];
}
