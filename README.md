<div align="center">

# NexusBI — Business Analytics Dashboard

**A full-featured business intelligence dashboard built with React 18 + TypeScript + Recharts.**  
Real-time KPIs, interactive charts, data tables, and a collapsible sidebar — all in one polished UI.

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Recharts](https://img.shields.io/badge/Recharts-2.13-22B5BF?style=flat-square)](https://recharts.org)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com)

</div>

---

## Preview

> Live demo -> **[nexusbi-demo.vercel.app](#)**

![NexusBI preview](https://placehold.co/1200x630/111827/6366f1?text=NexusBI+Dashboard+Preview)

---

## Features

- **KPI cards** - Revenue, Active Users, Orders and Conversion Rate with trend indicators
- **Revenue chart** - 12-month area chart with gradient fill and custom tooltips
- **Orders chart** - monthly bar chart with hover states
- **Traffic donut** - traffic source breakdown (Organic, Paid, Social, Referral)
- **Transactions table** - paginated data table with status badges and search filtering
- **Global search** - instant client-side search across all transactions
- **Collapsible sidebar** - icon-only mode on collapse, mobile drawer with overlay
- **Dark / Light toggle** - full theme switch persisted across sessions
- **Fully responsive** - stacks gracefully from mobile to wide desktop

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite 5.4 |
| Charts | Recharts 2.13 |
| Styling | Pure CSS with custom properties |
| Analytics | Vercel Analytics |
| Deploy | Vercel |

---

## Project Structure

```
src/
├── components/
│   ├── Sidebar.tsx             # Collapsible nav with mobile drawer
│   ├── KPICard.tsx             # Metric card with trend arrow
│   ├── RevenueChart.tsx        # Area chart — 12-month revenue
│   ├── OrdersChart.tsx         # Bar chart — monthly orders
│   ├── TrafficChart.tsx        # Donut chart — traffic sources
│   ├── TransactionsTable.tsx   # Paginated table with status badges
│   ├── Pagination.tsx          # Reusable pagination component
│   └── GlobalSearch.tsx        # Live search input
├── App.tsx                     # Layout, theme state, data orchestration
└── index.css                   # Design tokens, dark/light themes
```

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/cresrugi/dashboard-demo.git
cd dashboard-demo

# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
```

---

## What This Project Demonstrates

This demo was built to showcase skills relevant to client work on Fiverr:

- **Data visualization** - 3 different chart types using Recharts with custom styling
- **State management** - theme toggle, sidebar collapse, pagination and search all in React state
- **Component reusability** - KPICard and Pagination are fully generic, drop-in components
- **Responsive layout** - CSS Grid with a collapsible sidebar that converts to a mobile drawer
- **Theme system** - dark/light switch using `:root` CSS variables with zero JavaScript color logic

---

<div align="center">

Built by **Cristian Rugeles** - [GitHub](https://github.com/cresrugi) - [Fiverr](https://fiverr.com)

</div>