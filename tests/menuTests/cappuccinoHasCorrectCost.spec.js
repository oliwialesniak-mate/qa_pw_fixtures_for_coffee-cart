import { test } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants.js';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Cappuccino cup has correct cost', async ({ menuPage }) => {
  const cappuccinoPrice = COFFEE_PRICES.cappuccino;

  await menuPage.open();

  await menuPage.assertCappuccinoCupCostHasValue(priceFormatStr(cappuccinoPrice));
});
