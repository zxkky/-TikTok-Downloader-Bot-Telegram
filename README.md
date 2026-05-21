# 🎵 TikTok Downloader Bot — Telegram

> Bot Telegram untuk mengunduh video TikTok **tanpa watermark** hanya dengan mengirimkan link. Dibangun dengan Node.js menggunakan API [tikwm.com](https://tikwm.com).

---

## ✨ Fitur

- 📥 Download video TikTok **tanpa watermark**
- 🎬 Kualitas video **HD** (1080p jika tersedia)
- ⚡ Proses cepat, video langsung dikirim ke chat
- 🤖 Interface sederhana berbasis perintah Telegram

---

## 🚀 Cara Menjalankan

### Prasyarat

- Node.js 14+
- npm
- Token Bot Telegram (dari [@BotFather](https://t.me/BotFather))

### 1. Clone repository

```bash
git clone https://github.com/username/tiktok-downloader-bot.git
cd tiktok-downloader-bot
```

### 2. Install dependensi

```bash
npm install node-telegram-bot-api request
```

### 3. Konfigurasi token bot

Buka `index.js`, ganti nilai `token` dengan token bot kamu:

```js
var token = 'ISI_TOKEN_BOT_TELEGRAM_KAMU';
```

### 4. Jalankan bot

```bash
node index.js
```

---

## 💬 Cara Penggunaan

| Perintah / Input | Respon Bot |
|---|---|
| `/start` | Pesan sambutan dan instruksi |
| Link TikTok (`tiktok.com/...`) | Video tanpa watermark dikirim ke chat |
| Teks selain link TikTok | Pesan error, minta kirim link yang valid |

**Contoh:**

```
Kamu  : https://www.tiktok.com/@user/video/123456789
Bot   : ⏳ Please wait...
Bot   : [video terkirim tanpa watermark]
```

---

## 📁 Struktur Proyek

```
tiktok-downloader-bot/
├── index.js        # File utama bot
├── package.json    # Konfigurasi dependensi Node.js
└── README.md
```

---

## 🛠️ Teknologi

| Komponen | Keterangan |
|---|---|
| Node.js | Runtime JavaScript |
| [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api) | Library Telegram Bot |
| [request](https://github.com/request/request) | HTTP client untuk memanggil API |
| [tikwm.com API](https://tikwm.com) | Layanan download TikTok tanpa watermark |

---

## ⚠️ Catatan

- Bot ini menggunakan layanan pihak ketiga ([tikwm.com](https://tikwm.com)); ketersediaan video bergantung pada layanan tersebut.
- Gunakan hanya untuk keperluan pribadi dan sesuai dengan kebijakan TikTok.

---

## 📄 Lisensi

Proyek ini dibuat untuk keperluan pembelajaran. Bebas digunakan dan dimodifikasi.
