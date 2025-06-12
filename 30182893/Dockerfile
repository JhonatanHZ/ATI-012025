FROM ubuntu:latest

RUN apt-get update -y && \
    apt-get install -y nano net-tools apache2 apache2-utils ssl-cert \
                       python3 python3-pip libapache2-mod-wsgi-py3 \
                       python3.12-venv && \
    apt-get clean

RUN a2enmod wsgi

COPY ./ /var/www/html/ATI

RUN mkdir -p /home/apps/web_cache_pty && \
    python3 -m venv /home/apps/web_cache_pty/web_cache_pty_env && \
    /home/apps/web_cache_pty/web_cache_pty_env/bin/pip install beaker-py

RUN cp /etc/apache2/sites-enabled/000-default.conf /etc/apache2/conf-available/mod-wsgi.conf && \
    echo "WSGIScriptAlias /ATI/index.py /var/www/html/app.py" >> /etc/apache2/conf-available/mod-wsgi.conf && \
    a2enconf mod-wsgi

EXPOSE 80

CMD ["apache2ctl", "-D", "FOREGROUND"]
