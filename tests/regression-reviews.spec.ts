import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { ModelPage } from '../pages/ModelPage';
import { nuevoUsuario } from '../test-data/users';

test.describe('HU-3 Votar por autos', () => {

  // Caso 3 (C1, C2, C3): usuario autenticado vota por el primer auto de Overall Rating con comentario
  test('TC-03 Votar por el primer auto con comentario @regression', async ({ page }) => {
    const usuario = nuevoUsuario();
    const comentario = `Comentario QA ${usuario.login}`;

    // Precondición: crear el usuario e iniciar sesión
    const registro = new RegisterPage(page);
    await registro.navigate();
    await registro.fillForm(usuario);
    await registro.registerButton.click();
    await expect(registro.successMessage).toBeVisible();

    const login = new LoginPage(page);
    await login.navigate();
    await login.signIn(usuario.login, usuario.password);
    await expect(page.getByText(usuario.firstName).first()).toBeVisible(); // saludo con el nombre

    // Primer auto de la lista Overall Rating
    await page.goto('/overall', { waitUntil: 'domcontentloaded' });
    await page.locator('table tbody tr').first().locator('a').last().click();

    const modelo = new ModelPage(page);
    const votosAntes = await modelo.leerVotos();

    await modelo.commentBox.fill(comentario);
    await modelo.voteButton.click();

    // Confirmación del voto
    await expect(modelo.voteConfirmation).toBeVisible();
    // El contador aumenta en 1
    await expect.poll(() => modelo.leerVotos()).toBe(votosAntes + 1);
    // El comentario aparece en la tabla de comentarios
    await expect(page.getByRole('row').filter({ hasText: comentario })).toBeVisible();
  });

});
