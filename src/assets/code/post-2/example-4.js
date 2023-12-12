export default `\
ssl_certificate /etc/letsencrypt/live/YOURDOMAIN/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/YOURDOMAIN/privkey.pem;
include /etc/letsencrypt/options-ssl-nginx.conf;
ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
`;
