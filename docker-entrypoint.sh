#!/bin/sh
APP_ENV_LIST=$(env | grep 'REACT_APP')
for APP_ENV in $APP_ENV_LIST; do
    echo "Setting environment: ${APP_ENV}"
    APP_ENV_KEY=$(echo "$APP_ENV" | sed 's;=.*;;')
    APP_ENV_VALUE=$(echo "$APP_ENV" | sed 's;.*=;;')
    find /usr/share/nginx/html \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#CUSTOM_${APP_ENV_KEY}#${APP_ENV_VALUE}#g"
done
exec "$@"