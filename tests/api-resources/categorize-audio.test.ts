// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Millionways, { toFile } from 'millionways';

const client = new Millionways({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource categorizeAudio', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.categorizeAudio.create({ apiKey: 'apiKey' });
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
    const response = await client.categorizeAudio.create({
      apiKey: 'apiKey',
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('createForUser: only required params', async () => {
    const responsePromise = client.categorizeAudio.createForUser('userId', { apiKey: 'apiKey' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createForUser: required and optional params', async () => {
    const response = await client.categorizeAudio.createForUser('userId', {
      apiKey: 'apiKey',
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });
});
