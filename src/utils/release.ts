export const ALAP_PACKAGE_ID = 'com.aistudio.alapchat.xmrqtv';
export const UPDATES_SITE_URL = 'https://alap-updates.netlify.app';
export const VERSION_JSON_URL = `${UPDATES_SITE_URL}/version.json`;
export const CACHE_STORAGE_KEY = 'alap_cached_release_v1';

export interface ReleaseInfo {
  appName: string;
  packageId: string;
  latestVersionName: string;
  latestVersionCode: number;
  forceUpdateRequired: boolean;
  apkUrl: string;
  releaseDate: string;
  changelog: string[];
}

export type ReleaseSource = 'live' | 'cached' | 'offline';

export interface ReleaseFetchResult {
  status: ReleaseSource;
  release: ReleaseInfo | null;
  errorMessage: string | null;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function isValidHttpUrl(value: string): boolean {
  try {
    const parsed = new URL(value);
    return parsed.protocol === 'https:' || parsed.protocol === 'http:';
  } catch {
    return false;
  }
}

export function normalizeChangelog(rawChangelog: unknown): string[] {
  if (Array.isArray(rawChangelog)) {
    return rawChangelog
      .filter((entry): entry is string => typeof entry === 'string')
      .map((entry) => entry.trim())
      .filter((entry) => entry.length > 0);
  }
  if (typeof rawChangelog === 'string') {
    return rawChangelog
      .split(/\r?\n|•/)
      .map((entry) => entry.trim())
      .filter((entry) => entry.length > 0);
  }
  return [];
}

export function parseVersionPayload(raw: unknown): ReleaseInfo | null {
  if (!isRecord(raw)) {
    return null;
  }

  const versionName =
    typeof raw.latestVersionName === 'string' ? raw.latestVersionName.trim() : '';
  const rawCode = raw.latestVersionCode;
  const versionCode =
    typeof rawCode === 'number' && Number.isFinite(rawCode)
      ? Math.trunc(rawCode)
      : typeof rawCode === 'string' && /^\d+$/.test(rawCode.trim())
        ? Number.parseInt(rawCode.trim(), 10)
        : NaN;

  const apkUrl = typeof raw.apkUrl === 'string' ? raw.apkUrl.trim() : '';
  const releaseDate = typeof raw.releaseDate === 'string' ? raw.releaseDate.trim() : '';

  if (!versionName || !Number.isFinite(versionCode) || versionCode < 1 || !isValidHttpUrl(apkUrl)) {
    return null;
  }

  return {
    appName: typeof raw.appName === 'string' && raw.appName.trim() ? raw.appName.trim() : 'Alap',
    packageId:
      typeof raw.packageId === 'string' && raw.packageId.trim()
        ? raw.packageId.trim()
        : ALAP_PACKAGE_ID,
    latestVersionName: versionName,
    latestVersionCode: versionCode,
    forceUpdateRequired: Boolean(raw.forceUpdateRequired),
    apkUrl,
    releaseDate: releaseDate || '2026-11-15',
    changelog: normalizeChangelog(raw.changelog),
  };
}

const EN_MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const BN_MONTHS = [
  'জানু',
  'ফেব্রু',
  'মার্চ',
  'এপ্রিল',
  'মে',
  'জুন',
  'জুলাই',
  'আগস্ট',
  'সেপ্টে',
  'অক্টো',
  'নভে',
  'ডিসে',
];

const BN_DIGITS = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

export function toLocalizedDigits(value: string | number, lang: 'en' | 'bn'): string {
  const str = String(value);
  if (lang === 'en') {
    return str;
  }
  return str.replace(/\d/g, (digit) => BN_DIGITS[Number(digit)] ?? digit);
}

export function formatReleaseDate(isoDate: string, lang: 'en' | 'bn'): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate.trim());
  if (!match) {
    return toLocalizedDigits(isoDate, lang);
  }
  const year = match[1];
  const monthIdx = Number.parseInt(match[2], 10) - 1;
  const day = Number.parseInt(match[3], 10);

  if (monthIdx < 0 || monthIdx > 11 || !Number.isFinite(day)) {
    return toLocalizedDigits(isoDate, lang);
  }

  if (lang === 'bn') {
    return `${toLocalizedDigits(day, 'bn')} ${BN_MONTHS[monthIdx]} ${toLocalizedDigits(year, 'bn')}`;
  }
  return `${EN_MONTHS[monthIdx]} ${day}, ${year}`;
}

export function readCachedRelease(storage?: Pick<Storage, 'getItem'> | null): ReleaseInfo | null {
  try {
    const store = storage ?? (typeof window !== 'undefined' ? window.localStorage : null);
    if (!store) return null;
    const raw = store.getItem(CACHE_STORAGE_KEY);
    if (!raw) return null;
    return parseVersionPayload(JSON.parse(raw));
  } catch {
    return null;
  }
}

export function writeCachedRelease(
  release: ReleaseInfo,
  storage?: Pick<Storage, 'setItem'> | null,
): void {
  try {
    const store = storage ?? (typeof window !== 'undefined' ? window.localStorage : null);
    if (!store) return;
    store.setItem(CACHE_STORAGE_KEY, JSON.stringify(release));
  } catch {
    // Ignore storage quota errors cleanly
  }
}

export async function fetchLiveRelease(
  fetchImpl: typeof fetch = fetch,
  timeoutMs = 6000,
): Promise<ReleaseFetchResult> {
  const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
  const timer =
    controller && timeoutMs > 0 ? setTimeout(() => controller.abort(), timeoutMs) : null;

  try {
    const response = await fetchImpl(VERSION_JSON_URL, {
      method: 'GET',
      headers: { Accept: 'application/json' },
      cache: 'no-store',
      signal: controller?.signal,
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const json = (await response.json()) as unknown;
    const parsed = parseVersionPayload(json);
    if (!parsed) {
      throw new Error('Malformed version payload');
    }

    writeCachedRelease(parsed);
    return {
      status: 'live',
      release: parsed,
      errorMessage: null,
    };
  } catch (err) {
    const cached = readCachedRelease();
    if (cached) {
      return {
        status: 'cached',
        release: cached,
        errorMessage: err instanceof Error ? err.message : 'Network unavailable',
      };
    }

    return {
      status: 'offline',
      release: null,
      errorMessage: err instanceof Error ? err.message : 'Unable to reach update server',
    };
  } finally {
    if (timer) {
      clearTimeout(timer);
    }
  }
}
