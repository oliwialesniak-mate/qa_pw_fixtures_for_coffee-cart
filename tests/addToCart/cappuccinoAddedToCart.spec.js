import { test, expect } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants.js';
import {
  priceFormatStr,
  unitPriceFormatStr
} from '../../src/common/helpers/getPriceForQuantity';

test('Check Cappuccino correctly added to the Cart', async ({ menuPage, cartPage }) => {
  const cappuccinoPrice = COFFEE_PRICES.cappuccino;
  const quantity = 1;

  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCappuccinoNameIsContainsCorrectText();
  await cartPage.assertCappuccinoUnitContainsCorrectText(
    unitPriceFormatStr(cappuccinoPrice, quantity)
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(cappuccinoPrice)
  );
});
