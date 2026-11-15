export type Language = 'en' | 'bn';

export interface FeatureCopy {
  id: string;
  num: string;
  title: string;
  description: string;
}

export interface InstallStepCopy {
  step: string;
  title: string;
  description: string;
}

export interface FaqItemCopy {
  id: string;
  question: string;
  answer: string;
}

export interface PrivacySectionCopy {
  heading: string;
  body: string;
}

export interface SiteTranslations {
  brandName: string;
  nav: {
    features: string;
    install: string;
    faq: string;
    privacy: string;
  };
  hero: {
    kicker: string;
    headline: string;
    subheadline: string;
    downloadBtn: string;
    fallbackBtn: string;
    viewFeaturesBtn: string;
    checkingRelease: string;
    liveStatus: string;
    cachedStatus: string;
    offlineStatus: string;
    versionLabel: string;
    buildLabel: string;
    releasedLabel: string;
    packageLabel: string;
    changelogTitle: string;
    emptyChangelog: string;
    offlineDescription: string;
    retryBtn: string;
    directNotice: string;
  };
  showcase: {
    heading: string;
    subheading: string;
    imageAlt: string;
    pillars: Array<{ label: string; value: string }>;
  };
  features: {
    heading: string;
    subheading: string;
    items: FeatureCopy[];
  };
  install: {
    heading: string;
    subheading: string;
    preserveCalloutTitle: string;
    preserveCalloutBody: string;
    steps: InstallStepCopy[];
  };
  faq: {
    heading: string;
    subheading: string;
    items: FaqItemCopy[];
  };
  footer: {
    tagline: string;
    packageText: string;
    privacyBtn: string;
    updatesLink: string;
    copyright: string;
  };
  privacyModal: {
    title: string;
    subtitle: string;
    closeLabel: string;
    sections: PrivacySectionCopy[];
  };
  pwa: {
    installWebApp: string;
    offlineBanner: string;
  };
}

