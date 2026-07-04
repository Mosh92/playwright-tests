import { test, expect, Locator, Page } from '@playwright/test';
import { MainPage } from '../models/MainPage';

let mainPage: MainPage;

test.describe('Тесты главной страницы', () => {
  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.openMainPage();
  })
  test(`Проверка отображения элементов навигации хэдера`, async () => {
    await mainPage.checkElementsVisability();
  });

  test('Проверка названий элементов навигации хэдера', async () => {
    await mainPage.checkElementsText();
  });

  test('Проверка атрибутов href элементов навигации хэдера', async () => {
    await mainPage.checkElementsHrefAttribute();
  });
  test('Проверка проверка переключения Light Mod', async () => {
    test.step('Нажатие на иконку переключение Light mod', async () => {
      await mainPage.clickSwitchLightModeIcon();
    });
    test.step('Проверка смены значения атрибута', async () => {
      await mainPage.checkDataThemeAttributeValue();
    });
  });

  test(`Проверка стилей со светлой темой`, async () => {
    await test.step('Установка светлой темы', async () => {
      await mainPage.setLightMode();
    });
    await test.step('Скриншотная проверка с активной светлой темой', async () => {
      await mainPage.checkLayoutWithLightMode();
    });
  });
  test(`Проверка стилей с тёмной темой`, async () => {
    await test.step('Установка тёмной темы', async () => {
      await mainPage.setDarkMode();
    });
    await test.step('Скриншотная проверка с активной тёмной темой', async () => {
      await mainPage.checkLayoutWithDarkMode();
    });
  });
});




