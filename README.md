Hey y'all! I'm not the best HTML developer. I use a locally hosted AI agent to assist me!

This was made due to the OVERWHELMINGLY POSITIVE feedback to the idea.

https://griffith-local-weather.github.io/nipsco-tracker/

---

## Multi-Tracker Website

This repository now contains **two community trackers** that can be hosted on the same website:

### 1. NIPSCO Truck Tracker (`index.html`)
- Tracks utility truck sightings in Northern Indiana
- Statuses: Moving, Parked, Crews Working, Storm/Line Work, Other
- Heat map visualization with density hotspots
- Bubble clustering for grouped sightings
- Weather radar overlay

### 2. Power Outage Tracker (`power-outage-tracker.html`) ⭐ NEW
- Tracks power outage reports by users
- Mark houses as: **Power ON** 🟢, **Power OFF** 🔴, or **Unknown** ⚪
- Heat map shows outage density (OFF reports weighted higher)
- Bubble clustering by area
- Auto-expiring reports to keep data fresh

## Hosting Both Trackers

You have two options:

### Option A: Separate Pages (Recommended)
Host both files on your web server:
- `yoursite.com/index.html` - NIPSCO Truck Tracker
- `yoursite.com/power-outage-tracker.html` - Power Outage Tracker

Add navigation links between them if desired.

### Option B: Single Page with Tab Switching
Modify one of the HTML files to include a tab/toggle system to switch between tracker views.

## Firebase Setup

Both trackers share the same Firebase project but use different collections:

| Tracker | Reports Collection | Announcements Collection |
|---------|-------------------|-------------------------|
| NIPSCO Truck | `reports` | `announcements` |
| Power Outage | `outage_reports` | `outage_announcements` |

### Deploy Firestore Rules:
```bash
firebase deploy --only firestore:rules
```

The `firestore.rules` file has been updated to support both trackers.

## Features Common to Both Trackers

- ✅ Live sync via Firebase Firestore
- ✅ LocalStorage fallback when offline
- ✅ Dark/Light theme toggle
- ✅ Mobile-responsive design
- ✅ PWA support (installable)
- ✅ Location fuzzing for privacy
- ✅ Rate limiting (1 report/minute, 8/hour)
- ✅ Admin announcement system
- ✅ Community moderation (voting/flagging)
- ✅ Auto-expiry to keep data fresh
