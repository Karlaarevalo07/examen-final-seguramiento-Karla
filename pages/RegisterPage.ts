import { Page, Locator } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;
  readonly login: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly password: Locator;
  readonly confirmPassword: Locator;
  readonly registerButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    // TODO: confirmar selectores con "npx playwright codegen https://buggy.justtestit.org/register"
    this.login = page.locator('#username');
    this.firstName = page.locator('#firstName');
    this.lastName = page.locator('#lastName');
    this.password = page.locator('#password');
    this.confirmPassword = page.locator('#confirmPassword');
    this.registerButton = page.getByRole('button', { name: 'Register' });
    this.successMessage = page.getByText(/Registration is successful/i);
  }

  async navigate() {
    await this.page.goto('/register', { waitUntil: 'domcontentloaded' });
  }

  async fillForm(u: { login: string; firstName: string; lastName: string; password: string }) {
    await this.login.fill(u.login);
    await this.firstName.fill(u.firstName);
    await this.lastName.fill(u.lastName);
    await this.password.fill(u.password);
    await this.confirmPassword.fill(u.password);
  }
}
