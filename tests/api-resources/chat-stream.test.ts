// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Millionways from 'millionways';

const client = new Millionways({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource chatStream', () => {
  // skipped: tests are disabled for the time being
  test.skip('generateResponse: only required params', async () => {
    const responsePromise = client.chatStream.generateResponse({ apiKey: 'apiKey' });
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
    const response = await client.chatStream.generateResponse({
      apiKey: 'apiKey',
      language: 'en',
      levels: { level1: 20, level2: 20, level3: 20, level4: 20, level5: 20 },
      messages: [
        { role: 'user', content: 'Hello' },
        { role: 'assistant', content: 'Hi, how are you?' },
      ],
      result: {
        emotions: { approach: 50, avoidance: 50 },
        motives: { achievement: 0, contact: 100, power: 0 },
        preferences: {
          analytical: 50,
          detail: 50,
          external: 100,
          goal: 100,
          holistic: 50,
          internal: 0,
          path: 0,
          realization: 50,
        },
      },
    });
  });
});
