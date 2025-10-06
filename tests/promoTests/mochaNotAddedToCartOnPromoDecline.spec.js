import { test } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants.js';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Assert Mocha is NOT added to Cart after promo decline', async ({ menuPage, cartPage }) => {
  const { espresso, cappuccino, americano } = COFFEE_PRICES;

  await menuPage.open();

  // Add regular items
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();
  await menuPage.clickAmericanoCup();

  // Promo appears
  await menuPage.assertPromoMessageIsVisible();

  // Decline promo
  await menuPage.clickNoPromoButton();

  // Go to cart
  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  // Assert that Mocha (promo item) is not added
  await cartPage.assertDiscountedMochaItemIsHidden();

  // Verify normal items and prices remain correct
  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(espresso));
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(priceFormatStr(cappuccino));
  await cartPage.assertAmericanoTotalCostContainsCorrectText(priceFormatStr(americano - 5));
});
