# Design System Setup Guide

## 1) Install tokens package

```bash
npm install @nikolayvalev/design-tokens
```

## 2) Import selected profile CSS

```ts
import '@nikolayvalev/design-tokens/styles/public.css';
```

## 3) MCP endpoint

Use this URL in your MCP client configuration:
`https://designsystem.nikolayvalev.com/mcp`

## 4) Local install root

Write MCP bundle files to:
`components/design-system`
