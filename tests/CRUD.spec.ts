import { test, expect, request } from '@playwright/test';

const URL1 = 'https://api.escuelajs.co/api/v1';
const URL2='https://jsonplaceholder.typicode.com';

test("POST---Регистрируемся и получаем токена", async ({ request }) => {
const Email = `test@mail.com`;
const password = 'mypleyaright';
console.log(`Шаг 1: Создаем нового пользователя с email: ${Email}`);
const createUserResponse = await request.post(`${URL1}/users/`, {
 headers: { 'Content-Type': 'application/json' },
    data: {
      name: "API test by using playwright/ts",
      email: Email,
      password: password,
      avatar: "https://picsum.photos/640/480" // Обязательное поле для этого API
    }
});
expect(createUserResponse.status()).toBe(201);
const createdUser = await createUserResponse.json();
console.log(`Пользователь успешно создан! ID в базе данных: ${createdUser.id}`);
// 2. ОТПРАВЛЯЕМ ЗАПРОС НА ПОЛУЧЕНИЕ ТОКЕНА (POST)
const loginResponse = await request.post(`${URL1}/auth/login`, {
 headers: { 'Content-Type': 'application/json' },
 data: {
       name: "so li",
      email: Email, // Берем email созданного юзера
      password: password  // Берем пароль созданного юзера
    }
});

  // Проверяем, что вход успешный (Код 20 OK)
  expect(loginResponse.status()).toBe(201);
  const loginData = await loginResponse.json();
  const myAccessToken = loginData.access_token;
  console.log('-----------------------------------------------');
  console.log('Наш полученный токен:', myAccessToken);
  console.log('-----------------------');
});
