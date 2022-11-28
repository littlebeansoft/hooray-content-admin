#!/bin/sh
ENV_LIST=$(env | grep 'PUBLIC')
for ENV in $ENV_LIST; do
    echo "Setting environment: ${ENV}"
    ENV_KEY=$(echo "$ENV" | sed 's;=.*;;')
    ENV_VALUE=$(echo "$ENV" | sed 's;.*=;;')
    find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#CUSTOM_${ENV_KEY}#${ENV_VALUE}#g"
done
exec "$@"