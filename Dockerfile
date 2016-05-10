FROM countly/countly-server:16.02

# Disable mongo
RUN rm -rf /etc/service/mongodb

ADD frontend.config.js /opt/countly/frontend/express/config.js
ADD api.config.js /opt/countly/api/config.js

