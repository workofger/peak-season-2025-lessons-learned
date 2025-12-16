#!/bin/bash

# ===========================================
# Deploy Script - SFTP with .pem
# ===========================================

set -e

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 Starting deployment...${NC}"

# Cargar variables de entorno
if [ -f .env.local ]; then
    export $(cat .env.local | grep -v '^#' | xargs)
else
    echo -e "${RED}❌ Error: .env.local not found${NC}"
    echo "Please create .env.local with SFTP configuration"
    exit 1
fi

# Validar variables requeridas
required_vars=("SFTP_HOST" "SFTP_USER" "SFTP_PEM_PATH" "SFTP_REMOTE_PATH")
for var in "${required_vars[@]}"; do
    if [ -z "${!var}" ]; then
        echo -e "${RED}❌ Error: $var is not set in .env.local${NC}"
        exit 1
    fi
done

# Verificar que el archivo .pem existe
if [ ! -f "$SFTP_PEM_PATH" ]; then
    echo -e "${RED}❌ Error: PEM file not found at $SFTP_PEM_PATH${NC}"
    exit 1
fi

# Verificar permisos del .pem (debe ser 400 o 600)
PEM_PERMS=$(stat -f "%A" "$SFTP_PEM_PATH" 2>/dev/null || stat -c "%a" "$SFTP_PEM_PATH" 2>/dev/null)
if [ "$PEM_PERMS" != "400" ] && [ "$PEM_PERMS" != "600" ]; then
    echo -e "${YELLOW}⚠️  Fixing PEM file permissions...${NC}"
    chmod 400 "$SFTP_PEM_PATH"
fi

# Build de producción
echo -e "${YELLOW}📦 Building production bundle...${NC}"
npm run build

if [ ! -d "dist" ]; then
    echo -e "${RED}❌ Error: Build failed - dist folder not found${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build completed${NC}"

# Deploy via SFTP
echo -e "${YELLOW}📤 Uploading to server...${NC}"

SFTP_PORT=${SFTP_PORT:-22}

# Crear directorio remoto si no existe y subir archivos
sftp -i "$SFTP_PEM_PATH" -P "$SFTP_PORT" -o StrictHostKeyChecking=no "$SFTP_USER@$SFTP_HOST" << EOF
mkdir $SFTP_REMOTE_PATH
cd $SFTP_REMOTE_PATH
put -r dist/*
bye
EOF

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Deployment successful!${NC}"
    echo -e "${GREEN}🌐 Your app should be live at your server${NC}"
else
    echo -e "${RED}❌ Deployment failed${NC}"
    exit 1
fi

