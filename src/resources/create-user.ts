// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class CreateUser extends APIResource {
  /**
   * Create a new user
   */
  create(params: CreateUserCreateParams, options?: RequestOptions): APIPromise<CreateUserCreateResponse> {
    const { apiKey } = params;
    return this._client.post('/create-user', { query: { apiKey }, ...options });
  }
}

export interface CreateUserCreateResponse {
  /**
   * User ID
   */
  id?: string;
}

export interface CreateUserCreateParams {
  apiKey: string;
}

export declare namespace CreateUser {
  export {
    type CreateUserCreateResponse as CreateUserCreateResponse,
    type CreateUserCreateParams as CreateUserCreateParams,
  };
}
