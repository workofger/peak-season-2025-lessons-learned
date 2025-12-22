#!/bin/bash

# ===========================================
# 🚀 Deploy Script - SFTP to PartRunner Products
# ===========================================
# Universal deploy script for presentation templates

set -e

# Colores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}  🚀 Presentation Template - Deploy${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

# ─────────────────────────────────────────
# Cargar variables de entorno
# ─────────────────────────────────────────
if [ -f .env.local ]; then
    export $(cat .env.local | grep -v '^#' | grep -v '^$' | xargs)
    echo -e "${GREEN}✓${NC} Loaded .env.local"
else
    echo -e "${RED}❌ .env.local not found${NC}"
    echo -e "${YELLOW}   Copy .env.example to .env.local and configure it${NC}"
    exit 1
fi

# ─────────────────────────────────────────
# Configuración
# ─────────────────────────────────────────
PEM_PATH="${SFTP_PEM_PATH:-./assets/partrunner-products.pem}"
HOST="${SFTP_HOST:-sftp-products.partrunner.com}"
USER="${SFTP_USER:-productsroot}"
REMOTE_PATH="${SFTP_REMOTE_PATH}"
LOCAL_PATH="${SFTP_LOCAL_PATH:-./dist}"

# Extraer nombre del proyecto del path
PROJECT_NAME=$(basename "$REMOTE_PATH")

echo -e "\n${CYAN}📋 Configuration:${NC}"
echo -e "   Host:    ${HOST}"
echo -e "   User:    ${USER}"
echo -e "   Remote:  ${REMOTE_PATH}"
echo -e "   Project: ${PROJECT_NAME}"

# ─────────────────────────────────────────
# Validaciones
# ─────────────────────────────────────────
if [ -z "$REMOTE_PATH" ]; then
    echo -e "\n${RED}❌ SFTP_REMOTE_PATH not set in .env.local${NC}"
    exit 1
fi

if [ ! -f "$PEM_PATH" ]; then
    echo -e "\n${RED}❌ PEM file not found: $PEM_PATH${NC}"
    echo -e "${YELLOW}   Make sure the key file exists in ./assets/${NC}"
    exit 1
fi

# Fix permisos del .pem
chmod 400 "$PEM_PATH" 2>/dev/null || true

# ─────────────────────────────────────────
# Build
# ─────────────────────────────────────────
echo -e "\n${YELLOW}📦 Building production bundle...${NC}"
npm run build

if [ ! -d "$LOCAL_PATH" ]; then
    echo -e "${RED}❌ Build failed - dist folder not found${NC}"
    exit 1
fi

# Contar archivos
FILE_COUNT=$(find "$LOCAL_PATH" -type f | wc -l | tr -d ' ')
echo -e "${GREEN}✅ Build completed (${FILE_COUNT} files)${NC}"

# ─────────────────────────────────────────
# Deploy
# ─────────────────────────────────────────
echo -e "\n${YELLOW}📤 Deploying to ${HOST}...${NC}"
echo -e "   Target: ${REMOTE_PATH}"

sftp -i "$PEM_PATH" -o StrictHostKeyChecking=no "$USER@$HOST" << EOF
mkdir $REMOTE_PATH
cd $REMOTE_PATH
put dist/index.html
put dist/Isotipo.png
put dist/Logo.png
mkdir assets
cd assets
lcd dist/assets
put *
bye
EOF

# ─────────────────────────────────────────
# Resultado
# ─────────────────────────────────────────
if [ $? -eq 0 ]; then
    # Construir URL final
    URL="https://products.partrunner.com/${PROJECT_NAME}/"
    
    echo -e "\n${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${GREEN}  ✅ Deploy successful!${NC}"
    echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "\n${CYAN}  🌐 ${URL}${NC}\n"
else
    echo -e "\n${RED}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${RED}  ❌ Deploy failed${NC}"
    echo -e "${RED}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    exit 1
fi
