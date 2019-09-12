# htmlToImageConverter
curl -X POST \
  http://localhost:3000/html-to-image \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Postman-Token: 5a9bba14-d9a7-49fb-8f6f-d25be99f7d72' \
  -d htmldata=%3Ch1%20%3EHi%3C%2Fh1%3E%0A%3Cp%3E%20How%20are%20you%20doing%3C%2Fp%3E
