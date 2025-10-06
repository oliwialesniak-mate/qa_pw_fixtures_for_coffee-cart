import { test, expect } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants.js';
import {
  totalPriceFormatStr,
  priceFormatStr,
} from '../../src/common/helpers/getPriceForQuantity';

test('Assert cart updated correctly after clicking plus for drinks', async ({ menuPage, cartPage }) => {
  const espressoPrice = COFFEE_PRICES.espresso;
  const cappuccinoPrice = COFFEE_PRICES.cappuccino;

  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  // Espresso initially (2 cups)
  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(espressoPrice, 2)
  );

  // Espresso after +1 (3 cups)
  await cartPage.clickAddOneEspressoButton();
  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(espressoPrice, 3)
  );

  // Cappuccino still 1 cup
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(cappuccinoPrice, 1)
  );

  // Final total: (3x espresso + 1x cappuccino)
  const total = espressoPrice * 3 + cappuccinoPrice * 1;
  await cartPage.assertTotalCheckoutContainsValue(`$${total.toFixed(2)}`);
});
