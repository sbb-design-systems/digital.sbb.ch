FROM cloud.docker.bin.sbb.ch/cloud/plattform-nginx:1.20.2-rootless

# Copy dist files to nginx html folder
COPY dist .
