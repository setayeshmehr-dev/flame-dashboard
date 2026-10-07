export const orders = [
  {
    id: "ORD-7891",
    customer: { name: "Emma Wilson", email: "emma@example.com", initials: "EW" },
    product: { name: "Pro Dashboard License" },
    status: "completed",
    date: "2026-02-14",
    amount: 299,
    currency: "USD",
  },
  {
    id: "ORD-7890",
    customer: { name: "James Chen", email: "james@company.io", initials: "JC" },
    product: { name: "Team Plan Upgrade" },
    status: "pending",
    date: "2026-02-14",
    amount: 599,
    currency: "USD",
  },
  {
    id: "ORD-7889",
    customer: { name: "Sofia Garcia", email: "sofia@startup.co", initials: "SG" },
    product: { name: "Enterprise License" },
    status: "completed",
    date: "2026-02-13",
    amount: 1499,
    currency: "USD",
  },
  {
    id: "ORD-7888",
    customer: { name: "Alex Thompson", email: "alex@dev.com", initials: "AT" },
    product: { name: "Single License" },
    status: "pending",
    date: "2026-02-13",
    amount: 79,
    currency: "USD",
  },
  {
    id: "ORD-7887",
    customer: { name: "Maria Santos", email: "maria@agency.co", initials: "MS" },
    product: { name: "Pro Dashboard License" },
    status: "completed",
    date: "2026-02-12",
    amount: 299,
    currency: "USD",
  },
  {
    id: "ORD-7886",
    customer: { name: "David Kim", email: "david@tech.io", initials: "DK" },
    product: { name: "Team Plan Upgrade" },
    status: "cancelled",
    date: "2026-02-12",
    amount: 599,
    currency: "USD",
  },
  {
    id: "ORD-7885",
    customer: { name: "Lisa Park", email: "lisa@design.co", initials: "LP" },
    product: { name: "Pro Dashboard License" },
    status: "completed",
    date: "2026-02-11",
    amount: 299,
    currency: "USD",
  },
  {
    id: "ORD-7884",
    customer: { name: "Ryan Mitchell", email: "ryan@startup.io", initials: "RM" },
    product: { name: "Enterprise License" },
    status: "completed",
    date: "2026-02-11",
    amount: 1499,
    currency: "USD",
  },
  {
    id: "ORD-7883",
    customer: { name: "Nina Patel", email: "nina@corp.com", initials: "NP" },
    product: { name: "Single License" },
    status: "pending",
    date: "2026-02-10",
    amount: 79,
    currency: "USD",
  },
  {
    id: "ORD-7882",
    customer: { name: "Tom Bradley", email: "tom@agency.io", initials: "TB" },
    product: { name: "Team Plan Upgrade" },
    status: "pending",
    date: "2026-02-10",
    amount: 599,
    currency: "USD",
  },
  {
    id: "ORD-7881",
    customer: { name: "Anna Kowalski", email: "anna@dev.co", initials: "AK" },
    product: { name: "Pro Dashboard License" },
    status: "completed",
    date: "2026-02-09",
    amount: 299,
    currency: "USD",
  },
  {
    id: "ORD-7880",
    customer: { name: "Chris Lee", email: "chris@tech.com", initials: "CL" },
    product: { name: "Starter Plan" },
    status: "completed",
    date: "2026-02-09",
    amount: 49,
    currency: "USD",
  },
  {
    id: "ORD-7879",
    customer: { name: "Emma Wilson", email: "emma@example.com", initials: "EW" },
    product: { name: "Team Plan Upgrade" },
    status: "completed",
    date: "2026-02-08",
    amount: 599,
    currency: "USD",
  },
  {
    id: "ORD-7878",
    customer: { name: "Jake Rivera", email: "jake@freelance.io", initials: "JR" },
    product: { name: "Single License" },
    status: "cancelled",
    date: "2026-02-08",
    amount: 79,
    currency: "USD",
  },
  {
    id: "ORD-7877",
    customer: { name: "Mia Zhang", email: "mia@studio.co", initials: "MZ" },
    product: { name: "Enterprise License" },
    status: "pending",
    date: "2026-02-07",
    amount: 1499,
    currency: "USD",
  },
  {
    id: "ORD-7876",
    customer: { name: "Daniel Olsen", email: "dan@build.io", initials: "DO" },
    product: { name: "Pro Dashboard License" },
    status: "completed",
    date: "2026-02-07",
    amount: 299,
    currency: "USD",
  },
  {
    id: "ORD-7875",
    customer: { name: "Sofia Garcia", email: "sofia@startup.co", initials: "SG" },
    product: { name: "Starter Plan" },
    status: "pending",
    date: "2026-02-06",
    amount: 49,
    currency: "USD",
  },
  {
    id: "ORD-7874",
    customer: { name: "Kai Tanaka", email: "kai@app.dev", initials: "KT" },
    product: { name: "Team Plan Upgrade" },
    status: "completed",
    date: "2026-02-06",
    amount: 599,
    currency: "USD",
  },
  {
    id: "ORD-7873",
    customer: { name: "Olivia Brown", email: "olivia@co.uk", initials: "OB" },
    product: { name: "Pro Dashboard License" },
    status: "completed",
    date: "2026-02-05",
    amount: 299,
    currency: "USD",
  },
  {
    id: "ORD-7872",
    customer: { name: "Liam Murphy", email: "liam@ops.com", initials: "LM" },
    product: { name: "Single License" },
    status: "completed",
    date: "2026-02-05",
    amount: 79,
    currency: "USD",
  },
];

// فقط توی حافظه (RAM) نگه می‌داره — با ریلود صفحه کاملاً ریست می‌شه
let _orders = [...orders];

export function getOrders() {
  return [..._orders];
}

export function saveOrders(newOrders) {
  _orders = [...newOrders];
}

export function createOrder(orderData) {
  const newOrder = {
    id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
    customer: {
      name: orderData.customerName,
      email: orderData.customerEmail,
      initials: orderData.customerName
        .split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase(),
    },
    product: {
      name: orderData.productName,
    },
    status: orderData.status,
    date: orderData.date,
    amount: Number(orderData.amount),
    currency: "USD",
  };

  _orders = [newOrder, ..._orders];
  return newOrder;
}

export function updateOrder(id, orderData) {
  const currentOrders = getOrders();
  const index = currentOrders.findIndex((o) => o.id === id);
  if (index === -1) return null;

  currentOrders[index] = {
    ...currentOrders[index],
    customer: {
      name: orderData.customerName,
      email: orderData.customerEmail,
      initials: orderData.customerName
        .split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase(),
    },
    product: {
      name: orderData.productName,
    },
    status: orderData.status,
    date: orderData.date,
    amount: Number(orderData.amount),
    currency: "USD",
  };

  _orders = [...currentOrders];
  return currentOrders[index];
}

export function deleteOrder(id) {
  _orders = _orders.filter((o) => o.id !== id);
}