FROM nginxinc/nginx-unprivileged:stable

# Copy nginx configuration
COPY ./.github/default.conf /etc/nginx/conf.d/default.conf

# Copy dist files to nginx html folder
COPY dist /usr/share/nginx/html
