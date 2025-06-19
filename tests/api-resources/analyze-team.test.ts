// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Millionways from 'millionways';

const client = new Millionways({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource analyzeTeam', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.analyzeTeam.create({ apiKey: 'apiKey' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.analyzeTeam.create({
      apiKey: 'apiKey',
      language: 'en',
      text: 'I am feeling good today and I want to go outside and meet some people.',
    });
  });
});
