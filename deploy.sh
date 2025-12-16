#!/bin/bash

# ===========================================
# Deploy Script - SFTP to PartRunner Products
# ===========================================

set -e

# Colores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}  🚀 Peak Season 2025 - Deploy Script${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

# Cargar variables
if [ -f .env.local ]; then
    export $(cat .env.local | grep -v '^#' | grep -v '^$' | xargs)
else
    echo -e "${RED}❌ .env.local not found${NC}"
    exit 1
fi

# Validar
PEM_PATH="${SFTP_PEM_PATH:-./assets/partrunner-products.pem}"
HOST="${SFTP_HOST:-sftp-products.partrunner.com}"
USER="${SFTP_USER:-productsroot}"
REMOTE_PATH="${SFTP_REMOTE_PATH:-/products.partrunner.com/PeakSeason2025}"

if [ ! -f "$PEM_PATH" ]; then
    echo -e "${RED}❌ PEM file not found: $PEM_PATH${NC}"
    exit 1
fi

# Fix permisos del .pem
chmod 400 "$PEM_PATH" 2>/dev/null || true

# Build
echo -e "\n${YELLOW}📦 Building production bundle...${NC}"
npm run build

if [ ! -d "dist" ]; then
    echo -e "${RED}❌ Build failed${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Build completed${NC}"

# Deploy
echo -e "\n${YELLOW}📤 Deploying to ${HOST}...${NC}"

sftp -i "$PEM_PATH" -o StrictHostKeyChecking=no "$USER@$HOST" << EOF
mkdir $REMOTE_PATH
cd $REMOTE_PATH
put dist/index.html
mkdir assets
cd assets
lcd dist/assets
put *
bye
EOF

if [ $? -eq 0 ]; then
    echo -e "\n${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${GREEN}  ✅ Deploy successful!${NC}"
    echo -e "${GREEN}  🌐 https://products.partrunner.com/PeakSeason2025/${NC}"
    echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
else
    echo -e "${RED}❌ Deploy failed${NC}"
    exit 1
fi
