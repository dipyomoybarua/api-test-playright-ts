import { test, expect } from '@playwright/test';
import { generatePetData } from '../../../src/utils/faker';
import { jsonHeaders } from '../../../src/utils/headers'; 

test('It should successfully add a pet', async ({ request,baseURL }) => {
  // Generate fake pet data
  const requestBody = generatePetData();
  const apiUrl = `${baseURL}/pet`;  
  const response = await request.post(apiUrl, {
    headers: jsonHeaders,
    data: requestBody,
  });
  const status = response.status();
  expect(status).toBe(200);
  const responseBody = await response.json();
  expect(responseBody).toEqual(expect.objectContaining(requestBody));
  expect(responseBody.id).toBeDefined();
  expect(responseBody.photoUrls.length).toBeGreaterThan(0);
  expect(responseBody.tags.length).toBeGreaterThan(0);
  console.log("Response body is correct:", responseBody);
});

