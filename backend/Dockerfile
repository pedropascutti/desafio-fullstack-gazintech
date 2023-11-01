FROM php:8.2-apache

# Mod Rewrite
RUN a2enmod rewrite

# Linux Library
RUN apt-get update -y && apt-get install -y \
    libicu-dev \
    libmariadb-dev \
    unzip zip \
    zlib1g-dev \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng-dev \
    openssl

RUN docker-php-ext-install mysqli pdo pdo_mysql && docker-php-ext-enable pdo_mysql

# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /app/backend
COPY . .
RUN composer install

EXPOSE 8000
CMD php artisan serve --host=0.0.0.0
