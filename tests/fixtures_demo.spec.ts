import {test,expect} from '@playwright/test';



test.beforeEach('testA', async ({}) => {

    console.log('testA-I am before each test');
})

test('testB', async ({}) => {

    console.log('Hello testB');
})

test('testC', async ({}) => {

    console.log('Hello testC');
})

test.afterEach('testD', async ({}) => {

    console.log('testD-I am after each test');
})