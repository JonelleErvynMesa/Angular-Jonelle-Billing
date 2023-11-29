export interface Meter {
    id: any;
    customerId: number;
    meterNumber: string;
    installationDate: string;
}


  export interface MeterResponse {
    data?: Meter[];
    failed?: boolean;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    message?: string;
    page?: number;
    suceeded?: boolean;
    totalCount?: number;
    totalPages?: number;
  }

