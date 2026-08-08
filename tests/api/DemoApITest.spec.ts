import { test, expect } from '@playwright/test';

const API_KEY = 'free_user_3HAJOb4b65Pk3F3Vr5tDQ24LJjD';

test('Demo API GET request', async ({ request }) => {

    const response = await request.get('https://reqres.in/api/users/2', {
        headers: { 'x-api-key': API_KEY }
    });
    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log("Response body: " + JSON.stringify(body));
    const text = await response.text();
    expect(text).toContain('Janet');

});

//Step 3 - Send a POST request along with request body & store response in a variable
test('Demo API POST request', async ({ request }) => {
    const response = await request.post("https://reqres.in/api/users", {
        headers: { 'x-api-key': API_KEY },
        data: {
            "name": "Swatiii",
            "job": "teacher124"
        }
    });
    expect(response.status()).toBe(201);

    const body = await response.json();
    console.log("Response body: " + JSON.stringify(body));
});

test('Demo API PUT Request', async ({ request }) => {
    const response = await request.put("https://reqres.in/api/users/2", {
        headers: { 'x-api-key': API_KEY },
        data: {
            "name": "Raghav",
            "job": "teacher"
        }
    });
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('Raghav');
    console.log(await response.json());

});

test('Demo API DELETE Request', async ({ request }) => {
    const response = await request.delete("https://reqres.in/api/users/2", {
        headers: { 'x-api-key': API_KEY }
    });
    expect(response.status()).toBe(204);
});
