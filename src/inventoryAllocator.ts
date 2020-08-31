export function inventoryAllocator(
  order: Object,
  inventory: Array<Object>
): Array<Object> {
  return permute(inventory);
}

function permute(warehouses: Array<Object>): Array<Array<Object>> {
  let n: Number = warehouses.length;
  let output: Array<Array<Object>> = [];

  function backtrack(first: number = 0) {
    if (first == n) {
      output.push([...warehouses]);
    }

    for (let i = first; i < n; i++) {
      [warehouses[first], warehouses[i]] = [warehouses[i], warehouses[first]];
      backtrack(first + 1);
      [warehouses[first], warehouses[i]] = [warehouses[i], warehouses[first]];
    }
  }

  backtrack();
  return output;
}
