// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class GetCall extends APIResource {
  /**
   * Get call by id
   */
  retrieve(
    callID: string,
    query: GetCallRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<GetCallRetrieveResponse> {
    return this._client.get(path`/get-call/${callID}`, { query, ...options });
  }
}

export interface GetCallRetrieveResponse {
  call?: GetCallRetrieveResponse.Call;
}

export namespace GetCallRetrieveResponse {
  export interface Call {
    /**
     * Call id
     */
    _id?: string;

    /**
     * Date of creation
     */
    createdAt?: string;

    /**
     * Customer ID that the Call belongs to
     */
    customerId?: string;

    /**
     * Language used for the Call
     */
    language?: string;

    levels?: Call.Levels;

    responses?: Call.Responses;

    result?: Call.Result;

    /**
     * Text input
     */
    text?: string;

    /**
     * Type of the call
     */
    type?: string;

    /**
     * Date of last update
     */
    updatedAt?: string;

    /**
     * User ID that the Call belongs to
     */
    userId?: string;
  }

  export namespace Call {
    export interface Levels {
      /**
       * Intuition Intrinsic
       */
      level1?: number;

      /**
       * Intuition Extrinsic
       */
      level2?: number;

      /**
       * External managing of frustration
       */
      level3?: number;

      /**
       * Analytical / Intentional feelings
       */
      level4?: number;

      /**
       * Negative emotions
       */
      level5?: number;
    }

    export interface Responses {
      /**
       * Emotions response
       */
      emotions?: string;

      motives?: Responses.Motives;

      preferences?: Responses.Preferences;
    }

    export namespace Responses {
      export interface Motives {
        /**
         * Achievement motive response
         */
        achievement?: string;

        /**
         * Contact motive response
         */
        contact?: string;

        /**
         * Power motive response
         */
        power?: string;
      }

      export interface Preferences {
        /**
         * Action response
         */
        action?: string;

        /**
         * Attitude response
         */
        attitude?: string;

        /**
         * Energy response
         */
        energy?: string;

        /**
         * Focus response
         */
        focus?: string;
      }
    }

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

export interface GetCallRetrieveParams {
  apiKey: string;
}

export declare namespace GetCall {
  export {
    type GetCallRetrieveResponse as GetCallRetrieveResponse,
    type GetCallRetrieveParams as GetCallRetrieveParams,
  };
}
