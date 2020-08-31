import { inventoryAllocator } from "./inventoryAllocator";
import { describe, expect, test } from "@jest/globals";

test("Order can be shipped using one warehouse", () => {
  expect(
    inventoryAllocator({ apple: 1 }, [
      { name: "owd", inventory: { apple: 5 } },
      { name: "dm", inventory: { apple: 5 } },
    ])
  ).toEqual([{ owd: { apple: 1 } }]);
});

test("Order can be shipped using multiple warehouses", () => {
  expect(
    inventoryAllocator({ apple: 10 }, [
      { name: "owd", inventory: { apple: 5 } },
      { name: "dm", inventory: { apple: 5 } },
    ])
  ).toEqual([{ dm: { apple: 5 } }, { owd: { apple: 5 } }]);
});

test("Order cannot be shipped because there is not enough inventory: 0 items", () => {
  expect(
    inventoryAllocator({ apple: 1 }, [{ name: "owd", inventory: { apple: 0 } }])
  ).toEqual([]);
});

test("Order cannot be shipped because there is not enough inventory: Not enough items", () => {
  expect(
    inventoryAllocator({ apple: 2 }, [{ name: "owd", inventory: { apple: 1 } }])
  ).toEqual([]);
});
