// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Millionways from 'millionways';

const client = new Millionways({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource categorizeText', () => {
  // skipped: tests are disabled for the time being
  test.skip('classify: only required params', async () => {
    const responsePromise = client.categorizeText.classify({ apiKey: 'apiKey' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('classify: required and optional params', async () => {
    const response = await client.categorizeText.classify({
      apiKey: 'apiKey',
      language: 'en',
      text: 'I am feeling good today and I want to go outside and meet some people.',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('classifyByUser: only required params', async () => {
    const responsePromise = client.categorizeText.classifyByUser('userId', { apiKey: 'apiKey' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('classifyByUser: required and optional params', async () => {
    const response = await client.categorizeText.classifyByUser('userId', {
      apiKey: 'apiKey',
      language: 'en',
      text: 'I am feeling good today and I want to go outside and meet some people.',
    });
  });
});
