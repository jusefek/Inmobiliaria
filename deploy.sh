#!/bin/bash
set -e

echo "🚀 Deploying Inmovalencia Platform..."

# Load environment variables
if [ -f .env.production ]; then
    export $(cat .env.production | grep -v '#' | xargs)
else
    echo "❌ Error: .env.production not found!"
    exit 1
fi

# Pull latest code
echo "📥 Pulling latest code from GitHub..."
git pull origin main

# Stop existing containers
echo "🛑 Stopping existing containers..."
docker-compose -f docker-compose.prod.yml down

# Remove old images (optional - saves space)
echo "🗑️  Cleaning up old images..."
docker image prune -f

# Build new image
echo "🔨 Building new Docker image..."
docker-compose -f docker-compose.prod.yml build --no-cache

# Start services
echo "▶️  Starting services..."
docker-compose -f docker-compose.prod.yml up -d

# Wait for health check
echo "⏳ Waiting for database to be ready..."
sleep 10

# Show logs
echo "📋 Recent logs:"
docker-compose -f docker-compose.prod.yml logs --tail=50

echo "✅ Deployment complete!"
echo "🌐 Application should be running on https://tudominio.com"
