import { test } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants.js';
import {
  unitPriceFormatStr,
  priceFormatStr
 } from '../../src/common/helpers/getPriceForQuantity';

test('Check Espresso correctly added to the Cart', async ({ menuPage, cartPage }) => {
  const espressoPrice = COFFEE_PRICES.espresso;
  const quantity = 1;

  await menuPage.open();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoNameIsContainsCorrectText();
  await cartPage.assertEspressoUnitContainsCorrectText(
    unitPriceFormatStr(espressoPrice, quantity)
  );
  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(espressoPrice, quantity)
  );
});
