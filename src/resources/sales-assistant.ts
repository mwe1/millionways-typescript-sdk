// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SalesAssistant extends APIResource {
  /**
   * Generate millionways emotionally-intelligent AI sales insights based on Text
   * Input.
   *
   * @example
   * ```ts
   * const response =
   *   await client.salesAssistant.generateInsights({
   *     apiKey: 'apiKey',
   *   });
   * ```
   */
  generateInsights(
    params: SalesAssistantGenerateInsightsParams,
    options?: RequestOptions,
  ): APIPromise<SalesAssistantGenerateInsightsResponse> {
    const { apiKey, ...body } = params;
    return this._client.post('/sales-assistant', { query: { apiKey }, body, ...options });
  }
}

export interface SalesAssistantGenerateInsightsResponse {
  /**
   * Assisted advice for the sales rep.
   */
  assist?: string;

  /**
   * Score between 0 and 100 assessing the likelihood of the customer conversion.
   */
  conversion?: number;

  /**
   * Customer's interests and preferences.
   */
  interests?: string;

  /**
   * Recommended response for what to say next in the conversation.
   */
  response?: string;

  /**
   * Customer's dislikes or things they want to avoid.
   */
  stay_away_from?: string;
}

export interface SalesAssistantGenerateInsightsParams {
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

export declare namespace SalesAssistant {
  export {
    type SalesAssistantGenerateInsightsResponse as SalesAssistantGenerateInsightsResponse,
    type SalesAssistantGenerateInsightsParams as SalesAssistantGenerateInsightsParams,
  };
}
