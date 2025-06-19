// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class GetUser extends APIResource {
  /**
   * Get user by id
   */
  retrieve(
    userID: string,
    query: GetUserRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<GetUserRetrieveResponse> {
    return this._client.get(path`/get-user/${userID}`, { query, ...options });
  }

  /**
   * Get all users
   */
  list(query: GetUserListParams, options?: RequestOptions): APIPromise<GetUserListResponse> {
    return this._client.get('/get-users', { query, ...options });
  }
}

export interface GetUserRetrieveResponse {
  user?: GetUserRetrieveResponse.User;
}

export namespace GetUserRetrieveResponse {
  export interface User {
    /**
     * User id
     */
    _id?: string;

    /**
     * Array containing the IDs of all API Calls associated with this User
     */
    apiCalls?: Array<string>;

    /**
     * Date of creation
     */
    createdAt?: string;

    /**
     * Customer ID that the User belongs to
     */
    customerId?: string;

    /**
     * Date of last update
     */
    updatedAt?: string;
  }
}

export interface GetUserListResponse {
  users?: Array<string>;
}

export interface GetUserRetrieveParams {
  apiKey: string;
}

export interface GetUserListParams {
  apiKey: string;
}

export declare namespace GetUser {
  export {
    type GetUserRetrieveResponse as GetUserRetrieveResponse,
    type GetUserListResponse as GetUserListResponse,
    type GetUserRetrieveParams as GetUserRetrieveParams,
    type GetUserListParams as GetUserListParams,
  };
}
