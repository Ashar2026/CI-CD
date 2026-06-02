import { test, expect, request } from '@playwright/test';
test("GET - ЗАПРОСЬ ПО ВАЛЮТА: ", async ({ request }) => {
  const response = await request.get('https://open.er-api.com/v6/latest/TJS');
  expect(response.ok()).toBeTruthy();
  const responseBody = await response.json();
  console.log('Получаем всего курс валюта:');
  console.log(responseBody);
  expect(response.status()).toBe(200);
  console.log('Вибираем курс 1 СОМОНИ :')
  const EURSRate: number = responseBody.rates.EUR;
  console.log(`Курс EUR: ${EURSRate}`);
  const rubRate: number = responseBody.rates.RUB;
  console.log(`Курс рубля: ${rubRate}`);
  const USDRate: number = responseBody.rates.USD;
  console.log(`Курс долар: ${USDRate}`);
  //гит
  
});