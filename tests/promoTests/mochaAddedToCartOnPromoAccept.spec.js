import { test } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants.js';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Assert discounted Mocha added to the Cart after promo accepting', async ({ menuPage, cartPage }) => {
  // Get all prices dynamically
  const { espresso, cappuccino, americano, mocha } = COFFEE_PRICES;

  await menuPage.open();

  // Add regular items
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();
  await menuPage.clickAmericanoCup();

  // Check for promo message
  await menuPage.assertPromoMessageIsVisible();

  // Accept promo
  await menuPage.clickYesPromoButton();

  // Go to cart
  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  // Verify prices
  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(espresso));
  await cartPage.assertDiscountedMochaTotalCostContainsCorrectText(priceFormatStr(mocha * 0.5)); // assuming 50% promo discount
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(priceFormatStr(cappuccino));
  await cartPage.assertAmericanoTotalCostContainsCorrectText(priceFormatStr(americano - 5));
});
