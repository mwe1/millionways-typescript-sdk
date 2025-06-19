// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Millionways } from '../client';

export abstract class APIResource {
  protected _client: Millionways;

  constructor(client: Millionways) {
    this._client = client;
  }
}
