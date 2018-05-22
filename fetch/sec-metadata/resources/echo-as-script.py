def main(request, response):
    headers = [("Content-Type", "text/javascript")]

    body = "var header = '%s';" % request.headers["sec-metadata"];

    return headers, body
