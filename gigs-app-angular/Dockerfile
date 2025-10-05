# ================================================================= 
# Stage 1: Build Angular
# ================================================================= 
FROM node:20 AS angular-build  

WORKDIR /app
COPY package.json package-lock.json ./  
RUN npm install  
COPY . .  
RUN npm run build -- --output-path=dist/browser  

# ================================================================= 
# Stage 2: Nginx avec substitution de port
# ================================================================= 
FROM nginx:alpine  

# Copier les fichiers statiques
COPY --from=angular-build /app/dist/browser /usr/share/nginx/html  

# Copier le template nginx
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

# Créer le script DIRECTEMENT dans le Dockerfile (pas de problème CRLF)
RUN printf '#!/bin/sh\n\
set -e\n\
export PORT=${PORT:-8080}\n\
echo "=== Starting Nginx on port $PORT ==="\n\
envsubst '"'"'$PORT'"'"' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf\n\
echo "=== Generated nginx config ==="\n\
cat /etc/nginx/conf.d/default.conf\n\
echo "=== Testing nginx config ==="\n\
nginx -t\n\
echo "=== Starting nginx ==="\n\
exec nginx -g "daemon off;"\n' > /docker-entrypoint.sh && \
    chmod +x /docker-entrypoint.sh

EXPOSE 8080

ENTRYPOINT ["/docker-entrypoint.sh"]