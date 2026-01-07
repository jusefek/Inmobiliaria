# 🚀 Guía de Deployment en Hetzner VPS

## Resumen de Costes

| Servicio | Coste Mensual |
|----------|---------------|
| Hetzner VPS CX22 (2vCPU, 2GB RAM) | €4.51 |
| Dominio (.com anual / 12) | ~€1.00 |
| **TOTAL** | **~€5.51/mes** |

*(Backups opcionales: +€0.68/mes)*

---

## Requisitos Previos

1. ✅ Cuenta en [Hetzner Cloud](https://www.hetzner.com/cloud)
2. ✅ Dominio registrado (NameCheap, GoDaddy, etc.)
3. ✅ Cuenta GitHub con repositorio del proyecto
4. ✅ Terminal SSH (Windows: PowerShell/WSL, Mac/Linux: Terminal nativo)

---

## Paso 1: Crear VPS en Hetzner

### 1.1 Acceder a Hetzner Cloud Console
- Ir a: https://console.hetzner.cloud
- Crear nuevo proyecto: "Inmovalencia Production"

### 1.2 Crear Servidor
**Configuración:**
- **Ubicación**: Nuremberg, Germany (mejor para España)
- **Imagen**: Ubuntu 22.04
- **Tipo**: **CX22** (2 vCPU, 2GB RAM, 40GB SSD) - €4.51/mes
- **Networking**: IPv4 + IPv6
- **SSH Key**: Genera o sube tu clave SSH pública
- **Backups**: ✅ Activar (opcional, +15% = €0.68/mes)

**Crear servidor** → Esperar 1-2 minutos

### 1.3 Conectar por SSH
```bash
ssh root@TU_IP_SERVIDOR
```

---

## Paso 2: Configuración Inicial del Servidor

### 2.1 Ejecutar Script de Setup

Copiar el archivo `setup-server.sh` al servidor:

```bash
# Desde tu máquina local (PowerShell/Terminal)
scp setup-server.sh root@TU_IP_SERVIDOR:/root/
```

Ejecutar en el servidor:

```bash
ssh root@TU_IP_SERVIDOR
chmod +x setup-server.sh
./setup-server.sh
```

**Este script instala:**
- Docker + Docker Compose
- Nginx
- Certbot (SSL gratis)
- Git
- Firewall configurado

⚠️ **IMPORTANTE**: Desconectar y volver a conectar después para aplicar permisos Docker:
```bash
exit
ssh root@TU_IP_SERVIDOR
```

---

## Paso 3: Configurar Dominio

### 3.1 Apuntar DNS a Hetzner

En tu proveedor de dominio (NameCheap, GoDaddy, etc.):

**Crear registros DNS tipo A:**
```
@ (root)          →   TU_IP_SERVIDOR
www               →   TU_IP_SERVIDOR
```

**Ejemplo:**
```
tudominio.com     →   65.108.123.45
www.tudominio.com →   65.108.123.45
```

Esperar 5-30 minutos para propagación DNS.

**Verificar:**
```bash
ping tudominio.com
```

---

## Paso 4: Clonar Proyecto

```bash
cd /opt/inmovalencia
git clone https://github.com/TU_USUARIO/Inmobiliaria.git .
```

---

## Paso 5: Configurar Variables de Entorno

### 5.1 Copiar Template
```bash
cp .env.production.example .env.production
```

### 5.2 Generar NEXTAUTH_SECRET
```bash
openssl rand -base64 32
```

### 5.3 Editar Variables
```bash
nano .env.production
```

**Configuración mínima:**
```bash
# Database
POSTGRES_USER=inmobiliaria
POSTGRES_PASSWORD=TU_PASSWORD_SEGURO_AQUI
POSTGRES_DB=inmobiliaria_prod

# NextAuth (pegar output del openssl)
NEXTAUTH_SECRET=abc123xyz...
NEXTAUTH_URL=https://tudominio.com

# Stripe (usar keys de TEST primero)
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Email (ya configurado)
EMAIL_USER=info.teselaprojects@gmail.com
EMAIL_PASS=bohp mraj bnpa zwmd

# Admin
ADMIN_EMAIL=tu-email@gmail.com
```

**Guardar:** `Ctrl+X` → `Y` → `Enter`

---

## Paso 6: Configurar Nginx + SSL

### 6.1 Actualizar nginx.conf con tu dominio

```bash
nano nginx.conf
```

Reemplazar `tudominio.com` con tu dominio real.

### 6.2 Copiar configuración
```bash
sudo cp nginx.conf /etc/nginx/sites-available/inmovalencia
sudo ln -s /etc/nginx/sites-available/inmovalencia /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default  # Eliminar config por defecto
```

### 6.3 Generar Certificado SSL (Let's Encrypt)
```bash
sudo certbot --nginx -d tudominio.com -d www.tudominio.com
```

**Responder:**
- Email: tu-email@gmail.com
- Terms: `Y`
- Share email: `N`

**Auto-renovación:** Certbot configura cron automáticamente.

### 6.4 Verificar y Reload
```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

## Paso 7: Primera Deployment

### 7.1 Dar permisos al script
```bash
chmod +x deploy.sh
```

### 7.2 Ejecutar deployment
```bash
./deploy.sh
```

**Esto hará:**
1. ✅ Construir imagen Docker con Next.js
2. ✅ Levantar PostgreSQL
3. ✅ Ejecutar migraciones Prisma
4. ✅ Iniciar aplicación en puerto 3000

**Tiempo estimado:** 5-10 minutos (primera vez)

### 7.3 Verificar logs
```bash
docker-compose -f docker-compose.prod.yml logs -f app
```

Buscar: `✓ Ready in X.Xs` → **✅ App funcionando!**

---

## Paso 8: Configurar Stripe Webhook

### 8.1 Crear Webhook en Stripe Dashboard

1. Ir a: https://dashboard.stripe.com/test/webhooks
2. Click "Add endpoint"
3. **Endpoint URL:** `https://tudominio.com/api/webhooks/stripe`
4. **Events to send:**
   - `checkout.session.completed`
5. Copiar **Signing secret** (empieza con `whsec_`)

### 8.2 Actualizar .env.production
```bash
nano .env.production
```

Actualizar:
```bash
STRIPE_WEBHOOK_SECRET=whsec_TU_SECRET_AQUI
```

### 8.3 Redeploy
```bash
./deploy.sh
```

---

## Paso 9: Verificación Final

### 9.1 Acceder a la Web
```
https://tudominio.com
```

**Verificar:**
- ✅ SSL (candado verde)
- ✅ Home page carga
- ✅ Blog funciona
- ✅ Formulario contacto envía emails
- ✅ Checkout audit redirige a Stripe

### 9.2 Probar Audit Flow
1. Ir a `/es/services/audit/checkout`
2. Llenar formulario
3. Click "Pagar 49€"
4. **Verificar:**
   - Redirección a Stripe
   - **Email recibido** en `info.teselaprojects@gmail.com`

---

## Comandos Útiles

### Ver logs en tiempo real
```bash
docker-compose -f docker-compose.prod.yml logs -f
```

### Reiniciar aplicación
```bash
docker-compose -f docker-compose.prod.yml restart app
```

### Ver estado de servicios
```bash
docker-compose -f docker-compose.prod.yml ps
```

### Acceder a PostgreSQL
```bash
docker exec -it inmovalencia-db psql -U inmobiliaria -d inmobiliaria_prod
```

### Backup de Base de Datos
```bash
docker exec inmovalencia-db pg_dump -U inmobiliaria inmobiliaria_prod > backup_$(date +%Y%m%d).sql
```

### Restore de Backup
```bash
cat backup_20250106.sql | docker exec -i inmovalencia-db psql -U inmobiliaria -d inmobiliaria_prod
```

---

## Deployments Futuros

Cuando hagas cambios en el código:

```bash
cd /opt/inmovalencia
git pull origin main
./deploy.sh
```

**¡Listo!** El script se encarga de todo automáticamente.

---

## Monitoreo y Mantenimiento

### Logs de Nginx
```bash
sudo tail -f /var/log/nginx/inmovalencia-access.log
sudo tail -f /var/log/nginx/inmovalencia-error.log
```

### Actualizar Sistema
```bash
sudo apt update && sudo apt upgrade -y
```

### Limpiar imágenes Docker antiguas
```bash
docker system prune -a
```

---

## Troubleshooting

### Problema: "Cannot connect to database"
```bash
docker-compose -f docker-compose.prod.yml logs postgres
```
Verificar que `DATABASE_URL` en `.env.production` sea correcta.

### Problema: "502 Bad Gateway"
```bash
docker-compose -f docker-compose.prod.yml ps
```
Verificar que el contenedor `app` esté running.

### Problema: Emails no se envían
```bash
docker-compose -f docker-compose.prod.yml logs app | grep -i email
```
Verificar `EMAIL_USER` y `EMAIL_PASS` en `.env.production`.

### Problema: Stripe webhook no funciona
1. Verificar en Stripe Dashboard: Webhooks → Ver eventos
2. Verificar `STRIPE_WEBHOOK_SECRET` en `.env.production`
3. Redeploy: `./deploy.sh`

---

## Pasar a Producción (Stripe Real)

Cuando estés listo para pagos reales:

1. **Activar cuenta Stripe** (verificación de identidad)
2. **Generar keys de producción** en Stripe Dashboard
3. **Actualizar `.env.production`:**
   ```bash
   STRIPE_SECRET_KEY=sk_live_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
   ```
4. **Crear webhook de producción** → Copiar nuevo `whsec_`
5. **Redeploy:** `./deploy.sh`

---

## ✅ Resumen de Costes Finales

| Concepto | Coste |
|----------|-------|
| Hetzner CX22 | €4.51/mes |
| Dominio | ~€12/año (€1/mes) |
| Backups (opcional) | €0.68/mes |
| **TOTAL SIN BACKUPS** | **€5.51/mes** |
| **TOTAL CON BACKUPS** | **€6.19/mes** |

**vs Alternativas:**
- Vercel + Neon (gratis inicial, luego ~$20/mes)
- Railway (~$15/mes)
- DigitalOcean App Platform (~$18/mes)

**Ahorro anual: ~€150-250** 💰

---

## Soporte

Si tienes problemas, revisa:
1. 📋 Logs: `docker-compose -f docker-compose.prod.yml logs`
2. 🔍 Nginx: `sudo nginx -t`
3. 🌐 DNS: `ping tudominio.com`
4. 🔒 SSL: `sudo certbot certificates`

---

**¡Listo!** Tu plataforma está corriendo en producción por menos de €6/mes 🎉
