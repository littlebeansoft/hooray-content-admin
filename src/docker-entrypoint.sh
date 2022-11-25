#!/bin/sh
NEXT_ENV_LIST=$(env | grep 'NEXT_PUBLIC')
for NEXT_ENV in $NEXT_ENV_LIST; do
    echo "Setting environment: ${NEXT_ENV}"
    NEXT_ENV_KEY=$(echo "$NEXT_ENV" | sed 's;=.*;;')
    NEXT_ENV_VALUE=$(echo "$NEXT_ENV" | sed 's;.*=;;')
    find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#CUSTOM_${NEXT_ENV_KEY}#${NEXT_ENV_VALUE}#g"
done
exec "$@"