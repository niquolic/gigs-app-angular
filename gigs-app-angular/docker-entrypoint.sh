#!/bin/sh
set -e

# Définir le port (8080 par défaut)
export PORT=${PORT:-8080}

echo "=== Starting Nginx on port $PORT ==="

# Substituer $PORT dans le template
envsubst '$PORT' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf

echo "=== Generated nginx config ==="
cat /etc/nginx/conf.d/default.conf

echo "=== Testing nginx config ==="
nginx -t

echo "=== Starting nginx ==="
exec nginx -g "daemon off;"
