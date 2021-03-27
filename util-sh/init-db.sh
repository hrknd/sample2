#!/bin/sh

touch database/database.sqlite
php artisan migrate:refresh --seed
