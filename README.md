# Authentication: Email/Password and GitHub

ตัวอย่างระบบ Authentication ด้วย NextAuth.js, SQLite, Prisma และ bcrypt ตามบทเรียน [it-nkc/auth](https://github.com/it-nkc/auth)

## ความต้องการ

- Node.js 20.19 ขึ้นไป
- npm
- บัญชี GitHub และ OAuth App หากต้องการทดสอบ GitHub sign-in

## ติดตั้ง

```bash
npm install
```

คัดลอกไฟล์ environment:

```bash
cp .env.example .env
```

บน Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

สร้าง `AUTH_SECRET` ด้วยคำสั่ง:

```bash
npx auth secret
```

สร้าง GitHub OAuth App ที่ GitHub: **Settings → Developer settings → OAuth Apps → New OAuth App** จากนั้นตั้งค่า:

```text
Application name: Next.js Authentication Demo
Homepage URL: http://localhost:3000
Authorization callback URL: http://localhost:3000/api/auth/callback/github
```

นำ Client ID และสร้าง Client Secret จาก OAuth App แล้วกำหนดใน `.env`:

```dotenv
AUTH_GITHUB_ID="ค่าจาก GitHub OAuth App"
AUTH_GITHUB_SECRET="ค่าจาก GitHub OAuth App"
```

สร้างฐานข้อมูลและ Prisma Client:

```bash
npx prisma migrate dev --name auth_user
npx prisma generate
```

เริ่มแอป:

```bash
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000)

## วิธีใช้งาน

- เลือกสร้างบัญชีเพื่อสมัครด้วยชื่อ อีเมล และรหัสผ่าน
- เข้าสู่ระบบได้ด้วยอีเมล/รหัสผ่าน หรือปุ่ม **Sign in with GitHub**
- หน้าหลักแสดงสถานะ session และมีปุ่มออกจากระบบ
- `/admin` จำกัดเฉพาะ role `ADMIN`; ผู้ใช้ทั่วไปจะถูกส่งไป `/unauthorized`

บัญชีที่สมัครใหม่และบัญชี GitHub เริ่มต้นเป็น `USER` เพื่อไม่ให้ผู้ใช้ยกระดับสิทธิ์ของตนเอง หากต้องการทดสอบหน้า Admin ให้ผู้ดูแลเปลี่ยน role ของบัญชีที่เชื่อถือได้เป็น `ADMIN` ผ่าน Prisma Studio:

```bash
npx prisma studio
```

## ตรวจสอบโปรเจกต์

```bash
npm run lint
npm run build
```

## ส่งขึ้น GitHub

สร้าง repository เปล่าบน GitHub แล้วตั้ง remote ของตัวเอง (แทน `YOUR-USERNAME`):

```bash
git remote add origin https://github.com/YOUR-USERNAME/auth.git
git add .
git commit -m "Implement credentials and GitHub authentication"
git push -u origin HEAD
```

repository นี้จัดแยกจากโปรเจกต์อื่น ไฟล์ `.env` และฐานข้อมูล SQLite ถูกละเว้นจาก Git อย่าอัปโหลด `AUTH_SECRET` หรือ OAuth credentials

เมื่อติดตั้ง production ให้เปลี่ยน Homepage URL และ callback URL ของ OAuth App ให้ตรงกับ domain จริง และกำหนด environment variables บน hosting provider
