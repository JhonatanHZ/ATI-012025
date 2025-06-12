FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

# Instalar dependencias necesarias
RUN apt-get update && \
    apt-get install -y python3 python3-pip python3-venv \
    apache2 apache2-utils ssl-cert libapache2-mod-wsgi-py3 && \
    pip install flask beaker-py

# Crear el directorio de destino
RUN mkdir -p /var/www/html/ATI

# Copiar todos los archivos al contenedor
COPY . /var/www/html/ATI

# Crear archivo de configuración basado en la config por defecto
RUN cp /etc/apache2/sites-enabled/000-default.conf /etc/apache2/conf-available/mod-wsgi.conf

# Insertar WSGIScriptAlias justo antes de </VirtualHost>
RUN sed -i '/<\/VirtualHost>/i \    WSGIScriptAlias /ATI/index.py /var/www/html/ATI/app.wsgi' /etc/apache2/conf-available/mod-wsgi.conf

# Activar módulo y configuración de WSGI
RUN a2enmod wsgi && a2enconf mod-wsgi

# Exponer el puerto 80 del contenedor
EXPOSE 80

# Iniciar Apache en primer plano
CMD ["apachectl", "-D", "FOREGROUND"]
