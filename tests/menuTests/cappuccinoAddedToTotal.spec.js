import { test } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants.js';
import { totalPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Cappuccino cost is added to Total on menu page', async ({ menuPage }) => {
  const cappuccinoPrice = COFFEE_PRICES.cappuccino;
  const quantity = 1;

  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.assertTotalCheckoutContainsValue(
    totalPriceFormatStr(cappuccinoPrice, quantity)
  );
});
