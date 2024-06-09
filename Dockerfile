# Étape 1 : Construction de l'image de construction
FROM node:18 AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier le package.json et le package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source
COPY . .

# Désactiver la télémétrie Next.js
ENV NEXT_TELEMETRY_DISABLED 1

# Construire l'application Next.js
RUN npm run build

# Étape 2 : Création de l'image de production
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de construction et les dépendances depuis l'image de construction
COPY --from=builder /app ./
COPY --from=builder /app/node_modules ./node_modules

# Exposer le port 3001 pour l'application
EXPOSE 3001

# Commande pour lancer l'application
CMD ["npm", "start"]
