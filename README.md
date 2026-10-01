<p align="center">
  <img src="screenshots/icon.png" width="120" alt="PinyinLyrics">
</p>

# PinyinLyrics

🇬🇧 **English** · 🇪🇸 [Español](README.es.md)

**PinyinLyrics** is a free Android app that detects the song playing on your phone (YouTube Music, Spotify,
etc.), looks up its lyrics and shows them in a **floating window over any app**, with **pinyin** for Chinese and
romanization for Japanese and Korean.

<p align="center">
  <img src="screenshots/01-japanese.png" width="19%" alt="Japanese lyrics with romaji">
  <img src="screenshots/02-chinese.png" width="19%" alt="Chinese lyrics with pinyin">
  <img src="screenshots/03-settings.png" width="19%" alt="Settings">
  <img src="screenshots/04-chinese-settings.png" width="19%" alt="Chinese settings">
  <img src="screenshots/05-general-settings.png" width="19%" alt="General settings">
</p>

<p align="center"><sub>Japanese with romaji · Chinese with pinyin · Settings (screenshots shown with the Spanish interface)</sub></p>

## Features

- Automatic detection of the song that is playing. It always tries to find **synced lyrics** first, and falls back to
  plain text only if there are none. A badge shows whether the lyrics are synced, and you can nudge the timing
  ±0.5 s per song.
- Floating window: draggable, resizable, and it can shrink to a small **bubble** that snaps to the screen edge (tap it to
  bring the lyrics back). It can open by itself when music starts and hide when it stops.
- **Full-screen lyrics:** expand the lyrics inside the app. They follow the song that is playing (and switch by
  themselves when the song changes), can be reloaded if they're wrong, copied or shared as Hanzi, pinyin or both.
- **Mini mode:** just the current line (and the next one) over a nearly transparent background; draggable, with a ✕
  to close it. It needs synced lyrics, and turns itself off with a notice if they aren't.
- **Wrong lyrics?** Long-press ↻ to search and pick the right ones yourself; your choice is remembered for that song.
- **Lyrics search** by title or artist, with endless scrolling, plus **favorites** (saved on your phone, with backup
  and restore) and a list of **recently played** songs on the home screen.
- **Chinese:** pinyin by word (correct readings for characters with several pronunciations), with tone marks,
  numbers or no tones; simplified or traditional script; colors by HSK 3.0 level.
- **Japanese:** Hepburn romaji, with kanji readings. **Korean:** Revised Romanization.
- Several lyrics sources you can enable or disable, a ↻ button to discard wrong lyrics and try the next match, and a
  list of music apps to ignore.
- Material 3, with light and dark mode following the system.
- Available in English, Spanish, Catalan, French, German, Portuguese, Italian, Chinese (Simplified and
  Traditional), Japanese and Korean.

## Install

1. Download the APK from the latest version on the [**Releases**](../../releases/latest) page.
2. Open it on your phone. Android will ask you to allow installing apps from unknown sources for your browser or
   file manager.
3. Open PinyinLyrics and grant the permissions it asks for.

Requires **Android 8.0 or later**.

### Permissions

| Permission | What it is for |
|---|---|
| Notification access | Reading the title and artist of the song that is playing. |
| Display over other apps | Drawing the floating lyrics window. |

On Android 13 or later, if the "Notification access" switch is greyed out, go to
Settings > Apps > PinyinLyrics > ⋮ > *Allow restricted settings*. If automatic mode stops working after a while,
remove the battery restriction for the app: some manufacturers kill background services.

## Privacy

No accounts, ads or analytics. To look up lyrics, the app sends the song's **title and artist** (or what you type in
the search box) to the configured lyrics services (see below). Favorites, recent songs and sync adjustments are stored
**only on your device** and can be cleared or turned off in Settings. Optionally, once a day at most, the app asks
GitHub for the latest release number to tell you about updates (no personal data is sent); you can turn this off in
Settings. Nothing else leaves your device.

## About the lyrics

PinyinLyrics **does not include or host any lyrics**: at the user's request it looks them up on third-party
services and shows them on the user's device. Lyrics are copyrighted by their owners.

| Source | Status |
|---|---|
| [LRCLIB](https://lrclib.net) | Open, community-run service. |
| NetEase Cloud Music, Kugou Music | **Unofficial** endpoints, used without any agreement with those services; they may stop working. |
| Lyrics.ovh | Third-party service, text only. |

This project is not affiliated with any of these services or with any music app.

## Third-party licenses

See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md). The same notice is available inside the app (menu ⋮ > Licenses).
