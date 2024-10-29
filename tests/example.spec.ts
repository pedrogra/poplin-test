import { test, expect } from '@playwright/test';
import Auth from '../model/auth/auth';
import Laundry from '../model/laundry';
import ChooseProfile from '../model/order/chooseProfile';
import DeliverySpeed from '../model/order/deliverySpeed'
import { DeliverySpeedEnum } from '../helper/deliverySpeedEnum';
import BagCount from '../model/order/bagcount'
import { BagEnum } from '../helper/bagEnum';
import Oversized from '../model/order/oversized'
import Preferred from '../model/order/preferred'

test.beforeEach(async ({ page }) => {
  const auth = new Auth(page)
  await auth.login(page)
});

test('Order Placed', async ({ page }) => {
  const laundry = new Laundry(page)
  await laundry.newOrder()

  const chooseProfile = new ChooseProfile(page)
  await chooseProfile.assertPage()
  await chooseProfile.continue()

  const speed = new DeliverySpeed(page)
  await speed.assertPage()
  await speed.select(DeliverySpeedEnum.Standard)
  await speed.continue()

  const bags = new BagCount(page)
  await bags.select(BagEnum.Regular, 5)
  await bags.continue()

  const oversized = new Oversized(page)
  await oversized.continue()

  //TODO: Laundry Pros

  // const preferred = new Preferred(page)
  // await preferred.isFlexibleDelivery(true)
  // await preferred.continue()

});