FROM python:3.8

EXPOSE 5000

# dont generate .pyc
ENV PYTHONDONTWRITEBYTECODE 1

# Turn off buffering
ENV PYTHONUNBUFFERED 1

WORKDIR /app

ADD . /app

RUN pip install -r requirements.txt


ENTRYPOINT [ "python" ]

CMD [ "app.py" ]