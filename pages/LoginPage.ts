import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly login: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    // TODO: confirmar selectores con codegen (campos de la barra superior)
    this.login = page.locator('input[name="login"]');
    this.password = page.locator('input[name="password"]');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async navigate() {
    await this.page.goto('/', { waitUntil: 'domcontentloaded' });
  }

  async signIn(login: string, password: string) {
    await this.login.fill(login);
    await this.password.fill(password);
    await this.loginButton.click();
  }
}
