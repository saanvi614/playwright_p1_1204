import {test,expect,request} from '@playwright/test';

test('API Testing', async()=>{

const loginPayload={userEmail: "swaid2917@gmail.com", userPassword: "mypass@2026ASDWW"};

const apiContext=await request.newContext();
const loginResponse=await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login',
    {
   data:loginPayload
    })

    expect (loginResponse.ok()).toBeTruthy();
    const loginResponseJson=await loginResponse.json();
    const token= loginResponseJson.token;

    console.log("Login response body: " + (loginResponseJson));
    console.log("Login response token: " + token);

  const loginResponseBody=JSON.stringify(await loginResponse.json());
  console.log("Login response body: " + loginResponseBody);
});