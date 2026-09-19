# Reliable HR Solutions - Android APK Build Guide (Capacitor)

This project has been converted into an Android native app using **Capacitor**.

---

## 📱 App Details
- **App Name:** Reliable HR Solutions
- **Package ID:** `com.reliablehr.employeehub`
- **Capacitor Configuration:** `capacitor.config.ts`
- **Native Android Project:** `/android`

---

## 🚀 How to Build the Android APK

### Option A: Using Android Studio (Visual & Easiest)

1. **Export the Project:**
   - In Google AI Studio, click the **Settings / Export** menu and select **Export to GitHub** or **Download ZIP**.
2. **Open in Android Studio:**
   - Open Android Studio.
   - Click **Open** and select the `android` folder inside this project.
3. **Build the APK:**
   - Wait for Gradle sync to complete.
   - Go to menu: **Build** > **Build Bundle(s) / APK(s)** > **Build APK(s)**.
   - When finished, Android Studio will show a popup with a link: **locate**.
   - Your `.apk` file will be located at:
     ```
     android/app/build/outputs/apk/debug/app-debug.apk
     ```
4. **Install on Phone:**
   - Transfer `app-debug.apk` to any Android phone via WhatsApp, Drive, or USB cable.
   - Tap the `.apk` file on your phone and tap **Install**.

---

### Option B: Using Command Line / Terminal

Run the following commands in the root directory:

```bash
# 1. Build latest web assets and sync to Android
npm run cap:sync

# 2. Build Debug APK using Gradle wrapper
cd android
./gradlew assembleDebug
```

Your compiled APK is generated at:
```
android/app/build/outputs/apk/debug/app-debug.apk
```

---

### Option C: Automated Cloud Build with GitHub Actions

If you export this repository to GitHub, a workflow can build the APK automatically on every commit and provide the downloadable APK artifact in the **Actions** tab!

See `.github/workflows/build-apk.yml`.
