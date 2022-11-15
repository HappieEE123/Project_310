import os
import random
for msg in [str(random.random()) for i in range(3)]:
    os.system(f"""curl -X 'POST' \
    'https://api.weasoft.com/post/' \
    -H 'accept: application/json' \
    -H 'Content-Type: multipart/form-data' \
    -F 'file=@6;type=image/jpeg' \
    -F 'description={msg}'
    """)

    print("")

    os.system("""curl -X 'GET' \
  'https://api.weasoft.com/feed' \
  -H 'accept: application/json'""")