<p align="center">
  <img src="screenshots/icon.png" width="112" alt="PinyinLyrics">
</p>

<h1 align="center">PinyinLyrics</h1>

<p align="center">
  <b>Sing along in Chinese, Japanese and Korean.</b><br>
  Lyrics with pinyin, romaji and romanization in a floating window over any music app on Android.
</p>

<p align="center">
  <a href="https://github.com/DaWy/pinyin-lyrics/releases/latest/download/PinyinLyrics.apk"><img src="https://img.shields.io/badge/Download-APK-C2410C?style=for-the-badge&logo=android&logoColor=white" alt="Download APK"></a>
  <a href="https://pinyin-lyrics.dawei.es/"><img src="https://img.shields.io/badge/Website-pinyin--lyrics.dawei.es-44403C?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Website"></a>
</p>

<p align="center">
  <a href="https://github.com/DaWy/pinyin-lyrics/releases/latest"><img src="https://img.shields.io/github/v/release/DaWy/pinyin-lyrics?label=version&color=C2410C" alt="Latest version"></a>
  <img src="https://img.shields.io/badge/Android-8.0%2B-3DDC84?logo=android&logoColor=white" alt="Android 8.0+">
  <img src="https://img.shields.io/badge/languages-11-0EA5E9" alt="11 languages">
  <img src="https://img.shields.io/badge/ads-none-16A34A" alt="No ads">
  <a href="https://ko-fi.com/davidmartinplanelles"><img src="https://img.shields.io/badge/Ko--fi-support-FF5E5B?logo=ko-fi&logoColor=white" alt="Ko-fi"></a>
</p>

<p align="center">
  🇬🇧 <b>English</b> · 🇪🇸 <a href="README.es.md">Español</a> · 🧪 <a href="https://groups.google.com/g/pinyinlyrics-testing">Join the beta</a>
</p>

<p align="center">
  <img src="screenshots/en/home.jpg" width="24%" alt="Home screen with the Now playing card, search bar and Recents and Favorites tabs">
  <img src="screenshots/en/floating.jpg" width="24%" alt="Floating lyrics window with pinyin over a music player">
  <img src="screenshots/en/fullscreen.jpg" width="24%" alt="Full-screen lyrics with pinyin and player controls">
  <img src="screenshots/en/wordcard.jpg" width="24%" alt="Word card for 勇敢 with pinyin, meaning, HSK level and character breakdown">
</p>
<p align="center"><sub>Home screen · Floating window · Full-screen lyrics · Word card</sub></p>

**PinyinLyrics** is a free Android app that detects the song playing on your phone (YouTube Music, Spotify,
etc.; free Spotify too), looks up its lyrics and shows them **over any app**, with **pinyin** for Chinese and
romanization for Japanese and Korean. It is built for learners: tap a word to look it up, color lyrics by HSK level,
or hide the pinyin you already know.

## ✨ Highlights

<table>
  <tr>
    <td width="33%" valign="top">🎧 <b>Works with your player</b><br><sub>Spotify (free too), YouTube Music, Metrolist and more. The song is detected automatically.</sub></td>
    <td width="33%" valign="top">⏱️ <b>Synced lyrics</b><br><sub>The current line is highlighted as the song plays. Tap a line to jump there.</sub></td>
    <td width="33%" valign="top">🀄 <b>Pinyin above each character</b><br><sub>Word-aware readings, tone marks or numbers, simplified or traditional.</sub></td>
  </tr>
  <tr>
    <td valign="top">📖 <b>Word card</b><br><sub>Tap a character: pinyin, meaning, HSK level and a character breakdown.</sub></td>
    <td valign="top">🎯 <b>Practice mode</b><br><sub>Hide the pinyin of HSK words you already know, and color the rest by level.</sub></td>
    <td valign="top">🪟 <b>Floating window</b><br><sub>Drag it, resize it, shrink it to a bubble, or use the one-line mini mode.</sub></td>
  </tr>
</table>

## 🎵 Features

<details open>
<summary><b>🎧 Lyrics that follow your music</b></summary>

<img src="screenshots/en/features/feat-sync.png" width="260" align="right" alt="Synced full-screen lyrics: the current line is highlighted, with player controls below">

- Automatic detection of the song that is playing in **Spotify** (also the free version: it detects ads and doesn't
  look up lyrics for them), **YouTube Music**, **Metrolist** and more.
- It always tries to find **synced lyrics** first, and falls back to plain text only if there are none. A badge shows
  whether the lyrics are synced.
- **Follow along:** the current line is enlarged with an animation. Scroll freely and the highlight returns by itself
  5 s later; auto-scroll can be turned off with a button. **Tap a line to jump** to that moment in the song.
- Nudge the timing ±0.5 s per song, plus a **global sync offset** on top.
- **Playback controls** (previous, pause, next) in the floating window and full screen.

<br clear="right">

</details>

<details open>
<summary><b>🈶 Chinese, Japanese and Korean</b></summary>

<img src="screenshots/en/features/feat-languages.png" width="220" align="right" alt="Chinese settings: script (as in the lyrics, simplified or traditional) and romanization system (pinyin, zhuyin or jyutping)">

- **Chinese:** pinyin by word (correct readings for characters with several pronunciations), with tone marks,
  numbers or no tones; simplified or traditional script; **zhuyin** (bopomofo) and **jyutping** (Cantonese).
- **Japanese:** Hepburn romaji or hiragana, with kanji readings.
- **Korean:** Revised Romanization.
- The language is detected per song.

