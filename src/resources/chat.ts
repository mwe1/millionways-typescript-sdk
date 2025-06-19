// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Chat extends APIResource {
  /**
   * Generate emotionally intelligent chatbot response based on user input
   *
   * @example
   * ```ts
   * const response = await client.chat.generateResponse({
   *   apiKey: 'apiKey',
   * });
   * ```
   */
  generateResponse(
    params: ChatGenerateResponseParams,
    options?: RequestOptions,
  ): APIPromise<ChatGenerateResponseResponse> {
    const { apiKey, ...body } = params;
    return this._client.post('/chat', { query: { apiKey }, body, ...options });
  }

  /**
   * Generate emotionally intelligent chatbot response based on user input
   *
   * @example
   * ```ts
   * const response = await client.chat.generateResponseForUser(
   *   'userId',
   *   { apiKey: 'apiKey' },
   * );
   * ```
   */
  generateResponseForUser(
    userID: string,
    params: ChatGenerateResponseForUserParams,
    options?: RequestOptions,
  ): APIPromise<ChatGenerateResponseForUserResponse> {
    const { apiKey, ...body } = params;
    return this._client.post(path`/chat/${userID}`, { query: { apiKey }, body, ...options });
  }
}

export interface ChatGenerateResponseResponse {
  levels?: ChatGenerateResponseResponse.Levels;

  /**
   * response from chatbot
   */
  response?: string;

  result?: ChatGenerateResponseResponse.Result;
}

export namespace ChatGenerateResponseResponse {
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

export interface ChatGenerateResponseForUserResponse {
  /**
   * Date of creation
   */
  createdAt?: string;

  levels?: ChatGenerateResponseForUserResponse.Levels;

  /**
   * response from chatbot
   */
  response?: string;

  result?: ChatGenerateResponseForUserResponse.Result;
}

export namespace ChatGenerateResponseForUserResponse {
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

export interface ChatGenerateResponseParams {
  /**
   * Query param:
   */
  apiKey: string;

  /**
   * Body param: language parameter, defaults to en
   */
  language?: string;

  /**
   * Body param: history of messages between user with the role 'user' and chatbot
   * with the role 'assistant'
   */
  messages?: Array<unknown>;
}

export interface ChatGenerateResponseForUserParams {
  /**
   * Query param:
   */
  apiKey: string;

  /**
   * Body param: language parameter, defaults to en
   */
  language?: string;

  /**
   * Body param: history of messages between user with the role 'user' and chatbot
   * with the role 'assistant'
   */
  messages?: Array<unknown>;
}

export declare namespace Chat {
  export {
    type ChatGenerateResponseResponse as ChatGenerateResponseResponse,
    type ChatGenerateResponseForUserResponse as ChatGenerateResponseForUserResponse,
    type ChatGenerateResponseParams as ChatGenerateResponseParams,
    type ChatGenerateResponseForUserParams as ChatGenerateResponseForUserParams,
  };
}