export const TRANSLATIONS: Record<Language, SiteTranslations> = {
  en: {
    brandName: 'Alap',
    nav: {
      features: 'Features',
      install: 'Install Guide',
      faq: 'FAQ',
      privacy: 'Privacy',
    },
    hero: {
      kicker: 'Android App · com.aistudio.alapchat.xmrqtv',
      headline: 'Alap — Fast, Private, Offline-First Messaging',
      subheadline:
        'Your conversations live on your device—not on remote cloud archives. Built with local Room storage, an auto-clearing delivery relay, and 1-tap direct APK updates.',
      downloadBtn: 'Download Alap APK',
      fallbackBtn: 'Open Releases Mirror',
      viewFeaturesBtn: 'View Features',
      checkingRelease: 'Checking latest release…',
      liveStatus: 'Live release',
      cachedStatus: 'Saved offline copy',
      offlineStatus: 'Offline mode',
      versionLabel: 'Version',
      buildLabel: 'Build',
      releasedLabel: 'Released',
      packageLabel: 'Package ID',
      changelogTitle: 'Release Notes',
      emptyChangelog: 'Stability refinements and local storage optimizations.',
      offlineDescription:
        'Live release details could not be reached right now. Visit the Alap updates mirror to download the latest signed APK.',
      retryBtn: 'Retry Check',
      directNotice: 'Direct signed Android APK · No Google Play Store required',
    },
    showcase: {
      heading: 'Designed to stay lightweight on your phone and silent on servers',
      subheading:
        'Alap removes cloud hoarding, bloated background trackers, and store delays so everyday conversations remain fast and private.',
      imageAlt: 'Alap Android messaging app interface on a minimalist smartphone',
      pillars: [
        { label: 'Message Storage', value: '100% On-Device Room DB' },
        { label: 'Relay Retention', value: 'Auto-Cleared on Delivery' },
        { label: 'Account Lock', value: 'PIN + Biometric + Anti-Capture' },
        { label: 'Update Channel', value: '1-Tap In-App APK Updater' },
      ],
    },
    features: {
      heading: 'Built around ownership, speed, and quiet privacy',
      subheading:
        'Every core capability in Alap runs locally first and uses minimal network bandwidth only when relaying messages.',
      items: [
        {
          id: 'local-storage',
          num: '01',
          title: 'Local-First Phone Storage',
          description:
            'Every message and thread stays safely inside your phone’s local Room database. Export or restore your entire history anytime with portable JSON backups.',
        },
        {
          id: 'zero-bloat',
          num: '02',
          title: 'Zero Server Bloat Relay',
          description:
            'Servers act strictly as a temporary delivery bridge. Once your message reaches the recipient’s device, it automatically clears from the relay.',
        },
        {
          id: 'push-alerts',
          num: '03',
          title: 'Background & Killed-App Alerts',
          description:
            'Receive reliable push notifications even when Alap is swiped away or idle, paired with optional translucent floating glass reply popups.',
        },
        {
          id: 'auto-updater',
          num: '04',
          title: 'Direct 1-Tap In-App Updater',
          description:
            'Skip app-store queues. Alap checks release metadata directly and lets you fetch and install verified APK builds in a single tap.',
        },
        {
          id: 'security-lock',
          num: '05',
          title: 'Gmail Verified & 2-Layer Lock',
          description:
            'Authenticate cleanly with Gmail verification, protect entry with a 2-layer PIN and Biometric App Lock, and enable system-wide Screenshot Blocking.',
        },
        {
          id: 'statuses-polls',
          num: '06',
          title: '24h Statuses, Polls & Privacy Toggles',
          description:
            'Share 24-hour text statuses, run instant group polls, and independently toggle visibility for your phone number, user ID, online presence, and read receipts.',
        },
      ],
    },
    install: {
      heading: 'Safe Installation & Update Guide',
      subheading:
        'Install Alap directly on Android in under a minute. Updating an existing install preserves every local chat.',
      preserveCalloutTitle: 'Updating keeps all your existing chats intact',
      preserveCalloutBody:
        'Because Alap stores conversations inside your phone’s Room database under package com.aistudio.alapchat.xmrqtv, installing a newer APK directly over your current version updates only the app binary—never uninstall first.',
      steps: [
        {
          step: 'Step 01',
          title: 'Download the Verified APK',
          description:
            'Tap "Download Alap APK" above to save the signed package directly to your Android Downloads folder.',
        },
        {
          step: 'Step 02',
          title: 'Allow From This Source',
          description:
            'Open the downloaded APK file. When Android prompts for permission, tap Settings and toggle on "Allow from this source" for your browser or file manager.',
        },
        {
          step: 'Step 03',
          title: 'Install or Update Seamlessly',
          description:
            'Confirm "Install" (or "Update" if Alap is already installed). All existing local Room chats, backups, and security preferences remain untouched.',
        },
      ],
    },
    faq: {
      heading: 'Frequently Asked Questions',
      subheading: 'Straightforward answers about how Alap handles your chats, updates, and privacy.',
      items: [
        {
          id: 'chat-safety',
          question: 'Will updating the Alap APK delete my existing messages?',
          answer:
            'No. As long as you install the new APK directly over your existing Alap app without uninstalling first, Android preserves your local Room database, contacts, and settings completely intact.',
        },
        {
          id: 'server-storage',
          question: 'Does Alap keep a copy of my chat history on cloud servers?',
          answer:
            'No. Alap uses a zero-bloat ephemeral relay. Messages are queued temporarily only while a recipient is offline and are automatically removed from the server once delivered.',
        },
        {
          id: 'backup-restore',
          question: 'How do I move my chats to a new phone?',
          answer:
            'Open Settings inside Alap and generate a local JSON backup file. Transfer that file to your new device and import it to restore your full conversation history offline.',
        },
        {
          id: 'allow-source',
          question: 'Why does Android ask for "Allow from this source"?',
          answer:
            'Android displays this standard security prompt whenever you install an APK outside of Google Play. Enabling it once for your browser or Alap’s built-in updater lets you install signed Alap releases directly.',
        },
        {
          id: 'floating-popup',
          question: 'Are floating glass popups mandatory?',
          answer:
            'Not at all. Background and killed-app push notifications work normally out of the box, and the floating glass popup overlay is an optional toggle you can enable or disable anytime.',
        },
        {
          id: 'gmail-verification',
          question: 'Why does Alap use Gmail verification instead of SMS OTPs?',
          answer:
            'Gmail verification avoids unreliable carrier SMS delays while letting you keep your personal phone number hidden using Alap’s built-in privacy toggles.',
        },
      ],
    },
    footer: {
      tagline: 'Fast, private, local-first Android messaging.',
      packageText: 'Package: com.aistudio.alapchat.xmrqtv',
      privacyBtn: 'Privacy Policy',
      updatesLink: 'Release Feed',
      copyright: '© 2026 Alap Messenger. Built for offline-first Android communication.',
    },
    privacyModal: {
      title: 'Alap Privacy Policy',
      subtitle: 'Effective November 2026 · Package: com.aistudio.alapchat.xmrqtv',
      closeLabel: 'Close',
      sections: [
        {
          heading: '1. Local-First Data Ownership',
          body: 'Alap stores your messages, group poll votes, and media references locally on your Android phone inside an encrypted-at-rest OS sandbox using Room DB. We do not maintain a centralized cloud archive of your message history.',
        },
        {
          heading: '2. Ephemeral Delivery Relay',
          body: 'When you send a message to an offline contact, the relay holds the payload strictly until delivery acknowledgement is received from the recipient’s device, after which it is automatically cleared.',
        },
        {
          heading: '3. Gmail Verification & Identity Controls',
          body: 'Gmail verification is used solely to prevent spam accounts and establish verified identity. Inside Settings, you can hide your phone number, user ID, online status, and read receipts independently.',
        },
        {
          heading: '4. On-Device Protection & JSON Backups',
          body: 'PIN + Biometric App Lock and FLAG_SECURE Screenshot Blocking operate entirely on your device. JSON backup files exported by you stay under your sole control.',
        },
      ],
    },
    pwa: {
      installWebApp: 'Install Offline Page',
      offlineBanner: 'You are offline — showing saved page content.',
    },
  },
  bn: {
    brandName: 'আলাপ',
    nav: {
      features: 'বৈশিষ্ট্য',
      install: 'ইনস্টল গাইড',
      faq: 'প্রশ্নোত্তর',
      privacy: 'গোপনীয়তা',
    },
    hero: {
      kicker: 'অ্যান্ড্রয়েড অ্যাপ · com.aistudio.alapchat.xmrqtv',
      headline: 'আলাপ — দ্রুত, নিরাপদ ও অফলাইন-ফার্স্ট মেসেজিং',
      subheadline:
        'আপনার কথোপকথন থাকবে আপনার ফোনেই—কোনো ক্লাউড সার্ভারে নয়। লোকাল Room ডেটাবেজ, অটো-ক্লিয়ারিং রিলে এবং ১-ট্যাপ সরাসরি APK আপডেট সুবিধা সহ তৈরি।',
      downloadBtn: 'Alap APK ডাউনলোড করুন',
      fallbackBtn: 'রিলিজ মিরর খুলুন',
      viewFeaturesBtn: 'বৈশিষ্ট্য দেখুন',
      checkingRelease: 'সর্বশেষ রিলিজ খোঁজা হচ্ছে…',
      liveStatus: 'লাইভ রিলিজ',
      cachedStatus: 'অফলাইনে সংরক্ষিত',
      offlineStatus: 'অফলাইন মোড',
      versionLabel: 'ভার্সন',
      buildLabel: 'বিল্ড',
      releasedLabel: 'প্রকাশের তারিখ',
      packageLabel: 'প্যাকেজ আইডি',
      changelogTitle: 'আপডেটের বিবরণ',
      emptyChangelog: 'পারফরম্যান্স উন্নতি এবং লোকাল স্টোরেজ অপ্টিমাইজেশন।',
      offlineDescription:
        'এই মুহূর্তে লাইভ আপডেট সার্ভারে সংযোগ করা যাচ্ছে না। সর্বশেষ স্বাক্ষরিত APK ডাউনলোড করতে আলাপ আপডেট মিরর ব্যবহার করুন।',
      retryBtn: 'পুনরায় চেষ্টা করুন',
      directNotice: 'সরাসরি স্বাক্ষরিত অ্যান্ড্রয়েড APK · প্লে স্টোরের প্রয়োজন নেই',
    },
    showcase: {
      heading: 'আপনার ফোনে হালকা, আর সার্ভারে সম্পূর্ণ নিঃশব্দ',
      subheading:
        'আলাপ অপ্রয়োজনীয় ক্লাউড ডেটা জমা রাখা ও ব্যাকগ্রাউন্ড ট্র্যাকার বাদ দেয়, যাতে প্রতিদিনের বার্তা বিনিময় থাকে দ্রুত ও ব্যক্তিগত।',
      imageAlt: 'আলাপ অ্যান্ড্রয়েড মেসেজিং অ্যাপের ইন্টারফেস প্রদর্শনী',
      pillars: [
        { label: 'মেসেজ সংরক্ষণ', value: '১০০% ফোনের Room DB-তে' },
        { label: 'রিলে নীতি', value: 'ডেলিভারির পরই অটো-ডিলিট' },
        { label: 'অ্যাপ সুরক্ষা', value: 'PIN + বায়োমেট্রিক + অ্যান্টি-স্ক্রিনশট' },
        { label: 'আপডেট সিস্টেম', value: '১-ট্যাপ ইন-অ্যাপ APK আপডেটার' },
      ],
    },
    features: {
      heading: 'সম্পূর্ণ মালিকানা, গতি ও গোপনীয়তার জন্য নির্মিত',
      subheading:
        'আলাপের প্রতিটি মূল ফিচার প্রথমে আপনার ডিভাইসে চলে এবং শুধুমাত্র মেসেজ পৌঁছে দেওয়ার সময় ন্যূনতম নেটওয়ার্ক ব্যবহার করে।',
      items: [
        {
          id: 'local-storage',
          num: '০১',
          title: 'লোকাল-ফার্স্ট ফোন স্টোরেজ',
          description:
            'আপনার সব চ্যাট ও মেসেজ ফোনের নিজস্ব Room ডেটাবেজে সুরক্ষিত থাকে। যেকোনো সময় JSON ব্যাকআপ তৈরি করে সম্পূর্ণ চ্যাট হিস্ট্রি রিস্টোর করতে পারবেন।',
        },
        {
          id: 'zero-bloat',
          num: '০২',
          title: 'জিরো-ব্লোট রিলে সার্ভার',
          description:
            'সার্ভার শুধুমাত্র অস্থায়ী মাধ্যম হিসেবে কাজ করে। প্রাপকের ফোনে মেসেজ পৌঁছে যাওয়ার সাথে সাথেই সার্ভার থেকে তা স্বয়ংক্রিয়ভাবে মুছে যায়।',
        },
        {
          id: 'push-alerts',
          num: '০৩',
          title: 'ব্যাকগ্রাউন্ড ও কিল্ড-অ্যাপ অ্যালার্ট',
          description:
            'অ্যাপ বন্ধ বা রিসেন্ট থেকে সরানো থাকলেও নির্ভরযোগ্য পুশ নোটিফিকেশন পান, সাথে ঐচ্ছিক ফ্লোটিং গ্লাস পপআপ রিপ্লাই সুবিধা।',
        },
        {
          id: 'auto-updater',
          num: '০৪',
          title: 'সরাসরি ১-ট্যাপ ইন-অ্যাপ আপডেটার',
          description:
            'অ্যাপ স্টোরের অপেক্ষা ছাড়াই অ্যাপের ভেতর থেকেই সরাসরি নতুন ভার্সন যাচাই করে ১-ট্যাপে নতুন APK ইনস্টল করুন।',
        },
        {
          id: 'security-lock',
          num: '০৫',
          title: 'জিমেইল ভেরিফিকেশন ও ২-স্তরের লক',
          description:
            'ভুয়া অ্যাকাউন্ট রোধে জিমেইল ভেরিফিকেশন, নিরাপত্তার জন্য PIN ও বায়োমেট্রিক ২-স্তরের অ্যাপ লক এবং স্ক্রিনশট ব্লকিং সুবিধা।',
        },
        {
          id: 'statuses-polls',
          num: '০৬',
          title: '২৪ ঘণ্টার স্ট্যাটাস, পোল ও প্রাইভেসি টগল',
          description:
            '২৪ ঘণ্টার টেক্সট স্ট্যাটাস শেয়ার করুন, গ্রুপ পোল তৈরি করুন এবং ফোন নম্বর, আইডি, অনলাইন স্ট্যাটাস ও রিড রিসিট আলাদাভাবে লুকিয়ে রাখুন।',
        },
      ],
    },
    install: {
      heading: 'নিরাপদ ইনস্টলেশন ও আপডেট গাইড',
      subheading:
        'এক মিনিটের কম সময়ে সরাসরি অ্যান্ড্রয়েডে আলাপ ইনস্টল করুন। নতুন ভার্সনে আপডেট করলেও পুরোনো সব চ্যাট সুরক্ষিত থাকবে।',
      preserveCalloutTitle: 'আপডেট করলে আপনার সব পুরোনো চ্যাট অক্ষত থাকবে',
      preserveCalloutBody:
        'যেহেতু আলাপ আপনার ফোনের com.aistudio.alapchat.xmrqtv প্যাকেজের অধীনে Room ডেটাবেজে চ্যাট সংরক্ষণ করে, তাই পুরোনো অ্যাপ আনইনস্টল না করে সরাসরি নতুন APK ইনস্টল করলেই কেবল অ্যাপটি আপডেট হবে এবং সব মেসেজ ঠিক থাকবে।',
      steps: [
        {
          step: 'ধাপ ০১',
          title: 'ভেরিফায়েড APK ডাউনলোড করুন',
          description:
            'উপরের "Alap APK ডাউনলোড করুন" বাটনে ট্যাপ করে স্বাক্ষরিত প্যাকেজটি আপনার ফোনের Downloads ফোল্ডারে সংরক্ষণ করুন।',
        },
        {
          step: 'ধাপ ০২',
          title: 'Allow from this source চালু করুন',
          description:
            'ডাউনলোড করা APK ফাইলটি খুলুন। অ্যান্ড্রয়েড অনুমতি চাইলে Settings-এ গিয়ে আপনার ব্রাউজার বা ফাইল ম্যানেজারের জন্য "Allow from this source" চালু করে দিন।',
        },
        {
          step: 'ধাপ ০৩',
          title: 'সহজে ইনস্টল বা আপডেট করুন',
          description:
            '"Install" (অথবা আগে ইনস্টল করা থাকলে "Update") বাটনে ট্যাপ করুন। আপনার পূর্বের সব লোকাল চ্যাট, ব্যাকআপ এবং প্রাইভেসি সেটিংস অক্ষত থাকবে।',
        },
      ],
    },
    faq: {
      heading: 'সচরাচর জিজ্ঞাসিত প্রশ্ন',
      subheading: 'আলাপের লোকাল স্টোরেজ, আপডেট ও গোপনীয়তা সম্পর্কে স্পষ্ট উত্তর।',
      items: [
        {
          id: 'chat-safety',
          question: 'নতুন APK দিয়ে আপডেট করলে কি আমার আগের চ্যাট মুছে যাবে?',
          answer:
            'না। আগের অ্যাপটি আনইনস্টল না করে সরাসরি নতুন APK ইনস্টল করলে অ্যান্ড্রয়েড আপনার ফোনের Room ডেটাবেজ, চ্যাট হিস্ট্রি ও সব সেটিংস সম্পূর্ণ অক্ষত রাখে।',
        },
        {
          id: 'server-storage',
          question: 'আলাপ কি আমার মেসেজ ক্লাউড সার্ভারে সংরক্ষণ করে?',
          answer:
            'না। আলাপ জিরো-ব্লোট রিলে ব্যবহার করে। প্রাপক অফলাইনে থাকলেই কেবল সাময়িকভাবে মেসেজ অপেক্ষা করে এবং ডেলিভারি হওয়ার সাথে সাথে সার্ভার থেকে তা মুছে ফেলা হয়।',
        },
        {
          id: 'backup-restore',
          question: 'নতুন ফোনে আমার পুরোনো চ্যাটগুলো কীভাবে নেব?',
          answer:
            'আলাপের Settings থেকে একটি লোকাল JSON ব্যাকআপ ফাইল এক্সপোর্ট করুন। সেই ফাইলটি নতুন ফোনে নিয়ে ইমপোর্ট করলেই সম্পূর্ণ চ্যাট হিস্ট্রি অফলাইনে ফিরে পাবেন।',
        },
        {
          id: 'allow-source',
          question: 'অ্যান্ড্রয়েড কেন "Allow from this source" অনুমতি চায়?',
          answer:
            'গুগল প্লে স্টোরের বাইরে থেকে কোনো APK ইনস্টল করার সময় অ্যান্ড্রয়েড নিরাপত্তার জন্য এই সাধারণ অনুমতি চায়। একবার অনুমতি দিলে আপনি সরাসরি আলাপের অফিসিয়াল বিল্ড ইনস্টল করতে পারবেন।',
        },
        {
          id: 'floating-popup',
          question: 'ফ্লোটিং গ্লাস পপআপ কি সবসময় চালু রাখতে হবে?',
          answer:
            'একেবারেই না। সাধারণ ব্যাকগ্রাউন্ড ও কিল্ড-অ্যাপ পুশ নোটিফিকেশন স্বাভাবিকভাবেই কাজ করে। ফ্লোটিং গ্লাস পপআপ একটি ঐচ্ছিক ফিচার যা আপনি চাইলে সেটিংস থেকে বন্ধ বা চালু করতে পারেন।',
        },
        {
          id: 'gmail-verification',
          question: 'এসএমএস ওটিপির বদলে জিমেইল ভেরিফিকেশন কেন ব্যবহার করা হয়?',
          answer:
            'জিমেইল ভেরিফিকেশন ক্যারিয়ার এসএমএস-এর বিলম্ব এড়িয়ে দ্রুত ভেরিফিকেশন নিশ্চিত করে এবং আলাপের প্রাইভেসি টগলের মাধ্যমে আপনার ফোন নম্বর গোপন রাখতে সাহায্য করে।',
        },
      ],
    },
    footer: {
      tagline: 'দ্রুত, নিরাপদ ও লোকাল-ফার্স্ট অ্যান্ড্রয়েড মেসেজিং।',
      packageText: 'প্যাকেজ: com.aistudio.alapchat.xmrqtv',
      privacyBtn: 'গোপনীয়তা নীতি',
      updatesLink: 'রিলিজ ফিড',
      copyright: '© ২০২৬ আলাপ মেসেঞ্জার। অফলাইন-ফার্স্ট অ্যান্ড্রয়েড যোগাযোগের জন্য নির্মিত।',
    },
    privacyModal: {
      title: 'আলাপ গোপনীয়তা নীতি',
      subtitle: 'কার্যকর নভেম্বর ২০২৬ · প্যাকেজ: com.aistudio.alapchat.xmrqtv',
      closeLabel: 'বন্ধ করুন',
      sections: [
        {
          heading: '১. লোকাল-ফার্স্ট ডেটার মালিকানা',
          body: 'আলাপ আপনার সব মেসেজ, গ্রুপ পোল ও কথোপকথন ফোনের Room ডেটাবেজে স্থানীয়ভাবে সংরক্ষণ করে। আমাদের সার্ভারে কোনো কেন্দ্রীয় চ্যাট আর্কাইভ রাখা হয় না।',
        },
        {
          heading: '২. অস্থায়ী ডেলিভারি রিলে',
          body: 'প্রাপক অফলাইনে থাকলে মেসেজটি কেবল ডেলিভারি নিশ্চিত হওয়া পর্যন্ত অস্থায়ীভাবে রিলে সার্ভারে থাকে এবং পৌঁছে যাওয়ার সাথে সাথেই স্বয়ংক্রিয়ভাবে মুছে যায়।',
        },
        {
          heading: '৩. জিমেইল ভেরিফিকেশন ও পরিচয় নিয়ন্ত্রণ',
          body: 'ভুয়া অ্যাকাউন্ট প্রতিরোধে শুধুমাত্র জিমেইল ভেরিফিকেশন ব্যবহৃত হয়। সেটিংস থেকে আপনি ফোন নম্বর, ইউজার আইডি, অনলাইন স্ট্যাটাস ও রিড রিসিট স্বাধীনভাবে লুকাতে পারবেন।',
        },
        {
          heading: '৪. ডিভাইস সুরক্ষা ও JSON ব্যাকআপ',
          body: 'PIN ও বায়োমেট্রিক ২-স্তরের অ্যাপ লক এবং স্ক্রিনশট ব্লকিং সম্পূর্ণভাবে আপনার ফোনে কাজ করে। এক্সপোর্ট করা JSON ব্যাকআপ ফাইলের পূর্ণ নিয়ন্ত্রণ আপনার হাতেই থাকে।',
        },
      ],
    },
    pwa: {
      installWebApp: 'অফলাইন পেজ ইনস্টল করুন',
      offlineBanner: 'আপনি অফলাইনে আছেন — সংরক্ষিত পেজ দেখানো হচ্ছে।',
    },
  },
};
