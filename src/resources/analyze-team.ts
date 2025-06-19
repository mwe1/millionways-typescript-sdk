// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AnalyzeTeam extends APIResource {
  /**
   * Generate millionways emotionally-intelligent AI Team Classification based on
   * Text Input.
   *
   * @example
   * ```ts
   * const analyzeTeam = await client.analyzeTeam.create({
   *   apiKey: 'apiKey',
   * });
   * ```
   */
  create(params: AnalyzeTeamCreateParams, options?: RequestOptions): APIPromise<AnalyzeTeamCreateResponse> {
    const { apiKey, ...body } = params;
    return this._client.post('/analyze-team', { query: { apiKey }, body, ...options });
  }
}

export interface AnalyzeTeamCreateResponse {
  /**
   * Date of creation
   */
  createdAt?: string;

  levels?: AnalyzeTeamCreateResponse.Levels;

  result?: AnalyzeTeamCreateResponse.Result;

  teamTexts?: AnalyzeTeamCreateResponse.TeamTexts;

  /**
   * Text input that was classified
   */
  text?: string;
}

export namespace AnalyzeTeamCreateResponse {
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

  export interface TeamTexts {
    /**
     * Emotions response
     */
    emotions?: string;

    motives?: TeamTexts.Motives;

    preferences?: TeamTexts.Preferences;
  }

  export namespace TeamTexts {
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
}

export interface AnalyzeTeamCreateParams {
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

export declare namespace AnalyzeTeam {
  export {
    type AnalyzeTeamCreateResponse as AnalyzeTeamCreateResponse,
    type AnalyzeTeamCreateParams as AnalyzeTeamCreateParams,
  };
}
