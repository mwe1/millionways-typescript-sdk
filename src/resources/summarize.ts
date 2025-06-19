// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Summarize extends APIResource {
  /**
   * Generate millionways emotionally-intelligent AI summary based on Text Input.
   *
   * @example
   * ```ts
   * const summarize = await client.summarize.create({
   *   apiKey: 'apiKey',
   * });
   * ```
   */
  create(params: SummarizeCreateParams, options?: RequestOptions): APIPromise<SummarizeCreateResponse> {
    const { apiKey, ...body } = params;
    return this._client.post('/summarize', { query: { apiKey }, body, ...options });
  }
}

export interface SummarizeCreateResponse {
  levels?: SummarizeCreateResponse.Levels;

  /**
   * The summary returned for the input text.
   */
  response?: string;

  result?: SummarizeCreateResponse.Result;

  /**
   * Text input that was summarized
   */
  text?: string;
}

export namespace SummarizeCreateResponse {
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

export interface SummarizeCreateParams {
  /**
   * Query param:
   */
  apiKey: string;

  /**
   * Body param: language parameter, defaults to en
   */
  language?: string;

  /**
   * Body param: text input to be classified
   */
  text?: string;
}

export declare namespace Summarize {
  export {
    type SummarizeCreateResponse as SummarizeCreateResponse,
    type SummarizeCreateParams as SummarizeCreateParams,
  };
}
