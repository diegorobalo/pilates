# PILETERO MVP Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build an offline-first mobile + desktop app for pool maintenance registration with automatic WiFi sync.

**Architecture:** Monorepo with React frontend (mobile + desktop), Node.js/Express backend, SQLite local database, Socket.io sync.

**Tech Stack:** React 18, Vite, Tailwind CSS, Node.js, Express, SQLite3, Socket.io

---

## Phase 1: Project Setup

### Task 1: Initialize Git & Project Structure
- Create PILETERO/ folder with .gitignore and README
- Initialize git repo
- Create root package.json for workspaces

### Task 2: Setup Backend
- Create backend/ with Express server, SQLite, Socket.io
- Create db/schema.sql with tables: clientes, visitas, fotos, pagos
- Implement database service layer (database.js)

### Task 3: Setup Frontend  
- Create frontend/ with React + Vite
- Configure Tailwind CSS
- Test both dev servers run without errors

---

## Phase 2: Backend API

### Task 4: Implement Database Service
- CRUD for clientes, visitas, fotos, pagos
- Promise wrappers for SQLite async operations
- Methods for sync operations (getUnsynced, markSynced)

### Task 5: Implement API Routes
- GET/POST /api/clientes
- GET/POST /api/visitas
- GET/POST /api/pagos
- Health check endpoint

### Task 6: Implement Sync Service
- Socket.io event handlers for mobile sync requests
- Bidirectional data sync (send/receive)
- Conflict resolution (update vs create logic)

---

## Phase 3: Frontend - Mobile Features

### Task 7: Storage Service
- IndexedDB implementation for offline storage
- Methods for clientes, visitas, fotos
- Sync queue tracking (unsynced items)

### Task 8: API Client & Sync Service
- Axios client for API calls
- Socket.io client for real-time sync
- Auto-detection of WiFi for sync trigger

### Task 9: Agenda Page (Mobile)
- Display list of today's clients
- Show status (pending, in progress, completed)
- Navigate to visit form on client tap

### Task 10: Visit Registration Form
- Checklist of tasks (5 items)
- Water measurement inputs (cloro, pH)
- Photo capture (before/after)
- Save locally to IndexedDB
- Auto-timestamp and store

### Task 11: React Router Setup
- Mobile routes: /, /visita/:clienteId/:fecha
- Desktop routes: /dashboard, /clients, /finance
- Device type detection (mobile vs desktop)

---

## Phase 4: Frontend - Desktop Features

### Task 12: Dashboard Page
- KPI cards (clients, visits today, income, pending)
- Recent visits table
- Income vs expenses summary

### Task 13: Clients Management
- Create/Read/Update/Delete clients
- Client form with all required fields
- Client list table with actions

### Task 14: Navigation & Routing
- Desktop sidebar navigation
- Mobile bottom navigation
- Responsive layout (use margin-left on desktop)

---

## Phase 5: Integration & Testing

### Task 15: Integration Testing
- Start both servers
- Create test client from desktop
- Verify in database
- Test sync connection

### Task 16: Seed Data
- Create db/seed.js with 3 test clients
- Script to populate database

### Task 17: Full Sync Flow Test
- Desktop requests sync
- Mobile sees new clients
- Mobile creates visita
- Desktop syncs and receives data

### Task 18: Documentation
- docs/SETUP.md - Installation guide for Fede
- docs/USAGE.md - How to use app on mobile and desktop
- Commit all docs

---

## Timeline Estimate

- Phase 1: 4 hours
- Phase 2: 8 hours  
- Phase 3: 12 hours
- Phase 4: 6 hours
- Phase 5: 4 hours

**Total: 34 hours (3-4 weeks part-time)**

---

## Key Technical Decisions

1. **Offline-First:** Mobile uses IndexedDB, syncs via Socket.io
2. **One Codebase:** React for both mobile and desktop (responsive)
3. **Local Database:** SQLite on user's computer (no cloud)
4. **Simple Auth:** JWT not needed (single user per installation)
5. **Auto Sync:** Triggers on WiFi connection detection

---

## Success Criteria (MVP Complete)

✅ Mobile can work completely offline  
✅ Data syncs automatically when connected to WiFi  
✅ Desktop shows all synced data  
✅ Photos saved locally  
✅ Fede can create clients and register visits independently  
✅ All data remains on Fede's computer

---

## Next Steps

1. Choose execution method (subagent-driven or inline)
2. Diego reviews plan and approves
3. Begin Task 1: Initialize project structure
4. Work through tasks sequentially with commits after each

