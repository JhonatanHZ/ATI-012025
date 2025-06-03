FROM ubuntu

RUN apt-get update -y && \
    apt-get upgrade -y && \
    apt-get install -y nano net-tools apache2

COPY ./ /var/www/html/ATI

EXPOSE 80

CMD ["apache2ctl", "-D", "FOREGROUND"]