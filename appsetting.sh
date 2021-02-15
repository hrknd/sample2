#!/bin/sh

chown www-data:www-data database/
chown www-data:www-data database/database.sqlite
chown www-data:www-data bootstrap/cache
chmod og+rw database/database.sqlite
php artisan clean:models
