// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class ChatStream extends APIResource {
  /**
   * Generate emotionally intelligent chatbot streamed response based on user input
   * with given Result
   *
   * @example
   * ```ts
   * const response = await client.chatStream.generateResponse({
   *   apiKey: 'apiKey',
   * });
   * ```
   */
  generateResponse(
    params: ChatStreamGenerateResponseParams,
    options?: RequestOptions,
  ): APIPromise<ChatStreamGenerateResponseResponse> {
    const { apiKey, ...body } = params;
    return this._client.post('/chat-stream', { query: { apiKey }, body, ...options });
  }
}

export interface ChatStreamGenerateResponseResponse {
  event?: string;
}

export interface ChatStreamGenerateResponseParams {
  /**
   * Query param:
   */
  apiKey: string;

  /**
   * Body param: language parameter, defaults to en
   */
  language?: string;

  /**
   * Body param:
   */
  levels?: ChatStreamGenerateResponseParams.Levels;

  /**
   * Body param: history of messages between user with the role 'user' and chatbot
   * with the role 'assistant'
   */
  messages?: Array<unknown>;

  /**
   * Body param:
   */
  result?: ChatStreamGenerateResponseParams.Result;
}

export namespace ChatStreamGenerateResponseParams {
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

export declare namespace ChatStream {
  export {
    type ChatStreamGenerateResponseResponse as ChatStreamGenerateResponseResponse,
    type ChatStreamGenerateResponseParams as ChatStreamGenerateResponseParams,
  };
}
