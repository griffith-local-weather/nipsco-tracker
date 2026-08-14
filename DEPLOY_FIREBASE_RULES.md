# How to Deploy Firebase Security Rules

These rules ensure ONLY you (primegamer2008@outlook.com) can broadcast messages.
The check happens on Google's servers, so NO ONE can bypass it via DevTools.

## Option A: Deploy via Firebase Console (Easiest)

1. Go to https://console.firebase.google.com/
2. Select your project: **nipsco-tracker**
3. Click **Firestore Database** in the left sidebar
4. Click the **Rules** tab at the top
5. Delete all existing rules
6. Copy and paste the contents of `firestore.rules` into the editor
7. Click **Publish**

## Option B: Deploy via Firebase CLI (Advanced)

If you have Firebase CLI installed:

```bash
firebase deploy --only firestore:rules
```

## Why This Is Secure

- ✅ The email check happens on Google's servers, NOT in your browser
- ✅ Even if someone inspects the code, they cannot change the server-side rule
- ✅ Only authenticated users with the EXACT email can write announcements
- ✅ Regular users can still READ announcements (allow read: if true)
- ✅ No PIN or password is stored in JavaScript

## What Happens If Someone Tries to Hack It?

If a hacker tries to:
- Modify the JavaScript variable `ADMIN_EMAIL` → **BLOCKED** (server ignores it)
- Use their own Google account → **BLOCKED** (email doesn't match)
- Send requests directly to Firestore API → **BLOCKED** (rules reject unauthorized writes)

Your admin panel now requires:
1. Signing in with Google
2. Your specific email must match exactly
3. Server-side validation confirms the email before allowing writes
