#!/bin/bash
# Hetzner VPS Initial Setup Script
# Run this ONCE on a fresh Hetzner Ubuntu 22.04 server

set -e

echo "🔧 Starting Hetzner VPS Setup..."

# Update system
echo "📦 Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install Docker
echo "🐳 Installing Docker..."
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
rm get-docker.sh

# Install Docker Compose
echo "🔗 Installing Docker Compose..."
sudo apt install -y docker-compose

# Install Nginx
echo "🌐 Installing Nginx..."
sudo apt install -y nginx

# Install Certbot (Let's Encrypt)
echo "🔒 Installing Certbot..."
sudo apt install -y certbot python3-certbot-nginx

# Install Git
echo "📚 Installing Git..."
sudo apt install -y git

# Setup firewall
echo "🔥 Configuring firewall..."
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw --force enable

# Create app directory
echo "📁 Creating application directory..."
sudo mkdir -p /opt/inmovalencia
sudo chown $USER:$USER /opt/inmovalencia

# Clone repository (user will need to provide URL)
echo ""
echo "✅ Base setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Clone your repository to /opt/inmovalencia"
echo "   cd /opt/inmovalencia"
echo "   git clone YOUR_REPO_URL ."
echo ""
echo "2. Copy and configure environment:"
echo "   cp .env.production.example .env.production"
echo "   nano .env.production  # Edit with real values"
echo ""
echo "3. Generate NEXTAUTH_SECRET:"
echo "   openssl rand -base64 32"
echo ""
echo "4. Setup SSL certificate:"
echo "   sudo certbot --nginx -d tudominio.com -d www.tudominio.com"
echo ""
echo "5. Copy nginx config:"
echo "   sudo cp nginx.conf /etc/nginx/sites-available/inmovalencia"
echo "   sudo ln -s /etc/nginx/sites-available/inmovalencia /etc/nginx/sites-enabled/"
echo "   sudo nginx -t"
echo "   sudo systemctl reload nginx"
echo ""
echo "6. Deploy application:"
echo "   chmod +x deploy.sh"
echo "   ./deploy.sh"
echo ""
echo "⚠️  IMPORTANT: Log out and log back in for Docker group changes to take effect!"
