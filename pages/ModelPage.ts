import { Page, Locator } from '@playwright/test';

export class ModelPage {
  readonly page: Page;
  readonly commentBox: Locator;
  readonly voteButton: Locator;
  readonly voteConfirmation: Locator;

  constructor(page: Page) {
    this.page = page;
    // TODO: confirmar selectores con codegen en la página de un modelo
    this.commentBox = page.locator('#comment');
    this.voteButton = page.getByRole('button', { name: /Vote/i });
    this.voteConfirmation = page.getByText(/Thank you for your vote/i);
  }

  // Lee el número de votos que muestra la ficha del modelo 
  async leerVotos(): Promise<number> {
    const texto = await this.page.getByText(/Votes:/i).first().textContent();
    return Number((texto ?? '').replace(/\D/g, ''));
  }
}
