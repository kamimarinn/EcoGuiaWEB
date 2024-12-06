# Etapa 1: Construir a aplicação
FROM node:20.16.0 AS build

# Definir diretório de trabalho na etapa de build
WORKDIR /app

# Copiar os arquivos de configuração para o diretório de trabalho
COPY package.json package-lock.json ./

# Instalar dependências
RUN npm ci

# Copiar o restante do código para o container
COPY . .

# Construir a aplicação
RUN npm run build

# Etapa 2: Servir a aplicação com um servidor web leve (como Nginx ou Apache)
FROM nginx:alpine

# Remover a configuração padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar os arquivos estáticos do build para o diretório do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expor a porta 80
EXPOSE 80

# Iniciar o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]