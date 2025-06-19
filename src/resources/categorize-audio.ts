// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path } from '../internal/utils/path';

export class CategorizeAudio extends APIResource {
  /**
   * Generate millionways emotionally-smart AI Classification based on Audio Input
   */
  create(
    params: CategorizeAudioCreateParams,
    options?: RequestOptions,
  ): APIPromise<CategorizeAudioCreateResponse> {
    const { apiKey, ...body } = params;
    return this._client.post(
      '/categorize-audio',
      multipartFormRequestOptions({ query: { apiKey }, body, ...options }, this._client),
    );
  }

  /**
   * Generate millionways emotionally-smart AI Classification based on Audio Input
   */
  createForUser(
    userID: string,
    params: CategorizeAudioCreateForUserParams,
    options?: RequestOptions,
  ): APIPromise<CategorizeAudioCreateForUserResponse> {
    const { apiKey, ...body } = params;
    return this._client.post(
      path`/categorize-audio/${userID}`,
      multipartFormRequestOptions({ query: { apiKey }, body, ...options }, this._client),
    );
  }
}

export interface CategorizeAudioCreateResponse {
  candidateTexts?: CategorizeAudioCreateResponse.CandidateTexts;

  /**
   * Date of creation
   */
  createdAt?: string;

  levels?: CategorizeAudioCreateResponse.Levels;

  responses?: CategorizeAudioCreateResponse.Responses;

  result?: CategorizeAudioCreateResponse.Result;

  /**
   * Text transcribed from audio input
   */
  text?: string;
}

export namespace CategorizeAudioCreateResponse {
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

export interface CategorizeAudioCreateForUserResponse {
  candidateTexts?: CategorizeAudioCreateForUserResponse.CandidateTexts;

  /**
   * Date of creation
   */
  createdAt?: string;

  deviations?: CategorizeAudioCreateForUserResponse.Deviations;

  levels?: CategorizeAudioCreateForUserResponse.Levels;

  responses?: CategorizeAudioCreateForUserResponse.Responses;

  result?: CategorizeAudioCreateForUserResponse.Result;

  /**
   * text transcribed from audio input
   */
  text?: string;

  /**
   * userId of the user
   */
  userId?: string;
}

export namespace CategorizeAudioCreateForUserResponse {
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

export interface CategorizeAudioCreateParams {
  /**
   * Query param:
   */
  apiKey: string;

  /**
   * Body param:
   */
  file?: Uploadable;
}

export interface CategorizeAudioCreateForUserParams {
  /**
   * Query param:
   */
  apiKey: string;

  /**
   * Body param:
   */
  file?: Uploadable;
}

export declare namespace CategorizeAudio {
  export {
    type CategorizeAudioCreateResponse as CategorizeAudioCreateResponse,
    type CategorizeAudioCreateForUserResponse as CategorizeAudioCreateForUserResponse,
    type CategorizeAudioCreateParams as CategorizeAudioCreateParams,
    type CategorizeAudioCreateForUserParams as CategorizeAudioCreateForUserParams,
  };
}
