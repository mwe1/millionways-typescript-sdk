// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class GetUserAnalysis extends APIResource {
  /**
   * Get user analysis by id
   */
  retrieve(
    userID: string,
    query: GetUserAnalysisRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<GetUserAnalysisRetrieveResponse> {
    return this._client.get(path`/get-user-analysis/${userID}`, { query, ...options });
  }
}

export interface GetUserAnalysisRetrieveResponse {
  user?: GetUserAnalysisRetrieveResponse.User;
}

export namespace GetUserAnalysisRetrieveResponse {
  export interface User {
    /**
     * Date of creation
     */
    createdAt?: string;

    textCalls?: Array<User.TextCall>;

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
    export interface TextCall {
      result?: TextCall.Result;

      /**
       * Text transcribed from audio input
       */
      text?: string;
    }

    export namespace TextCall {
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

export interface GetUserAnalysisRetrieveParams {
  apiKey: string;
}

export declare namespace GetUserAnalysis {
  export {
    type GetUserAnalysisRetrieveResponse as GetUserAnalysisRetrieveResponse,
    type GetUserAnalysisRetrieveParams as GetUserAnalysisRetrieveParams,
  };
}
