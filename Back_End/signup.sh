curl -X 'POST' \
  'https://api.weasoft.com/signup/' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "username": "string",
  "password": "string",
  "phone_email": "string"
}'
# echo 
# curl -X 'POST' \
#   'https://api.weasoft.com/login/' \
#   -H 'accept: application/json' \
#   -H 'Content-Type: application/json' \
#   -d '{
#   "username": "string",
#   "password": "string"
# }'
# echo
# curl -X 'GET' \
#   'https://api.weasoft.com/checkLogin' \
#   -H 'accept: application/json'