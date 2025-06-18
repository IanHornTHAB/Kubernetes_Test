# Verwende das offizielle Node.js-Image als Basis (da Azure Functions für Node.js läuft)
FROM mcr.microsoft.com/azure-functions/node:4

# Setze das Arbeitsverzeichnis im Container
WORKDIR /home/site/wwwroot

# Kopiere die package.json und package-lock.json, um Abhängigkeiten zu installieren
COPY package*.json ./

# Installiere die Node.js-Abhängigkeiten
RUN npm install --production

# Kopiere den gesamten Code (einschließlich TypeScript-Dateien) in den Container
COPY . .

# Baue den TypeScript-Code (es wird in dist/ gespeichert)
RUN npm run build

# Um sicherzustellen, dass der "func" Befehl korrekt verfügbar ist, installieren wir die Azure Functions-CLI
RUN npm install -g azure-functions-core-tools@4 --unsafe-perm true

# Öffne den Port, auf dem die Azure Function laufen soll
EXPOSE 80

# Befehl zum Starten der Funktion
CMD ["func", "start", "--port", "80", "--script-root", "/home/site/wwwroot"]
# hier ist irgendwo ein fehler, vorher war es ohne /dist/src
# und jetzt ist es mit /dist/src
#vlt mit function.json
# und les logs von docker desktop