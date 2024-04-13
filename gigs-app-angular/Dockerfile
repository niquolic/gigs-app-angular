# Stage 1 : Installation des dépendances et construction de l'application Angular
FROM node:latest AS angular-build
WORKDIR /app
COPY . .
# Installation de NVM (Node Version Manager) si Node.js n'est pas déjà installé
RUN command -v node || (curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash)

# Source de NVM dans le shell et installer Node.js si ce n'est pas déjà installé
RUN command -v node || /bin/bash -c "source ~/.nvm/nvm.sh && nvm install node"

# Mettre à jour npm à la dernière version si ce n'est pas déjà fait
RUN command -v npm || /bin/bash -c "source ~/.nvm/nvm.sh && npm install -g npm"

# Installer Angular CLI 17 si ce n'est pas déjà fait
RUN command -v ng || npm install -g @angular/cli@17

RUN npm install

# Exécuter l'application Angular en mode développement avec hot-reload
CMD ["npm", "start"]
