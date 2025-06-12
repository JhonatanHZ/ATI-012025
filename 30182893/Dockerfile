FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y \
        python3 \
        python3-pip \
        python3-venv \
        apache2 \
        apache2-utils \
        ssl-cert \
        libapache2-mod-wsgi-py3 \
        git && \
    pip3 install --no-cache-dir flask beaker-py && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

RUN git clone --branch Reto7 https://github.com/JhonatanHZ/ATI-012025.git /tmp/ATI-012025

RUN mkdir -p /var/www/html/ATI && \
    cp -r /tmp/ATI-012025/30182893/* /var/www/html/ATI/

RUN cp /etc/apache2/sites-enabled/000-default.conf /etc/apache2/conf-available/mod-wsgi.conf

RUN sed -i '/<\/VirtualHost>/i \    WSGIScriptAlias /ATI/index.py /var/www/html/ATI/app.wsgi' /etc/apache2/conf-available/mod-wsgi.conf

RUN a2enmod wsgi && a2enconf mod-wsgi

EXPOSE 80

CMD ["apachectl", "-D", "FOREGROUND"]
