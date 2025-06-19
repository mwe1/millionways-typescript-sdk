// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CategorizeText extends APIResource {
  /**
   * Generate millionways emotionally-intelligent AI Classification based on Text
   * Input.
   *
   * @example
   * ```ts
   * const response = await client.categorizeText.classify({
   *   apiKey: 'apiKey',
   * });
   * ```
   */
  classify(
    params: CategorizeTextClassifyParams,
    options?: RequestOptions,
  ): APIPromise<CategorizeTextClassifyResponse> {
    const { apiKey, ...body } = params;
    return this._client.post('/categorize-text', { query: { apiKey }, body, ...options });
  }

  /**
   * Generate millionways emotionally-smart AI Classification based on Text Input by
   * User with userId
   *
   * @example
   * ```ts
   * const response = await client.categorizeText.classifyByUser(
   *   'userId',
   *   { apiKey: 'apiKey' },
   * );
   * ```
   */
  classifyByUser(
    userID: string,
    params: CategorizeTextClassifyByUserParams,
    options?: RequestOptions,
  ): APIPromise<CategorizeTextClassifyByUserResponse> {
    const { apiKey, ...body } = params;
    return this._client.post(path`/categorize-text/${userID}`, { query: { apiKey }, body, ...options });
  }
}

export interface CategorizeTextClassifyResponse {
  candidateTexts?: CategorizeTextClassifyResponse.CandidateTexts;

  /**
   * Date of creation
   */
  createdAt?: string;

  levels?: CategorizeTextClassifyResponse.Levels;

  responses?: CategorizeTextClassifyResponse.Responses;

  result?: CategorizeTextClassifyResponse.Result;

  /**
   * Text input that was classified
   */
  text?: string;
}

export namespace CategorizeTextClassifyResponse {
  export interface CandidateTexts {
    /**
     * Emotions response
     */
    emotions?: string;

    /**
     * Levels response
     */
    levels?: string;

    motives?: CandidateTexts.Motives;

    preferences?: CandidateTexts.Preferences;
  }

  export namespace CandidateTexts {
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

    /**
     * Levels response
     */
    levels?: string;

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

export interface CategorizeTextClassifyByUserResponse {
  candidateTexts?: CategorizeTextClassifyByUserResponse.CandidateTexts;

  /**
   * Date of creation
   */
  createdAt?: string;

  deviations?: CategorizeTextClassifyByUserResponse.Deviations;

  levels?: CategorizeTextClassifyByUserResponse.Levels;

  responses?: CategorizeTextClassifyByUserResponse.Responses;

  result?: CategorizeTextClassifyByUserResponse.Result;

  /**
   * userId of the user
   */
  userId?: string;
}

export namespace CategorizeTextClassifyByUserResponse {
  export interface CandidateTexts {
    /**
     * Emotions response
     */
    emotions?: string;

    /**
     * Levels response
     */
    levels?: string;

    motives?: CandidateTexts.Motives;

    preferences?: CandidateTexts.Preferences;
  }

  export namespace CandidateTexts {
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

  export interface Deviations {
    levelsDeviations?: Deviations.LevelsDeviations;

    resultDeviations?: Deviations.ResultDeviations;
  }

  export namespace Deviations {
    export interface LevelsDeviations {
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

    export interface ResultDeviations {
      emotions?: ResultDeviations.Emotions;

      motives?: ResultDeviations.Motives;

      preferences?: ResultDeviations.Preferences;
    }

    export namespace ResultDeviations {
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

    /**
     * Levels response
     */
    levels?: string;

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

export interface CategorizeTextClassifyParams {
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

export interface CategorizeTextClassifyByUserParams {
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

export declare namespace CategorizeText {
  export {
    type CategorizeTextClassifyResponse as CategorizeTextClassifyResponse,
    type CategorizeTextClassifyByUserResponse as CategorizeTextClassifyByUserResponse,
    type CategorizeTextClassifyParams as CategorizeTextClassifyParams,
    type CategorizeTextClassifyByUserParams as CategorizeTextClassifyByUserParams,
  };
}
