---
title: StructLogr
publishDate: 2026-01-10 00:00:00
img: /assets/structlogr.svg
img_alt: Dark-themed code editor interface displaying raw logs being transformed into structured JSON output
description: |
  An AI-powered log parsing web application that transforms unstructured logs into clean JSON, built with Laravel 12, React 19, and Inertia.js 2.0, supporting multiple LLM providers.
tags:
  - Laravel
  - React
  - Inertia.js
  - TypeScript
category: Personal
status: live
github_url: https://github.com/jtj9817/structlogr
demo_url: https://demo.structlogr.com
---

## Overview

StructLogr is an intelligent log parsing application that leverages AI to convert raw, unstructured log files into clean, structured JSON data. Built with Laravel 12 and React 19 through Inertia.js 2.0, it streamlines log analysis workflows for developers and system administrators.

The application eliminates the tedious manual work of parsing log files by using large language models to intelligently extract fields, infer data types, and structure log entries in a consistent, queryable format.

## Key Features

### AI-Powered Parsing

Intelligent log transformation using multiple LLM providers:

- **Multi-Provider Support**: DeepSeek, OpenAI GPT-4, Google Gemini, Anthropic Claude via Prism PHP
- **Intelligent Pattern Recognition**: Automatic field extraction and structure detection
- **Automatic Data Type Inference**: Correctly identifies timestamps, IPs, error codes, and custom fields
- **Customizable Parsing Rules**: Create templates for recurring log formats

### Developer Experience

Built with developers in mind:

- **Dark-Themed Interface**: Optimized for code review with syntax highlighting via Prism.js
- **Real-Time Preview**: Side-by-side raw vs. parsed view with instant feedback
- **Multiple Log Format Support**: Handles syslog, Apache, Nginx, application logs, and custom formats
- **Batch Processing**: Handle large log files efficiently
- **Export Options**: Download results as JSON, CSV, or formatted text

### History & Management

Comprehensive tracking and organization:

- **Full Parsing History**: Every log transformation saved with metadata
- **Advanced Search**: Full-text search across titles, summaries, and log content
- **Save Configurations**: Reuse parsing templates and settings
- **Filter by Scope**: Search within all entries, recent items, or saved favorites
- **Export Capabilities**: Download entire history as JSON

### Accessibility First

Designed for maximum accessibility:

- **WCAG 2.1 AA Compliance**: Meets international accessibility standards
- **Keyboard Navigation**: Full support with documented shortcuts
- **Screen Reader Optimized**: Proper ARIA labels and semantic HTML
- **High Contrast Mode**: Available for visual accessibility
- **Skip Navigation**: Quick access to main content areas

## Technical Stack

- **Backend**: Laravel 12 with PHP 8.3+
- **Frontend**: React 19 with TypeScript 5.7+
- **Bridge**: Inertia.js 2.0 for seamless SPA experience with SSR support
- **AI Integration**: Prism PHP for multi-provider LLM abstraction
- **Styling**: Tailwind CSS 4.0 with custom dark theme and Radix UI components
- **Syntax Highlighting**: Prism.js for code display
- **Database**: MySQL 8.0+ with full-text search support
- **Build Tool**: Vite 7.x with hot module replacement

## Architecture

StructLogr follows clean architecture principles with clear separation of concerns:

- **Backend**: RESTful API with Laravel controllers, services, and repositories
- **Frontend**: Component-based React architecture with TypeScript for type safety
- **State Management**: React hooks combined with Inertia.js shared data for global state
- **AI Layer**: Abstracted LLM service with provider-agnostic interface via Prism
- **Caching**: Redis for parsed log caching and intelligent rate limiting
- **Type Safety**: Full TypeScript coverage with interfaces mirroring backend DTOs

## Features in Detail

### Multi-Provider LLM Support

StructLogr abstracts LLM interactions through Prism PHP, allowing users to choose from multiple providers:

- **DeepSeek**: Cost-effective with fast response times, ideal for high-volume parsing
- **OpenAI GPT-4**: Highest accuracy for complex log formats and edge cases
- **Google Gemini 2.5 Flash**: Balanced performance with excellent speed
- **Anthropic Claude**: Context-aware parsing with superior understanding of technical logs

Each provider can be configured with custom parameters, and the system automatically handles retries and fallbacks.

### Parsing Templates

Create and share reusable parsing configurations:

- **Field Mappings**: Define which log components map to which JSON fields
- **Validation Rules**: Set constraints and data type requirements
- **Transformations**: Apply custom logic to extracted values
- **Team Sharing**: Export and import templates across team members

### Real-Time Preview

Interactive parsing experience:

- **Side-by-Side Display**: Compare raw logs with parsed JSON output
- **Syntax Highlighting**: Color-coded display for both input and output
- **Error Highlighting**: Visual indicators for parsing issues and suggestions
- **Confidence Scoring**: AI-generated confidence levels for each parsed field

## Development Workflow

The application demonstrates modern web development practices:

- **Type-Safe Routing**: Laravel Wayfinder integration for type-safe routes in TypeScript
- **Component Library**: Radix UI for accessible, unstyled primitives
- **Code Quality**: ESLint and Prettier with automated formatting
- **Testing**: PHPUnit for backend, comprehensive test coverage with SQLite in-memory database
- **CI/CD**: GitHub Actions workflows for automated testing and deployment

Built to be maintainable, scalable, and developer-friendly with comprehensive documentation and clear code organization.
