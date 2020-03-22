FROM php:7.3.2-apache-stretch
RUN a2enmod rewrite
RUN docker-php-ext-install pdo_mysql
RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"
COPY ./php.ini $PHP_INI_DIR/conf.d/