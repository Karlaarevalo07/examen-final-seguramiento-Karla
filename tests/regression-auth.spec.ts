import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { nuevoUsuario, CLAVE_7_CARACTERES } from '../test-data/users';

test.describe('HU-1 Registro de usuario', () => {

  // Caso 1 (HU-1 C1 y C2): registro con datos válidos
  test('TC-01 Registrar un usuario nuevo con datos válidos @regression', async ({ page }) => {
    const registro = new RegisterPage(page);
    await registro.navigate();
    await registro.fillForm(nuevoUsuario());
    await registro.registerButton.click();
    await expect(registro.successMessage).toBeVisible();
  });

  // Caso 2 (C2): clave de 7 caracteres con mayúscula, minúscula, número y especial -> debe rechazarse
  test('TC-02 Rechaza una clave de 7 caracteres @regression', async ({ page }) => {
    const registro = new RegisterPage(page);
    await registro.navigate();
    await registro.fillForm({ ...nuevoUsuario(), password: CLAVE_7_CARACTERES });
    if (await registro.registerButton.isEnabled()) {
      await registro.registerButton.click();
    }
    // Si el sitio muestra el éxito, es un defecto (la clave no cumple el mínimo de 8)
    await expect(registro.successMessage).toBeHidden();
  });

});
