import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/login';

test('test', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login('tomsmith', 'SuperSecretPassword!');

});