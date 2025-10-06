import { test } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants.js';
import { totalPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Espresso cost is added to Total on menu page', async ({ menuPage }) => {
  const espressoPrice = COFFEE_PRICES.espresso;
  const quantity = 1;

  await menuPage.open();
  await menuPage.clickEspressoCup();

  await menuPage.assertTotalCheckoutContainsValue(
    totalPriceFormatStr(espressoPrice, quantity)
  );
});
