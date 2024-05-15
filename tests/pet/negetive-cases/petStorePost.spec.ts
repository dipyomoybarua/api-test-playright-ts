import { test, expect } from '@playwright/test';
import { generateNegativePetData } from '../../../src/utils/faker';
import { jsonHeaders } from '../../../src/utils/headers'; 

test('It should successfully give negative pet case', async ({ request,baseURL }) => {
  const requestBody = generateNegativePetData();
  const apiUrl = `${baseURL}/pets`;  
  const response = await request.post(apiUrl, {
    headers: jsonHeaders,
    data: requestBody,
  });
  const status = response.status();
  console.log("Status is :-",status)
  expect(status).toBe(404);
  const responseBody = await response.json();
  console.log("Response body is:", responseBody);
});