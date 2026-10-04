//===================================================================
// Activity 1
//===================================================================

const numberOne: number = 1; // number type variable
const isActive: boolean = true; // boolean type variable
const name: string = "John Doe"; // string type variable
const numbers: number[] = [1, 2, 3, 4, 5]; // array of numbers

function greet(person: string): string {
    return `Hello, ${person}`; // Added backticks for template literal
}

// Conditional types below
type IsString<T> = T extends string ? "Yes" : "No";

type Test1 = IsString<string>; // "Yes"
type Test2 = IsString<number>; // "No"

console.log(numberOne); 
console.log(isActive);
console.log(name);
console.log(numbers);

console.log(greet(name)); // greet function call    



//===================================================================
// Activity 2: Typescript Basics
//===================================================================

// ------------------------------------------------------------------
// Part 1: Variables and Types
// ------------------------------------------------------------------

// 1. Declare itemName (string), price and quantity (numbers).
const itemName: string = "Burger";
const price: number = 150;
const quantity: number = 2;

// 2. Compute total and print it: Total: ₱${total}.
const total: number = price * quantity;
console.log(`Total: ₱${total}`);

// 3. Try quantity = "two". Why does TypeScript reject it?
// quantity = "two"; 
// Explanation: TypeScript rejects this because 'quantity' was declared as a 'number' type. 
// Assigning a string like "two" violates type safety, preventing potential runtime errors.

// 4. Declare a string[] menu and a typed object { name: string; price: number }.
const menu: string[] = ["Adobo", "Juice", "Burger"];
const item: { name: string; price: number } = {
  name: "Adobo",
  price: 60
};

// 5. Add let discount: number | null = null;
let discount: number | null = null;


// ------------------------------------------------------------------
// Part 2: Conditionals
// ------------------------------------------------------------------

const isStudent: boolean = true;

// 1. If isStudent is true, apply a 10% discount.
let discountRate: number = 0;
if (isStudent) {
  discountRate = 0.10;
}

// 2. Print "Small order" (under ₱100), "Regular order" (₱100-₱299), or "Big order" (₱300+).
if (total < 100) {
  console.log("Small order");
} else if (total >= 100 && total <= 299) {
  console.log("Regular order");
} else {
  console.log("Big order");
}

// 3. Rewrite the discount using a ternary ? :.
const ternaryDiscountRate: number = isStudent ? 0.10 : 0;


// ------------------------------------------------------------------
// Part 3: Loops
// ------------------------------------------------------------------

type CartItem = {
  name: string;
  price: number;
  qty: number;
};

const cart: CartItem[] = [
  { name: "Adobo", price: 60, qty: 2 },
  { name: "Juice", price: 25, qty: 1 },
];

// 1. Use for...of to print each item as "Adobo - ₱60".
console.log("--- Cart List ---");
for (const item of cart) {
  console.log(`${item.name} - ₱${item.price}`);
}

// 2. Compute the cart subtotal with a loop.
let cartSubtotal: number = 0;
for (const item of cart) {
  cartSubtotal += item.price * item.qty;
}
console.log(`Cart Subtotal: ₱${cartSubtotal}`);

// 3. Use a while loop to count down from 5 to 1.
console.log("--- Countdown ---");
let count: number = 5;
while (count >= 1) {
  console.log(count);
  count--;
}


// ------------------------------------------------------------------
// Part 4: Functions
// ------------------------------------------------------------------

// 1. getLineTotal(price: number, qty: number): number
function getLineTotal(price: number, qty: number): number {
  return price * qty;
}

// 2. applyDiscount(total: number, isStudent: boolean): number
function applyDiscount(total: number, isStudent: boolean): number {
  return isStudent ? total * 0.90 : total;
}

// 3. getCartTotal(cart) using getLineTotal
function getCartTotal(cartItems: CartItem[]): number {
  let subtotal = 0;
  for (const item of cartItems) {
    subtotal += getLineTotal(item.price, item.qty);
  }
  return subtotal;
}

// 4. printReceipt(customer, cart, isStudent): void showing each line, discount, and final total
function printReceipt(customer: string, cartItems: CartItem[], isStudent: boolean): void {
  console.log(`\n================ RECEIPT ================`);
  console.log(`Customer: ${customer}`);
  console.log(`----------------------------------------`);
  
  for (const item of cartItems) {
    const lineTotal = getLineTotal(item.price, item.qty);
    console.log(`${item.name} x${item.qty} @ ₱${item.price} = ₱${lineTotal}`);
  }
  
  const subtotal = getCartTotal(cartItems); 
  const finalTotal = applyDiscount(subtotal, isStudent);
  const discountAmount = subtotal - finalTotal;

  console.log(`----------------------------------------`);
  console.log(`Subtotal: ₱${subtotal}`);
  console.log(`Student Discount (10%): -₱${discountAmount}`);
  console.log(`Final Total: ₱${finalTotal}`);
  console.log(`========================================\n`);
}

// Function call test
printReceipt("Juan Cruz", cart, true);