// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Millionways from 'millionways';

const client = new Millionways({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource chat', () => {
  // skipped: tests are disabled for the time being
  test.skip('generateResponse: only required params', async () => {
    const responsePromise = client.chat.generateResponse({ apiKey: 'apiKey' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('generateResponse: required and optional params', async () => {
    const response = await client.chat.generateResponse({
      apiKey: 'apiKey',
      language: 'en',
      messages: [
        { role: 'user', content: 'Hello' },
        { role: 'assistant', content: 'Hi, how are you?' },
      ],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('generateResponseForUser: only required params', async () => {
    const responsePromise = client.chat.generateResponseForUser('userId', { apiKey: 'apiKey' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('generateResponseForUser: required and optional params', async () => {
    const response = await client.chat.generateResponseForUser('userId', {
      apiKey: 'apiKey',
      language: 'en',
      messages: [
        { role: 'user', content: 'Hello' },
        { role: 'assistant', content: 'Hi, how are you?' },
      ],
    });
  });
});
