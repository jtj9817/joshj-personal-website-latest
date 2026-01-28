---
title: Moonshine Coffee Management Sim
publishDate: 2026-01-05 00:00:00
img: /assets/moonshine-coffee-preview.jpg
img_alt: Coffee shop dashboard showing inventory levels, supplier metrics, and demand analytics with warm brown color scheme
description: |
  A strategic coffee shop supply chain simulation game featuring multi-location inventory management, supplier negotiations, and demand forecasting, built with Laravel 12, React 19, and PostgreSQL.
tags:
  - Laravel
  - React
  - Game Dev
  - Simulation
---

## Overview

Moonshine Coffee Management Sim is an engaging simulation game where players manage the supply chain and operations of a growing coffee shop business. Built with Laravel 12 and React 19 via Inertia.js, it combines strategic gameplay with realistic business management mechanics including inventory control, supplier relationships, and demand forecasting.

Players start with a single location (Moonshine HQ Roastery) and must balance inventory across three locations: a central roastery with warehouse, a small downtown kiosk, and a larger lakeside cafe. Success requires optimizing costs, preventing stockouts, managing perishable items, and responding to random demand spikes.

## Game Features

### Multi-Location Management

Manage three distinct coffee shop locations:

- **Moonshine HQ (Roastery)**: Central hub with 5,000 unit capacity for bulk storage and roasting operations
- **Uptown Kiosk**: Small downtown location with 500 unit capacity, high foot traffic
- **Lakeside Cafe**: Larger cafe with 1,200 unit capacity, varied customer base

Each location has unique demand patterns, customer preferences, and operational challenges. Players must balance inventory distribution, handle transfer logistics, and optimize stock levels across all locations.

### Supply Chain Dynamics

Negotiate with multiple suppliers offering different trade-offs:

- **BeanCo Global**: High reliability (95%), 3-day delivery, premium pricing
- **RapidSupplies**: Fast delivery (1 day), moderate pricing, lower reliability (85%)
- **Dairy Direct**: Excellent reliability (98%) for dairy products, 1-day delivery
- **ValueBulk**: Best prices, slow delivery (7 days), lowest reliability (70%)

Features include dynamic pricing based on market conditions, quality vs. cost trade-offs, bulk ordering discounts, and supplier performance tracking (late rate, fill rate, complaint rate).

### Demand System

Realistic demand modeling with challenges:

- **Daily, Weekly, and Seasonal Variations**: Patterns reflect real coffee shop behavior
- **Random Demand Spikes**: "Chaos Monkey" events like heatwaves, local festivals, viral social media trends
- **Spike Resolution Mechanics**: Handle supplier strikes, delivery delays, equipment breakdowns
- **Customer Satisfaction**: Affects repeat business and market share
- **Competitor Actions**: Dynamic market environment with competing shops

### Inventory Management

Comprehensive inventory tracking and optimization:

- **Real-Time Tracking**: All ingredients across all locations
- **Perishable Items**: Expiration dates for items like Oat Milk, Pumpkin Spice, Bacon Gouda sandwiches
- **Waste Management**: Track and minimize spoilage costs
- **Automatic Reorder Points**: Customizable thresholds with safety stock calculations
- **Transfer System**: Move inventory between locations with in-transit tracking
- **Storage Costs**: Daily fees based on capacity utilization

### AI Advisories

Strategic recommendations powered by Prism PHP integration:

- **Inventory Optimization**: AI-generated recommendations based on current stock levels
- **Trend Analysis**: Demand forecasting with pattern recognition
- **Risk Alerts**: Low stock warnings, quality issues, cash flow problems
- **Supplier Selection**: Contextual advice for choosing between vendors
- **Optimization Suggestions**: Profitability improvements and efficiency gains

### Analytics Dashboard

Comprehensive business intelligence:

- **Tabbed Interface**: Overview, Logistics, and Financials sections
- **Real-Time Metrics**: Inventory position reports with historical trends
- **Vendor Performance**: Supplier comparisons and analytics
- **Waste Tracking**: Cost analysis and reduction strategies
- **Storage Utilization**: Capacity metrics across all locations
- **Fulfillment Rates**: Spike impact analysis and service level tracking
- **Collapsible Sections**: Drill-down for detailed data exploration

## Technical Stack

- **Backend**: Laravel 12 with PHP 8.2+
- **Frontend**: React 19 with TypeScript 5.3+
- **Bridge**: Inertia.js 2.0 for seamless SPA experience with SSR
- **Database**: PostgreSQL 15+ for complex queries and data integrity
- **State Management**: React contexts for game state and alerts
- **Charts**: Recharts for analytics visualization
- **Styling**: Tailwind CSS 4.0 with coffee-themed design system and Radix UI components
- **Real-Time**: Laravel Reverb for dashboard updates (planned)
- **AI**: Echolabs Prism for inventory advisories

## Game Mechanics

### Economic System

Realistic business simulation:

- **Dynamic Pricing Model**: Market-based pricing with supply/demand factors
- **Cash Flow Management**: Balance revenue, costs, and investments
- **Storage Costs**: Daily fees deducted based on inventory levels
- **Order Economics**: Economic Order Quantity (EOQ) optimization
- **Profit Tracking**: Revenue and cost analytics

### State Machine Workflows

Strict state transitions for game entities:

- **Orders**: Draft → Pending → Shipped → Delivered → Cancelled
- **Transfers**: Requested → Approved → InTransit → Completed → Cancelled
- **Spikes**: Active → Resolved with automatic effect rollback

### Event-Driven Architecture

Game logic uses Laravel events for decoupled systems:

- **TimeAdvanced**: Triggers deliveries, decay, spike generation, snapshots, reports
- **OrderPlaced**: Deducts cash, updates metrics, generates alerts
- **TransferCompleted**: Updates inventory, generates notifications
- **SpikeOccurred/SpikeEnded**: Applies and removes spike effects

## Technical Highlights

### Alert & Notification System

Custom "Comms Log" with military/tactical aesthetic:

- Event-driven alert generation for orders, transfers, spikes, and stock issues
- Severity indicators (critical, warning, info)
- Smart navigation to relevant pages
- Unread badge with animation
- Global sharing via Inertia middleware

### Inventory Calculations

Sophisticated supply chain math:

- **Reorder Point**: Average Daily Demand × Lead Time + Safety Stock
- **Economic Order Quantity**: Optimizes ordering costs vs. holding costs
- **Safety Stock**: Buffer calculations for target service levels (95%, 98%, 99%)
- **Historical Tracking**: `inventory_history` table for analytics
- **Daily Reports**: Aggregated metrics via automated snapshots

### Performance Optimization

- **Optimized Database Queries**: Efficient PostgreSQL queries for complex simulations
- **Partial Reloads**: Inertia's `router.reload({ only: [...] })` for polling components
- **Caching Strategy**: Reduce redundant calculations
- **Type Safety**: Full TypeScript coverage with interface definitions

## Design Philosophy

Moonshine Coffee Management Sim balances fun gameplay with educational value, teaching real supply chain management concepts through engaging mechanics. The simulation uses realistic formulas for demand forecasting, inventory optimization (EOQ, reorder points), and financial modeling.

Players learn about trade-offs between cost and reliability, the importance of safety stock, managing perishable inventory, and responding to demand volatility—all transferable skills for real-world supply chain management.
