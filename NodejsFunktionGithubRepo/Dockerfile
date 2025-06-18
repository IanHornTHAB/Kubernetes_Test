# -------- Build & runtime in EINEM (Single-Stage) -----------------
# Offizielles Azure-Functions v4-Image mit Node 20
FROM mcr.microsoft.com/azure-functions/node:4-node20

# Arbeitsverzeichnis im Container
WORKDIR /home/site/wwwroot

# Nur package.json und package-lock.json kopieren, damit Docker-Cache greift
COPY package*.json ./

# Prod-Dependencies installieren
RUN npm ci --only=production

# Quellcode der Functions kopieren
COPY . .

# Optionale, aber nützliche Logs für lokale Tests
ENV AzureFunctionsJobHost__Logging__Console__IsEnabled=true \
    AzureWebJobsScriptRoot=/home/site/wwwroot

# Container lauscht intern auf Port 80 (reicht für AKS & lokale Tests)
EXPOSE 80

# Ein explizites CMD ist nicht nötig – das Basisimage bringt einen
# Entrypoint mit, der den Functions-Host startet.
