// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class GetUserChats extends APIResource {
  /**
   * Get user chats by id
   */
  retrieve(
    userID: string,
    query: GetUserChatRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<GetUserChatRetrieveResponse> {
    return this._client.get(path`/get-user-chats/${userID}`, { query, ...options });
  }
}

export interface GetUserChatRetrieveResponse {
  user?: GetUserChatRetrieveResponse.User;
}

export namespace GetUserChatRetrieveResponse {
  export interface User {
    chatCalls?: Array<User.ChatCall>;

    /**
     * Date of creation
     */
    createdAt?: string;

    /**
     * Date of last update
     */
    updatedAt?: string;

    /**
     * User id
     */
    userId?: string;
  }

  export namespace User {
    export interface ChatCall {
      /**
       * history of messages between user with the role 'user' and chatbot with the role
       * 'assistant'
       */
      messages?: Array<unknown>;

      result?: ChatCall.Result;
    }

    export namespace ChatCall {
      export interface Result {
        emotions?: Result.Emotions;

        motives?: Result.Motives;

        preferences?: Result.Preferences;
      }

      export namespace Result {
        export interface Emotions {
          /**
           * Approach in percent between 0 and 100.
           */
          approach?: number;

          /**
           * Avoidance in percent between 0 and 100.
           */
          avoidance?: number;
        }

        export interface Motives {
          /**
           * Achievement motive in percent between 0 and 100.
           */
          achievement?: number;

          /**
           * Contact motive in percent between 0 and 100.
           */
          contact?: number;

          /**
           * Power motive in percent between 0 and 100.
           */
          power?: number;
        }

        export interface Preferences {
          /**
           * Analytical Orientation in percent between 0 and 100.
           */
          analytical?: number;

          /**
           * Orientation towards Details in percent between 0 and 100.
           */
          detail?: number;

          /**
           * External Orientation in percent between 0 and 100.
           */
          external?: number;

          /**
           * Goal-Orientation in percent between 0 and 100.
           */
          goal?: number;

          /**
           * Holistic Orientation in percent between 0 and 100.
           */
          holistic?: number;

          /**
           * Internal Orientation in percent between 0 and 100.
           */
          internal?: number;

          /**
           * Path-Orientation in percent between 0 and 100.
           */
          path?: number;

          /**
           * Orientation towards Realization in percent between 0 and 100.
           */
          realization?: number;
        }
      }
    }
  }
}

export interface GetUserChatRetrieveParams {
  apiKey: string;
}

export declare namespace GetUserChats {
  export {
    type GetUserChatRetrieveResponse as GetUserChatRetrieveResponse,
    type GetUserChatRetrieveParams as GetUserChatRetrieveParams,
  };
}