<br clear="right">
<br>

<p align="center">
  <img src="screenshots/en/features/feat-japanese.png" width="280" alt="Japanese lyrics with Hepburn romaji above each line; the current line is highlighted">
  &nbsp;
  <img src="screenshots/en/features/feat-korean.png" width="280" alt="Korean lyrics with Revised Romanization above each line; the current line is highlighted">
</p>
<p align="center"><sub>Japanese (romaji) · Korean (Revised Romanization)</sub></p>

</details>

<details open>
<summary><b>📖 Learn while you listen</b></summary>

<img src="screenshots/en/features/feat-wordcard.png" width="260" align="right" alt="Word card for 勇敢: pinyin, meaning, HSK 4 and the meaning of each character">

- **Aligned pinyin:** drawn above each character, not on a separate line.
- **Word card:** tap a Chinese character to see the word with pinyin, meaning (CC-CEDICT), HSK level and a
  character-by-character breakdown; copy it or open your dictionary app.
- **Colors by HSK 3.0 level**, and a **practice mode** that hides the pinyin of HSK words up to the level you choose,
  so you only read what you still need.
- **Beginner's guide** on first launch (and in the menu).

<br clear="right">

</details>

<details open>
<summary><b>🪟 Floating window, full screen and mini mode</b></summary>

- **Floating window:** draggable, resizable, and it can shrink to a small **bubble** that snaps to the screen edge
  (tap it to bring the lyrics back). It can open by itself when music starts and hide when it stops.
- **Full-screen lyrics:** they follow the song that is playing, can be reloaded if they're wrong, copied or shared as
  Hanzi, pinyin or both.
- **Mini mode:** just the current line (and the next one) over a nearly transparent background; draggable, with a ✕
  to close it. Needs synced lyrics.
- **Quick Settings tile** to open and close the window.
- **Home screen:** a "Now playing" card with blurred cover art and the current line, plus Recents and Favorites.

<p align="center">
  <img src="screenshots/en/features/feat-floating.png" width="300" alt="Floating window with synced pinyin lyrics and playback controls over a music player">
  &nbsp;
  <img src="screenshots/en/features/feat-mini.png" width="300" alt="Mini mode: the current and next line over a nearly transparent background">
</p>
<p align="center"><sub>Floating window · Mini mode</sub></p>

<br clear="right">

</details>

<details open>
<summary><b>🛠️ Search, favorites and fixes</b></summary>

<img src="screenshots/en/features/feat-library.png" width="260" align="right" alt="Recents and Favorites tabs on the home screen">

- **Lyrics search** by title or artist, with endless scrolling.
- **Favorites** (saved on your phone, with backup and restore) and **recently played** songs.
- **Wrong lyrics?** Tap ↻ to try the next match, or long-press it to pick the right ones yourself; your choice is
  remembered for that song.
- **Paste or import your own lyrics** (text or `.lrc`) when no source has them.
- **Share a line as an image.**
- A list of music apps to ignore.
- Material 3, light and dark mode, and 11 interface languages: English, Spanish, Catalan, French, German,
  Portuguese, Italian, Chinese (Simplified and Traditional), Japanese and Korean.

<br clear="right">

</details>

## 📲 Install

1. Download [**PinyinLyrics.apk**](https://github.com/DaWy/pinyin-lyrics/releases/latest/download/PinyinLyrics.apk)
   (latest version; all versions are on the [Releases](../../releases) page).
2. Open it on your phone. Android will ask you to allow installing apps from unknown sources for your browser or
   file manager.
3. Open PinyinLyrics and grant the permissions it asks for.

Requires **Android 8.0 or later**.

| Permission | What it is for |
|---|---|
| Notification access | Reading the title and artist of the song that is playing. |
| Display over other apps | Drawing the floating lyrics window. |

> [!TIP]
> On Android 13 or later, if the "Notification access" switch is greyed out, go to
> Settings > Apps > PinyinLyrics > ⋮ > *Allow restricted settings*. If automatic mode stops working after a while,
> remove the battery restriction for the app: some manufacturers kill background services.

## 🔒 Privacy

**No accounts, ads or analytics.** To look up lyrics, the app sends the song's **title and artist** (or what you type
in the search box) to the lyrics services (see below). Favorites, recent songs and sync adjustments are stored
**only on your device** and can be cleared or turned off in Settings. Optionally, once a day at most, the app asks
GitHub for the latest release number to tell you about updates (no personal data is sent); you can turn this off in
Settings. This check is not present in the Google Play version. Nothing else leaves your device.

## 📜 About the lyrics

PinyinLyrics **does not include or host any lyrics**: at the user's request it looks them up on third-party
services and shows them on the user's device. Lyrics are copyrighted by their owners.

| Source | Status |
|---|---|
| [LRCLIB](https://lrclib.net) | Main source, with synced lyrics. Open, community-run service. |
| [lyrics.ovh](https://lyrics.ovh) | Second source, unsynced lyrics only; queried after LRCLIB. |

This project is not affiliated with LRCLIB, lyrics.ovh or any music app.

## ☕ Support

PinyinLyrics is free and has no ads. If it helps you learn, you can
[buy me a coffee on Ko-fi](https://ko-fi.com/davidmartinplanelles).

<p align="center">
  <a href="https://ko-fi.com/davidmartinplanelles"><img src="https://ko-fi.com/img/githubbutton_sm.svg" alt="Support me on Ko-fi"></a>
</p>

## Third-party licenses

See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md). The same notice is available inside the app (menu ⋮ > Licenses).
