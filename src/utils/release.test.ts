import test from 'node:test';
import assert from 'node:assert/strict';
import {
  ALAP_PACKAGE_ID,
  formatReleaseDate,
  normalizeChangelog,
  parseVersionPayload,
  toLocalizedDigits,
  fetchLiveRelease,
} from './release';

test('parseVersionPayload parses valid live version.json with array changelog', () => {
  const parsed = parseVersionPayload({
    appName: 'Alap',
    packageId: ALAP_PACKAGE_ID,
    latestVersionName: '1.2.0',
    latestVersionCode: 4,
    forceUpdateRequired: false,
    apkUrl: 'https://github.com/Maiyas-Ahmed/Alap.1/releases/download/v1.2.0/alap.apk',
    releaseDate: '2026-11-15',
    changelog: ['Improved background alert reliability', 'Faster JSON backup export'],
  });

  assert.ok(parsed);
  assert.equal(parsed.latestVersionName, '1.2.0');
  assert.equal(parsed.latestVersionCode, 4);
  assert.equal(parsed.changelog.length, 2);
  assert.equal(
    parsed.apkUrl,
    'https://github.com/Maiyas-Ahmed/Alap.1/releases/download/v1.2.0/alap.apk',
  );
});

test('parseVersionPayload normalizes string changelog and rejects invalid apkUrl', () => {
  const validStringChangelog = normalizeChangelog('Line one\n• Line two\n\n');
  assert.deepEqual(validStringChangelog, ['Line one', 'Line two']);

  const invalid = parseVersionPayload({
    latestVersionName: '1.0',
    latestVersionCode: 1,
    apkUrl: 'javascript:alert(1)',
  });
  assert.equal(invalid, null);
});

test('formatReleaseDate and toLocalizedDigits render EN and BN properly', () => {
  assert.equal(formatReleaseDate('2026-11-15', 'en'), 'Nov 15, 2026');
  assert.equal(formatReleaseDate('2026-11-15', 'bn'), '১৫ নভে ২০২৬');
  assert.equal(toLocalizedDigits('1.0', 'bn'), '১.০');
});

test('fetchLiveRelease returns live on 200 and offline fallback on network error', async () => {
  const okFetch = (async () =>
    new Response(
      JSON.stringify({
        appName: 'Alap',
        packageId: ALAP_PACKAGE_ID,
        latestVersionName: '1.0',
        latestVersionCode: 1,
        forceUpdateRequired: false,
        apkUrl: 'https://github.com/Maiyas-Ahmed/Alap.1/releases/download/v1.0/alap-latest.apk',
        releaseDate: '2026-11-15',
        changelog: ['Initial release'],
      }),
      { status: 200 },
    )) as unknown as typeof fetch;

  const liveResult = await fetchLiveRelease(okFetch, 2000);
  assert.equal(liveResult.status, 'live');
  assert.equal(liveResult.release?.latestVersionName, '1.0');

  const failingFetch = (async () => {
    throw new Error('Offline');
  }) as unknown as typeof fetch;

  const offlineResult = await fetchLiveRelease(failingFetch, 2000);
  assert.equal(offlineResult.status, 'offline');
  assert.equal(offlineResult.release, null);
});
