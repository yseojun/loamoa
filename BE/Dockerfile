FROM python:3.9-alpine

ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY requirements.txt /app/
RUN pip install --upgrade pip
RUN apk add --no-cache postgresql-dev postgresql-client \
	&& pip install -r requirements.txt

COPY . /app/

# COPY entrypoint.sh /app/
# RUN chmod +x /app/entrypoint.sh

WORKDIR /app/loamoa

# ENTRYPOINT ["/app/entrypoint.sh"]

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--workers", "3", "loamoa.wsgi:application"]
