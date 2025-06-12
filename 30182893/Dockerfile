FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

# Instalar dependencias necesarias
RUN apt-get update && \
    apt-get install -y python3 python3-pip python3-venv git \
    apache2 apache2-utils ssl-cert libapache2-mod-wsgi-py3 && \
    pip install flask beaker-py

# Clonar directamente el contenido del reto
RUN git clone --branch Reto7 https://github.com/JhonatanHZ/ATI-012025.git /tmp/ATI-012025

# Crear el directorio donde se alojará la app
RUN mkdir -p /var/www/html/ATI && \
    cp -r /tmp/ATI-012025/30182893/* /var/www/html/ATI/

# Crear archivo WSGI
RUN cat <<EOF > /var/www/html/ATI/app.wsgi
import sys
import os

sys.path.insert(0, '/var/www/html/ATI')
from app import application
EOF

# Crear archivo de configuración para mod_wsgi
RUN cp /etc/apache2/sites-available/000-default.conf /etc/apache2/conf-available/mod-wsgi.conf

# Insertar configuración WSGI en Apache
RUN sed -i '/<\/VirtualHost>/i \    WSGIScriptAlias /ATI/index.py /var/www/html/ATI/app.wsgi' /etc/apache2/conf-available/mod-wsgi.conf && \
    sed -i '/<\/VirtualHost>/i \    Alias /ATI/ /var/www/html/ATI/\n    <Directory /var/www/html/ATI>\n        Require all granted\n    </Directory>' /etc/apache2/conf-available/mod-wsgi.conf

# Activar módulos y configuración
RUN a2enmod wsgi && a2enconf mod-wsgi

EXPOSE 80

CMD ["apachectl", "-D", "FOREGROUND"]
