import { test, expect } from '@playwright/test';
import { generatePetData } from '../src/utils/faker';
import { jsonHeaders } from '../src/utils/headers'; 

test('should successfully add a pet', async ({ request,baseURL }) => {
  // Generate fake pet data
  const requestBody = generatePetData();
  const apiUrl = `${baseURL}/pet`;  
  const response = await request.post(apiUrl, {
    headers: jsonHeaders,
    data: requestBody,
  });
  const status = response.status();
  console.log("Response status code:", status);
  expect(status).toBe(200);
  const responseBody = await response.json();
  expect(responseBody).toEqual(expect.objectContaining(requestBody));
  console.log("Response body:", responseBody);

});

